function Controller() {
    function __alloyId22() {
        __alloyId22.opts || {};
        var models = __alloyId21.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId19 = models[i];
            __alloyId19.__transform = {};
            var __alloyId20 = Ti.UI.createTableViewRow({
                title: "undefined" != typeof __alloyId19.__transform["title"] ? __alloyId19.__transform["title"] : __alloyId19.get("title")
            });
            rows.push(__alloyId20);
        }
        $.__views.scheduleTable.setData(rows);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "schedule";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    Alloy.Collections.instance("schedules");
    $.__views.schedule = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        layout: "vertical",
        id: "schedule"
    });
    $.__views.schedule && $.addTopLevelView($.__views.schedule);
    $.__views.customTabBar = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: "35dp",
        layout: "horizontal",
        id: "customTabBar"
    });
    $.__views.schedule.add($.__views.customTabBar);
    $.__views.invisibleTabA = Ti.UI.createView({
        left: 0,
        right: 0,
        width: Alloy.Globals.oneThird,
        height: Ti.UI.FILL,
        backgroundColor: "#162b96",
        id: "invisibleTabA"
    });
    $.__views.customTabBar.add($.__views.invisibleTabA);
    $.__views.btn = Ti.UI.createLabel({
        color: "#fff",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        verticalAlign: Ti.UI.TEXT_VERTICAL_ALIGNMENT_CENTER,
        font: {
            fontSize: "14dp",
            fontWeight: "bold"
        },
        id: "btn",
        text: "events"
    });
    $.__views.invisibleTabA.add($.__views.btn);
    $.__views.invisibleTabB = Ti.UI.createView({
        left: 0,
        right: 0,
        width: Alloy.Globals.oneThird,
        height: Ti.UI.FILL,
        backgroundColor: "#162b96",
        id: "invisibleTabB"
    });
    $.__views.customTabBar.add($.__views.invisibleTabB);
    $.__views.btn = Ti.UI.createLabel({
        color: "#fff",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        verticalAlign: Ti.UI.TEXT_VERTICAL_ALIGNMENT_CENTER,
        font: {
            fontSize: "14dp",
            fontWeight: "bold"
        },
        id: "btn",
        text: "notifications"
    });
    $.__views.invisibleTabB.add($.__views.btn);
    $.__views.buttonTab = Ti.UI.createView({
        left: 0,
        right: 0,
        width: Alloy.Globals.oneThird,
        height: Ti.UI.FILL,
        backgroundColor: "#284bff",
        id: "buttonTab"
    });
    $.__views.customTabBar.add($.__views.buttonTab);
    $.__views.btn = Ti.UI.createLabel({
        color: "#fff",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        verticalAlign: Ti.UI.TEXT_VERTICAL_ALIGNMENT_CENTER,
        font: {
            fontSize: "14dp",
            fontWeight: "bold"
        },
        id: "btn",
        text: "schedule"
    });
    $.__views.buttonTab.add($.__views.btn);
    $.__views.scheduleView = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        backgroundColor: "#284bff",
        layout: "composite",
        id: "scheduleView"
    });
    $.__views.schedule.add($.__views.scheduleView);
    $.__views.scheduleTable = Ti.UI.createTableView({
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        layout: "vertical",
        backgroundColor: "#d2d9fc",
        top: "6dp",
        left: "6dp",
        right: "6dp",
        bottom: "6dp",
        id: "scheduleTable"
    });
    $.__views.scheduleView.add($.__views.scheduleTable);
    var __alloyId21 = Alloy.Collections["schedules"] || schedules;
    __alloyId21.on("fetch destroy change add remove reset", __alloyId22);
    exports.destroy = function() {
        __alloyId21.off("fetch destroy change add remove reset", __alloyId22);
    };
    _.extend($, $.__views);
    exports.buttonTab1 = $.buttonTab;
    exports.buttonTab2 = $.invisibleTabA;
    exports.buttonTab3 = $.invisibleTabB;
    var classSchedule = Alloy.Collections.schedules;
    classSchedule.fetch({
        success: function(data) {
            Ti.API.info("[schedule.js] SCHEDULE COLLECTION : DATA SUCCESS");
            Ti.API.info("*** " + JSON.stringify(data));
        },
        error: function() {
            Ti.API.error("[schedule.js] SCHEDULE COLLECTION : ERROR *** there was problem fetching collection data");
        }
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;