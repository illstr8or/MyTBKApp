function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "location";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.location = Ti.UI.createView({
        layout: "vertical",
        backgroundColor: "#284bff",
        id: "location"
    });
    $.__views.location && $.addTopLevelView($.__views.location);
    $.__views.mainTopBar = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: "60dp",
        backgroundColor: "#0b0a2b",
        layout: "horizontal",
        horizontalWrap: false,
        id: "mainTopBar"
    });
    $.__views.location.add($.__views.mainTopBar);
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
        text: "Location"
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
    var __alloyId4 = [];
    $.__views.annotation1 = Ti.Map.createAnnotation({
        animate: true,
        pincolor: Ti.Map.ANNOTATION_RED,
        title: "TBK",
        latitude: 41.809936,
        longitude: -87.996254,
        id: "annotation1"
    });
    __alloyId4.push($.__views.annotation1);
    $.__views.map = Ti.Map.createView({
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        region: {
            latitude: 41.809936,
            latitudeDelta: .01,
            longitude: -87.996254,
            longitudeDelta: .01
        },
        top: "5dp",
        left: "5dp",
        right: "5dp",
        bottom: "5dp",
        annotations: __alloyId4,
        ns: Ti.Map,
        id: "map"
    });
    $.__views.location.add($.__views.map);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.mainShare.addEventListener("click", function() {
        alert("Share this view!");
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;