exports.suba = $.events;
exports.subb = $.notifications;
exports.subc = $.schedule;
var a = exports.suba.getView();
var b = exports.subb.getView();
var c = exports.subc.getView();

function rowSelect(arg) {
	switch(arg) {
			
		case 'events' :
			
			a.zIndex = 3;
			b.zIndex = 2;
			c.zIndex = 1;
			
			break;
			
		case 'notifications' :
			
			a.zIndex = 2;
			b.zIndex = 3;
			c.zIndex = 1;
			
			break;
			
		case 'schedule' :
			
			a.zIndex = 1;
			b.zIndex = 2;
			c.zIndex = 3;
			
			break;
	
	}
	
	//alert("You clicked the "+arg+" button");
}

$.events.buttonTab2.addEventListener('click', function(e)
{
	var str = "notifications";
	rowSelect(str);
});

$.events.buttonTab3.addEventListener('click', function(e)
{
	var str = "schedule";
	rowSelect(str);
});

$.notifications.buttonTab2.addEventListener('click', function(e)
{
	var str = "events";
	rowSelect(str);
});

$.notifications.buttonTab3.addEventListener('click', function(e)
{
	var str = "schedule";
	rowSelect(str);
});

$.schedule.buttonTab2.addEventListener('click', function(e)
{
	var str = "events";
	rowSelect(str);
});

$.schedule.buttonTab3.addEventListener('click', function(e)
{
	var str = "notifications";
	rowSelect(str);
});


