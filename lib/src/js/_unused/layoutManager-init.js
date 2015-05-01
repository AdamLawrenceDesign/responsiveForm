/***********************************************
	Function:	Layout Manager Initialise
	Author: 	Adam Lawrence
	Contact: 	adam@adamlawrencedesign.com	
*************************************************/

$(function(){

    $.ajax(
    {
        url: 'http://192.168.0.216/AdvAPI/api/WCAPValues/Photocreate/', 
        type: 'GET',
        username: 'WebAPIPhotocreateUser',
        password: '@dvw3b@piu$3r',
        success: function(data)
        {
            var obj = [];
            $.each(data, 
                function(index, value)
                {
                   obj.push({'name': value.description, 'id': value.id });
                }
            );
            var listProducts = new ElementBuilder('tabLinks', 'productList', obj);
        }
    });

    var sortDate = new EventManager('sort', 'sort-date');

});