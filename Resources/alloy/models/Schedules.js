var Alloy = require("alloy");

var moment = require("alloy/moment");

exports.definition = {
    config: {
        columns: {
            id: "text",
            date: "text",
            start: "text",
            end: "text",
            title: "text",
            details: "text",
            displayName: "text",
            email: "text"
        },
        URL: "http://www.google.com/calendar/feeds/" + Alloy.CFG.calendarID + "/public/full?alt=jsonc&orderby=starttime&max-results=15&singleevents=true&sortorder=ascending&futureevents=true",
        debug: Alloy.CFG.debug,
        useStrictValidation: 1,
        adapter: {
            type: "sqlrest",
            db_name: "mytbk_dev",
            collection_name: "schedules",
            idAttribute: "id",
            addModifedToUrl: false
        },
        headers: {},
        parentNode: function(e) {
            var entries = [];
            _.each(e.data.items, function(_item) {
                var entry = {};
                entry.id = _item.id;
                entry.date = moment(_item.when[0].start).format("dddd, MMMM D");
                entry.start = moment(_item.when[0].start).format("h:mm A");
                entry.end = moment(_item.when[0].end).format("h:mm A");
                entry.title = _item.title;
                entry.details = _item.details;
                entry.displayName = _item.creator.displayName;
                entry.email = _item.creator.email;
                entries.push(entry);
            });
            Ti.API.info("[schedules.js] CUSTOM PARSING RESULTS > " + JSON.stringify(entries));
            return entries;
        },
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