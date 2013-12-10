//
// Appdacity
// author: Van Eiseman
//
// Model file for integration of Titanium Alloy with Google Calendar JSON Feed
//
var Alloy = require("alloy");
var moment = require('alloy/moment');

exports.definition = {
	
    config : {
        "columns": {
            "id" : "text",
            "date" : "text",
        	"start" : "text",
        	"end" : "text",
            "title" : "text",
            "details" : "text",
            "displayName" : "text",
            "email" : "text"
        },
        
        "URL" : "http://www.google.com/calendar/feeds/" + Alloy.CFG.calendarID + "/public/full?alt=jsonc&orderby=starttime&max-results=15&singleevents=true&sortorder=ascending&futureevents=true",
        "debug" : Alloy.CFG.debug, //debug mode enabled
        "useStrictValidation" : 1, // validates each item if all columns are present
        "adapter" : {
            "type" : "sqlrest",
            "db_name" : "mytbk_dev",
            "collection_name" : "schedules",
            "idAttribute" : "id",

            // optimise the amount of data transfer from remote server to app
            "addModifedToUrl" : false
        },
        
        //optional
        "headers" : { 
        	//your custom headers
        },
        
        // identify the initial JSON node sctructure the model will derive from
        //"parentNode" : "data.items",
        "parentNode" : function (e) {
		    var entries = [];
		
		    _.each(e.data.items, function(_item) {
		        var entry = {};
		
		        entry.id = _item.id;
		        entry.date = moment(_item.when[0].start).format('dddd, MMMM D');
		        entry.start = moment(_item.when[0].start).format('h:mm A');
		        entry.end = moment(_item.when[0].end).format('h:mm A');
		        entry.title = _item.title;
		        entry.details = _item.details;
		        entry.displayName = _item.creator.displayName;
		        entry.email = _item.creator.email;
		
		        entries.push(entry);
		    });
			Ti.API.info('[schedules.js] CUSTOM PARSING RESULTS > ' + JSON.stringify(entries));
		    return entries;
		},

        // delete all models on fetch
        "deleteAllOnFetch" : true,
        
        // if you want to get the local data immediately, and get the remote data when the server responds
        "initFetchWithLocalData" : true
    },
    
    extendModel : function(Model) {
        _.extend(Model.prototype, {
            // Extend, override or implement the Backbone.Model methods
			
			
			
        });
        // end extend

        return Model;
    },

    extendCollection : function(Collection) {
        _.extend(Collection.prototype, {
        	// Extend, override or implement the Backbone.Collection methods
        	
        	
        });
        // end extend

        return Collection;
    }
};

