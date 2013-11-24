exports.buttonTab1 = $.buttonTab;
exports.buttonTab2 = $.invisibleTabA;
exports.buttonTab3 = $.invisibleTabB;

var classSchedule = Alloy.Collections.schedules;

classSchedule.fetch({ 
	success: function(data) {
	    Ti.API.info('[schedule.js] SCHEDULE COLLECTION : DATA SUCCESS');
	    Ti.API.info('*** ' + JSON.stringify(data));
    },
    error : function(){
        Ti.API.error("[schedule.js] SCHEDULE COLLECTION : ERROR *** there was problem fetching collection data");
    }
});