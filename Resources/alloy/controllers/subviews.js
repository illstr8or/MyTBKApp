function Controller() {
    function rowSelect(arg) {
        switch (arg) {
          case "events":
            a.zIndex = 3;
            b.zIndex = 2;
            c.zIndex = 1;
            break;

          case "notifications":
            a.zIndex = 2;
            b.zIndex = 3;
            c.zIndex = 1;
            break;

          case "schedule":
            a.zIndex = 1;
            b.zIndex = 2;
            c.zIndex = 3;
        }
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "subviews";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.subviews = Ti.UI.createView({
        layout: "composite",
        id: "subviews"
    });
    $.__views.subviews && $.addTopLevelView($.__views.subviews);
    $.__views.schedule = Alloy.createController("schedule", {
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        zIndex: 1,
        id: "schedule",
        __parentSymbol: $.__views.subviews
    });
    $.__views.schedule.setParent($.__views.subviews);
    $.__views.notifications = Alloy.createController("notifications", {
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        zIndex: 2,
        id: "notifications",
        __parentSymbol: $.__views.subviews
    });
    $.__views.notifications.setParent($.__views.subviews);
    $.__views.events = Alloy.createController("events", {
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        zIndex: 3,
        id: "events",
        __parentSymbol: $.__views.subviews
    });
    $.__views.events.setParent($.__views.subviews);
    exports.destroy = function() {};
    _.extend($, $.__views);
    exports.suba = $.events;
    exports.subb = $.notifications;
    exports.subc = $.schedule;
    var a = exports.suba.getView();
    var b = exports.subb.getView();
    var c = exports.subc.getView();
    $.events.buttonTab2.addEventListener("click", function() {
        var str = "notifications";
        rowSelect(str);
    });
    $.events.buttonTab3.addEventListener("click", function() {
        var str = "schedule";
        rowSelect(str);
    });
    $.notifications.buttonTab2.addEventListener("click", function() {
        var str = "events";
        rowSelect(str);
    });
    $.notifications.buttonTab3.addEventListener("click", function() {
        var str = "schedule";
        rowSelect(str);
    });
    $.schedule.buttonTab2.addEventListener("click", function() {
        var str = "events";
        rowSelect(str);
    });
    $.schedule.buttonTab3.addEventListener("click", function() {
        var str = "notifications";
        rowSelect(str);
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;