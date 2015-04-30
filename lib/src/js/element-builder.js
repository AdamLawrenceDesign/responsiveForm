/***********************************************
    Function:   Element Builder
    Author:     Adam Lawrence
    Contact:    adam@adamlawrencedesign.com 
*************************************************/

function ElementBuilder(type, wrap, obj, mGrid, callback)
{
    this.type = type;
    this.wrap = wrap;
    this.obj = obj;
    this.masonaryGrid = mGrid;
    this.callback = callback;
    this.init()
}

ElementBuilder.prototype.addMasonary = function(el)
{
    // The El variable must have a width allocated
    
    var container = document.getElementById(this.wrap);
    
    $('#' + this.wrap + ' li div img').load(function()
    {
        var masonry = new Masonry(container, 
        {
            columnWidth: el,
            itemSelector: el
        });
        // console.log('masonary called');
    });
};

ElementBuilder.prototype.imageLinks = function()
{
    for(var i = 0; i < this.obj.length; i++)
    {
        var wrap, li, a, img;
        
        wrap = document.getElementById(this.wrap);
        li = document.createElement('li');
        a = document.createElement('a');
        img = document.createElement('img');
            
        $(li).append(a);
        $(a).append(img);
        $(wrap).append(li);

        $(img).attr({'src': this.obj[i].Path, 'alt': this.obj[i].Name });
        $(a).attr({'data-id': this.obj[i].ID, 'data-lookUp' : i});
        
        /*======================= */    // Masonary Needed for list controls 
        
        if(this.masonaryGrid) $(li).addClass('grid');       
    }
        
    /*======================= */    // Apply call back if specified and check to apply masonary
    
    if(this.callback)   this.callback();
    if(this.masonaryGrid) this.addMasonary('.list-grid-25');
};

ElementBuilder.prototype.tabLinks = function()
{
    for(var i = 0; i < this.obj.length; i++)
    {
        var wrap, li, a;
        
        wrap = document.getElementById(this.wrap);
        li = document.createElement('li');
        a = document.createElement('a');
        
        $(li).append(a);
        $(wrap).append(li);
        $(a).html(this.obj[i].name + '<span class="icon-checkmark2 fl_rt txt_sec_m"></span>').attr({'data-id': this.obj[i].id, 'data-lookUp' : i});
    }
};

ElementBuilder.prototype.custom = function()
{
    console.log('Custom builder called');
    
    for(var i = 0; i < this.obj.length; i++)
    {
        var wrap, template, li, a, img;

        wrap = document.getElementById(this.wrap);
        template = $(document.getElementById(this.wrap + 'Template')).clone();

        $(template).attr({'id':'layoutLink' + i, 'data-layoutId' : this.obj[i].layoutID});
        $(template).find('img').attr('src', 'https://www.advancedimage.com.au/CreateJS/Layouts/' + this.obj[i].layoutID + '.jpg');
        $(template).find('.productName').html(this.obj[i].layoutID);
        $(template).find('a').attr('data-productId', this.obj[i].productID)
        $(wrap).append(template);
    }

    if(this.callback)   this.callback();
    if(this.masonaryGrid) this.addMasonary(this.masonaryGrid);
};

ElementBuilder.prototype.init = function()
{
    switch(this.type)
    {
        case 'tabLinks':
            this.tabLinks();
            break;
        case 'imageLinks':
            this.imageLinks();
            break;
        case 'custom':
            this.custom();
            break;    
    }
};