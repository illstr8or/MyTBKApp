function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "referafriend";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.referafriend = Ti.UI.createView({
        layout: "vertical",
        backgroundColor: "#d2d9fc",
        id: "referafriend"
    });
    $.__views.referafriend && $.addTopLevelView($.__views.referafriend);
    $.__views.mainTopBar = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: "60dp",
        backgroundColor: "#0b0a2b",
        layout: "horizontal",
        horizontalWrap: false,
        id: "mainTopBar"
    });
    $.__views.referafriend.add($.__views.mainTopBar);
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
        text: "Refer A Friend"
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
    $.__views.__alloyId15 = Ti.UI.createTableView({
        id: "__alloyId15"
    });
    $.__views.referafriend.add($.__views.__alloyId15);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.mainShare.addEventListener("click", function() {
        alert("Share this view!");
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;