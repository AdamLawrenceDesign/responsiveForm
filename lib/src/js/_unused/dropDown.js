$(function(){

/***********************************************
	Function:	Drop Down Menu 
	Author: 	Adam Lawrence
	Contact: 	adam@adamlawrencedesign.com	
*************************************************/

$('a.taphover').on("touchstart", function(e) 
{
		'use strict'; 											//satisfy code inspectors
		var link = $(this); 									//preselect the link

		if (link.hasClass('hover')) 
		{
			return true;
		} 
		else 
		{
			link.addClass('hover');
			$('a.taphover').not(this).removeClass('hover');
			e.preventDefault();
			return false; 											//extra, and to make sure the function has consistent return points
		}
});

/************************************/	

function DropDown(parent, obj, menu)
{	
	var timeoutId = null,
		timer = 200,
		arrow;
	
	this.parent = parent;
	this.obj = obj;
	this.menu = menu; 
	
	this.set = function()
	{
		$(window).load(function(){
			var height = parseInt(parent.height());
			menu.css('top', height + 'px');
		});
		
		var arrow = document.createElement('span');
		$(arrow).addClass('dropArrow');
		obj.append(arrow);
		this.enter();
		this.menuEnter(arrow);
	};
	
	this.enter = function()
	{
		obj.hover(function()
		{
			if(!timeoutId)
			{
				timeoutId = window.setTimeout(function(){
					timeoutId = null;
					menu.slideDown(300);
					obj.find('.dropArrow').fadeIn(300);
				}, timer );
			}	
		},
		function()
		{
			if(timeoutId)
			{	
				window.clearTimeout(timeoutId);
				timeoutId = null;
			}	
			else
			{
				menu.slideUp(300);
				obj.find('.dropArrow').fadeOut();
			}
		});
	};
	
	this.menuEnter = function(arrow)
	{
		menu.mouseenter(function(){
			menu.stop().show();
			$(arrow).show();
		}).mouseleave(function(){
			$(arrow).hide();
			menu.stop().slideUp(300);
		});;
	};
	
	this.addArrow = function()
	{
		var arrow = document.createElement('span');
		$(arrow).addClass('dropArrow');
		obj.append(arrow);
	};
	
};

/************************************/	

function dropDownCall(parent, obj, menu)
{
	var instance = new DropDown(parent, obj, menu);
	return instance;
}

/************************************/	

var giftItems = dropDownCall($('nav'),$('.gift_items'), $('#giftLinks'));	
giftItems.set();
	
var index = dropDownCall($('nav'),$('.home'), $('#homeDrop'));	
index.set();

});
