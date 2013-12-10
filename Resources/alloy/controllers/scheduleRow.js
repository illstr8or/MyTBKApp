function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "scheduleRow";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.row = Ti.UI.createTableViewRow({
        height: "50dp",
        backgroundColor: "transparent",
        focusable: false,
        id: "row"
    });
    $.__views.row && $.addTopLevelView($.__views.row);
    $.__views.rowView = Ti.UI.createView({
        layout: "horizontal",
        width: Ti.UI.FILL,
        id: "rowView"
    });
    $.__views.row.add($.__views.rowView);
    $.__views.startTime = Ti.UI.createLabel({
        color: "#000",
        top: "3dp",
        left: "6dp",
        height: Ti.UI.FILL,
        width: "36dp",
        font: {
            fontSize: "12dp",
            fontWeight: "bold"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        verticalAlign: Ti.UI.TEXT_VERTICAL_ALIGNMENT_CENTER,
        id: "startTime"
    });
    $.__views.rowView.add($.__views.startTime);
    $.__views.sep = Ti.UI.createView({
        top: "10dp",
        left: "3dp",
        bottom: "5dp",
        height: "35dp",
        width: "1dp",
        backgroundColor: "#0b0a2b",
        opacity: .5,
        id: "sep"
    });
    $.__views.rowView.add($.__views.sep);
    $.__views.title = Ti.UI.createLabel({
        color: "#162b96",
        top: "8dp",
        left: "10dp",
        right: "6dp",
        bottom: "6dp",
        height: Ti.UI.FILL,
        font: {
            fontSize: "15dp",
            fontWeight: "bold"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        verticalAlign: Ti.UI.TEXT_VERTICAL_ALIGNMENT_CENTER,
        id: "title"
    });
    $.__views.rowView.add($.__views.title);
    exports.destroy = function() {};
    _.extend($, $.__views);
    Alloy.Collections.schedules;
    var args = arguments[0] || {};
    $.title.text = args.title;
    var start = args.start;
    var brTime = start.replace(" ", "\n");
    $.startTime.text = brTime;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;