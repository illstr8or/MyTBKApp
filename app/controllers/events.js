var moment = require('alloy/moment');

exports.buttonTab1 = $.buttonTab;
exports.buttonTab2 = $.invisibleTabA;
exports.buttonTab3 = $.invisibleTabB;

/*
 * Create collection and coresponding models with result of FB graph API call
 * replace var evs with collection
 * what adaptor should be used?
 */

var fb = Alloy.Globals.Facebook;
fb.appid = Alloy.CFG.FACEBOOK_APP_ID;
fb.permissions = ['user_events']; // Permissions your app needs
fb.authorize();
if (fb.loggedIn) {
	//alert('Facebook loggedIn = ' + fb.loggedIn);
	fb.requestWithGraphPath('appdacity/events', { fields:'picture,name,start_time' }, 'GET', function(et) { 
		if (et.success) { 
    		//alert(et.result);
			var rows = [];
			var evs = JSON.parse(et.result);
			for (var a = evs.data.length-1; a >= 0; a--) { 
				Ti.API.info ('[events.js] FB RESULT = ' + moment(evs.data[a].start_time).format('ddd, MMM D, YYYY, h:mm a'));
				var evrow = Ti.UI.createTableViewRow({ 
					layout : 'horizontal', 
					evid : evs.data[a].id,
					height : '70dp'
				});
				
		        var evimage = Ti.UI.createImageView({
		            image : evs.data[a].picture.data.url,
		            width : '60dp',
		            height : '60dp'
		        });
		
		        var evview = Ti.UI.createView({
		            layout : 'vertical',
		            width : Ti.UI.SIZE,
		            height : Ti.UI.FILL
		        });
		
		        var evlevel = Ti.UI.createLabel({
		            text : evs.data[a].name,
		            left : 10,
		            color : '#162b96',
					font : {
						fontSize : '15dp',
						fontWeight : 'bold'
					},
					textAlign : Ti.UI.TEXT_ALIGNMENT_LEFT,
					verticalAlign : Ti.UI.TEXT_VERTICAL_ALIGNMENT_CENTER
		        });
		        evview.add(evlevel);
		        
		        var evDate = Ti.UI.createLabel({
		            text : moment(evs.data[a].start_time).format('ddd, MMM D, YYYY, h:mm a'),
		            left : 10,
		            color : '#000',
					font : {
						fontSize : '12dp',
						fontWeight : 'bold'
					},
					textAlign : Ti.UI.TEXT_ALIGNMENT_LEFT,
					verticalAlign : Ti.UI.TEXT_VERTICAL_ALIGNMENT_CENTER
		        });
		        
		        evview.add(evDate);
		        evrow.add(evimage);
		        evrow.add(evview);
		        
		        rows.push(evrow);
		    }
			$.eventsTable.setData(rows);
			
		} else if (et.error) {
			alert('There was a problem getting Facebook data > ' + et.error);
		} else {
			alert('Unknown Facebook response');
		}
	});
} else {
    alert("Facebook Not Logged In");
}
/*
fb.addEventListener('logout', function(e) {
    //Ti.App.fireEvent('firstviewupdate');
    //$.eventsTable.setData([]);
    alert('Facebook Logged out');
});

fb.authorize();
*/

