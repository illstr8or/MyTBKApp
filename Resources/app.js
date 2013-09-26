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

Alloy.createController("index");