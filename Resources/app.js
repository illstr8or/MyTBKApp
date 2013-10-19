var Alloy = require("alloy"), _ = Alloy._, Backbone = Alloy.Backbone;

Ti.UI.setBackgroundColor("#0b0a2b");

Alloy.Globals.isiOS7Plus = function() {
    return false;
};

var iOS7 = Alloy.Globals.isiOS7Plus();

Alloy.Globals.theTop = iOS7 ? 20 : 0;

Alloy.Globals.oneThird = Ti.Platform.displayCaps.platformWidth / 3;

var osname = "android";

var menuOffset = "android" == osname ? 120 : 60;

Alloy.Globals.menuWidth = Ti.Platform.displayCaps.platformWidth - menuOffset;

Alloy.createController("index");