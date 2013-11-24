var Alloy = require("alloy"), _ = Alloy._, Backbone = Alloy.Backbone;

Ti.UI.setBackgroundColor("#0b0a2b");

Alloy.Globals.isiOS7Plus = function() {
    var version = Titanium.Platform.version.split(".");
    var major = parseInt(version[0], 10);
    if (major >= 7) return true;
    return false;
};

var iOS7 = Alloy.Globals.isiOS7Plus();

Alloy.Globals.theTop = iOS7 ? 20 : 0;

Alloy.Globals.oneThird = Ti.Platform.displayCaps.platformWidth / 3;

var osname = Ti.Platform.osname;

var menuOffset = "android" == osname ? 120 : 60;

Alloy.Globals.menuWidth = Ti.Platform.displayCaps.platformWidth - menuOffset;

Alloy.Collections.schedules = Alloy.createCollection("schedules");

Alloy.createController("index");