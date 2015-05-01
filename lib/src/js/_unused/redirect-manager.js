/***********************************************
	Function:	Redirect Manager
	Description: For Dynamic links slices path way and adds target
	Author: 	Adam Lawrence
	Contact: 	me@adamlawrence.com.au	
*************************************************/

function Redirect(rootDir, pageRef, addInfo)
{
	this.rootDir = rootDir;
	this.pageRef = pageRef;
	this.addInfo = addInfo;
	this.init();
}

Redirect.prototype.init = function()
{
	window.location = window.location.origin + '/' + this.rootDir + '/' + this.pageRef + '?%' + this.addInfo;
};
