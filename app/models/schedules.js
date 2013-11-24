//
// Appdacity
// author: Van Eiseman
//
// Model file for integration of Titanium Alloy with Google Calendar JSON Feed
//
var Alloy = require("alloy");

exports.definition = {
	
    config : {
        "columns": {
            "id":"text",
        	"start":"text",
        	"end":"text",
            "title":"text",
            "details":"text",
            "displayName":"text",
            "email":"text"
        },
        
        "URL" : "http://www.google.com/calendar/feeds/" + Alloy.CFG.calendarID + "/public/full?alt=jsonc&orderby=starttime&max-results=15&singleevents=true&sortorder=ascending&futureevents=true",
        "debug": 1, //debug mode enabled
        "useStrictValidation": 0, // validates each item if all columns are present
        "adapter" : {
            "type" : "sqlrest",
            "db_name" : "mytbk",
            "collection_name" : "schedules",
            "idAttribute" : "id",

            // optimise the amount of data transfer from remote server to app
            "addModifedToUrl": false,
            "lastModifiedColumn": "updated"
        },
        
        //optional
        "headers": { 
        	//your custom headers
        },
        
        "parentNode": "data.items",

        // delete all models on fetch
        "deleteAllOnFetch": true,
        
        // if you want to get the local data immediately, and get the remote data when the server 
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

