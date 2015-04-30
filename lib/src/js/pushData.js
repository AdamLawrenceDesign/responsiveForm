/***********************************************
	Function:	Push Data to Matching Form
	Author: 	Adam Lawrence
	Contact: 	adam@adamlawrencedesign.com		
*************************************************/

function CreateForm(form, target, trigger)
{
	this.form = form;
	this.target = target;
	this.trigger = trigger;
	this.init();
}

CreateForm.prototype.pushData = function(callback)
{
	var _this, wrap, inputs;
	
	_this = this;
	inputs = [];
	wrap = this.form;

	$('input').each(function(i, wrap) 
	{
		var name, target, value;
		
		name = $(this).attr('id');	
		target = $(this).attr('data-target');
		value = $(this).val();
		inputs.push({'name': name, 'target': target, 'value': value});
	});

	callback(inputs);
};

CreateForm.prototype.init = function()
{
	var _this = this;

	this.trigger.on('click', function()
	{	
		_this.pushData(function(inputs){

			console.log('Show me the inputs: ', inputs);
			
			for(var i = 0; i < inputs.length; i++)
			{
				var value, target;
				value = inputs[i].value
				target = inputs[i].target;

				$('#' + target).html(value);
			};
		
		});
	});
};

