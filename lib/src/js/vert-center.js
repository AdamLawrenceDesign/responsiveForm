/***********************************************
	Function:	Center Div Vertically 
	Author: 	Adam Lawrence
	Contact: 	me@adamlawrence.com.au	
*************************************************/

function CenterDiv(div)
{
	this.div = div;
	this.init();
}

CenterDiv.prototype.init = function()
{
	var div, height;

	div = document.getElementById(this.div);
	height = $(div).height();

    $(div).addClass('absolute-vert-center').css({'height':height,'margin':'auto'});
    // console.log('Center Div Complete');
};
