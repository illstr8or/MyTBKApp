function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "dateHeader";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.dateHeader = Ti.UI.createView({
        width: Ti.UI.FILL,
        backgroundColor: "#0b0a2b",
        height: "22dp",
        opacity: .8,
        id: "dateHeader"
    });
    $.__views.dateHeader && $.addTopLevelView($.__views.dateHeader);
    $.__views.date = Ti.UI.createLabel({
        color: "#fff",
        font: {
            fontSize: "12dp"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        top: "3dp",
        left: "6dp",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        id: "date"
    });
    $.__views.dateHeader.add($.__views.date);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.date.text = args.dateTxt;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;