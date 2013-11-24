var Alloy = require("alloy");

exports.definition = {
    config: {
        columns: {
            id: "text",
            start: "text",
            end: "text",
            title: "text",
            details: "text",
            displayName: "text",
            email: "text"
        },
        URL: "http://www.google.com/calendar/feeds/" + Alloy.CFG.calendarID + "/public/full?alt=jsonc&orderby=starttime&max-results=15&singleevents=true&sortorder=ascending&futureevents=true",
        debug: 1,
        useStrictValidation: 0,
        adapter: {
            type: "sqlrest",
            db_name: "mytbk",
            collection_name: "schedules",
            idAttribute: "id",
            addModifedToUrl: false,
            lastModifiedColumn: "updated"
        },
        headers: {},
        parentNode: "data.items",
        deleteAllOnFetch: true,
        initFetchWithLocalData: true
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {});
        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {});
        return Collection;
    }
};

var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

model = Alloy.M("schedules", exports.definition, []);

collection = Alloy.C("schedules", exports.definition, model);

exports.Model = model;

exports.Collection = collection;