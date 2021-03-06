function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "notifications";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.notifications = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        layout: "vertical",
        id: "notifications"
    });
    $.__views.notifications && $.addTopLevelView($.__views.notifications);
    $.__views.customTabBar = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: "35dp",
        layout: "horizontal",
        id: "customTabBar"
    });
    $.__views.notifications.add($.__views.customTabBar);
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
        text: "notifications"
    });
    $.__views.buttonTab.add($.__views.btn);
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
        text: "schedule"
    });
    $.__views.invisibleTabB.add($.__views.btn);
    $.__views.notificationsView = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        backgroundColor: "#284bff",
        layout: "composite",
        id: "notificationsView"
    });
    $.__views.notifications.add($.__views.notificationsView);
    $.__views.__alloyId10 = Ti.UI.createTableViewRow({
        title: "Notifications",
        id: "__alloyId10"
    });
    var __alloyId11 = [];
    __alloyId11.push($.__views.__alloyId10);
    $.__views.notificationsTable = Ti.UI.createTableView({
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        layout: "vertical",
        backgroundColor: "#d2d9fc",
        top: "6dp",
        left: "6dp",
        right: "6dp",
        bottom: "6dp",
        data: __alloyId11,
        id: "notificationsTable"
    });
    $.__views.notificationsView.add($.__views.notificationsTable);
    exports.destroy = function() {};
    _.extend($, $.__views);
    exports.buttonTab1 = $.buttonTab;
    exports.buttonTab2 = $.invisibleTabA;
    exports.buttonTab3 = $.invisibleTabB;
    var urbanairport = require("urbanairport");
    urbanairport.register({
        debug: true,
        sound: true,
        vibrate: true,
        badge: true,
        alert: true,
        autoBadge: false,
        compatibility: true,
        alias: "tidev",
        tags: [ "testingtesting", "appcelerator", "my-tags" ],
        callback: function(e) {
            "error" === e.type ? alert("Sorry, no push for you: " + e.error) : "success" === e.type ? alert("Your token is: " + e.deviceToken) : "callback" === e.type && alert(e.message);
        }
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;