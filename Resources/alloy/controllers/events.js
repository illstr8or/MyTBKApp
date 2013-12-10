function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "events";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.events = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        layout: "vertical",
        id: "events"
    });
    $.__views.events && $.addTopLevelView($.__views.events);
    $.__views.customTabBar = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: "35dp",
        layout: "horizontal",
        id: "customTabBar"
    });
    $.__views.events.add($.__views.customTabBar);
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
        text: "events"
    });
    $.__views.buttonTab.add($.__views.btn);
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
        text: "notifications"
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
        text: "schedule"
    });
    $.__views.invisibleTabB.add($.__views.btn);
    $.__views.eventsView = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        backgroundColor: "#284bff",
        layout: "composite",
        id: "eventsView"
    });
    $.__views.events.add($.__views.eventsView);
    $.__views.eventsTable = Ti.UI.createTableView({
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        layout: "vertical",
        backgroundColor: "#d2d9fc",
        top: "6dp",
        left: "6dp",
        right: "6dp",
        bottom: "6dp",
        id: "eventsTable"
    });
    $.__views.eventsView.add($.__views.eventsTable);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var moment = require("alloy/moment");
    exports.buttonTab1 = $.buttonTab;
    exports.buttonTab2 = $.invisibleTabA;
    exports.buttonTab3 = $.invisibleTabB;
    var fb = Alloy.Globals.Facebook;
    fb.appid = Alloy.CFG.FACEBOOK_APP_ID;
    fb.permissions = [ "user_events" ];
    fb.authorize();
    fb.loggedIn ? fb.requestWithGraphPath("appdacity/events", {
        fields: "picture,name,start_time"
    }, "GET", function(et) {
        if (et.success) {
            var rows = [];
            var evs = JSON.parse(et.result);
            for (var a = evs.data.length - 1; a >= 0; a--) {
                Ti.API.info("[events.js] FB RESULT = " + moment(evs.data[a].start_time).format("ddd, MMM D, YYYY, h:mm a"));
                var evrow = Ti.UI.createTableViewRow({
                    layout: "horizontal",
                    evid: evs.data[a].id,
                    height: "70dp"
                });
                var evimage = Ti.UI.createImageView({
                    image: evs.data[a].picture.data.url,
                    width: "60dp",
                    height: "60dp"
                });
                var evview = Ti.UI.createView({
                    layout: "vertical",
                    width: Ti.UI.SIZE,
                    height: Ti.UI.FILL
                });
                var evlevel = Ti.UI.createLabel({
                    text: evs.data[a].name,
                    left: 10,
                    color: "#162b96",
                    font: {
                        fontSize: "15dp",
                        fontWeight: "bold"
                    },
                    textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
                    verticalAlign: Ti.UI.TEXT_VERTICAL_ALIGNMENT_CENTER
                });
                evview.add(evlevel);
                var evDate = Ti.UI.createLabel({
                    text: moment(evs.data[a].start_time).format("ddd, MMM D, YYYY, h:mm a"),
                    left: 10,
                    color: "#000",
                    font: {
                        fontSize: "12dp",
                        fontWeight: "bold"
                    },
                    textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
                    verticalAlign: Ti.UI.TEXT_VERTICAL_ALIGNMENT_CENTER
                });
                evview.add(evDate);
                evrow.add(evimage);
                evrow.add(evview);
                rows.push(evrow);
            }
            $.eventsTable.setData(rows);
        } else et.error ? alert("There was a problem getting Facebook data > " + et.error) : alert("Unknown Facebook response");
    }) : alert("Facebook Not Logged In");
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;