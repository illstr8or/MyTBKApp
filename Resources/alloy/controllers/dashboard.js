function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "dashboard";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.mainView = Ti.UI.createView({
        layout: "vertical",
        backgroundColor: "#cacaca",
        id: "mainView"
    });
    $.__views.mainView && $.addTopLevelView($.__views.mainView);
    $.__views.mainTopBar = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: "60dp",
        backgroundColor: "#0b0a2b",
        layout: "horizontal",
        horizontalWrap: false,
        id: "mainTopBar"
    });
    $.__views.mainView.add($.__views.mainTopBar);
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
        text: "myTBK"
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
    $.__views.__alloyId0 = Ti.UI.createTableView({
        id: "__alloyId0"
    });
    $.__views.mainView.add($.__views.__alloyId0);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.mainShare.addEventListener("click", function() {
        alert("Share this view!");
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;