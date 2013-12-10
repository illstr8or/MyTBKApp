exports.buttonTab1 = $.buttonTab;
exports.buttonTab2 = $.invisibleTabA;
exports.buttonTab3 = $.invisibleTabB;

var classSchedule = Alloy.Collections.schedules;

classSchedule.fetch({ 
	//localOnly:true,
	success: function(data) {
	    Ti.API.info('[schedule.js] SCHEDULE COLLECTION : DATA SUCCESS');
		/*
		 * // I can get to the models here, Need to iterate to chop up into views
		 * // Need to get this content into a tableRow controller/view to display correctly/styled
		 * 
		 */
		/**/
    	
        // parse to listView
        var rows = [];
        var section = null; // TableViewSection
        var lastDate = "";
        _.each(data.models, function(element, index, list){
        	var date = element.get('date');
        	// if date doesn't match lastDate, 
        	if (!section || date !== lastDate) {
        		if (section) {
        			rows.push(section);
        		}
        		
        		var header = Alloy.createController("dateHeader", {
        			dateTxt : date
        		});
        		
        		// it's a new date, create new section
        		section = Ti.UI.createTableViewSection({
        			headerView : header.getView()
        		});
        		lastDate = date;
        	}
        	
            var row = Alloy.createController("scheduleRow", {
            	//model : element.attributes, // model not necessary. Just wanted to figure out how to work it
                title : element.get('title'), // create individual data elements for the view
                start : element.get('start'),
                end : element.get('end'),
                details : element.get('details'),
                by : element.get('displayName'),
                email : element.get('email')
            });
            section.add(row.getView());
            
            Ti.API.info('*** ' + date);
        });
        // last section
      	rows.push(section);
        // add to your listview
        $.scheduleTable.setData(rows);
	    
	    Ti.API.info('*** ' + JSON.stringify(classSchedule.models));
    },
    error : function(){
        Ti.API.error("[schedule.js] SCHEDULE COLLECTION : ERROR *** there was problem fetching collection data");
    }
});

// Filter the fetched collection before rendering. Don't return the
// collection itself, but instead return an array of models
// that you would like to render.
function whereFunction(collection) {
    return collection.models;
}

// Perform transformations on each model as it is processed. Since
// these are only transformations for UI representation, we don't
// actually want to change the model. Instead, return an object
// that contains the fields you want to use in your bindings. The
// easiest way to do that is to clone the model and return its
// attributes with the toJSON() function.
function transformFunction(model) {
    //var transform = model.toJSON();
    return model;
}

