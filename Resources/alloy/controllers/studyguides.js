function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "studyguides";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.studyguides = Ti.UI.createView({
        layout: "vertical",
        backgroundColor: "#d2d9fc",
        id: "studyguides"
    });
    $.__views.studyguides && $.addTopLevelView($.__views.studyguides);
    $.__views.mainTopBar = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: "60dp",
        backgroundColor: "#0b0a2b",
        layout: "horizontal",
        horizontalWrap: false,
        id: "mainTopBar"
    });
    $.__views.studyguides.add($.__views.mainTopBar);
    $.__views.menuButton = Ti.UI.createView({
        width: "18%",
        height: Ti.UI.FILL,
        id: "menuButton"
    });
    $.__views.mainTopBar.add($.__views.menuButton);
    $.__views.btn = Ti.UI.createImageView({
        id: "btn",
        width: "30dp",
        height: "30dp",
        image: "/menu-icon.png"
    });
    $.__views.menuButton.add($.__views.btn);
    $.__views.mainLabel = Ti.UI.createLabel({
        color: "#fff",
        width: "63%",
        height: Ti.UI.FILL,
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        verticalAlign: Ti.UI.TEXT_VERTICAL_ALIGNMENT_CENTER,
        font: {
            fontSize: "20dp",
            fontWeight: "bold"
        },
        id: "mainLabel",
        text: "Study Guides"
    });
    $.__views.mainTopBar.add($.__views.mainLabel);
    $.__views.mainShare = Ti.UI.createView({
        width: "18%",
        height: Ti.UI.FILL,
        id: "mainShare"
    });
    $.__views.mainTopBar.add($.__views.mainShare);
    $.__views.share = Ti.UI.createImageView({
        id: "share",
        width: "30dp",
        height: "30dp",
        image: "/share-icon.png"
    });
    $.__views.mainShare.add($.__views.share);
    $.__views.__alloyId16 = Ti.UI.createTableView({
        id: "__alloyId16"
    });
    $.__views.studyguides.add($.__views.__alloyId16);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.mainShare.addEventListener("click", function() {
        alert("Share this view!");
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;