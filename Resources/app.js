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

Alloy.Collections.schedules = Alloy.createCollection("schedules");

Alloy.Globals.Facebook = require("facebook");

var urbanairport = require("urbanairport");

urbanairport.register({
    debug: true,
    sound: true,
    vibrate: true,
    badge: true,
    alert: true,
    autoBadge: false,
    compatibility: true,
    alias: "tidev",
    tags: [ "testingtesting", "appcelerator", "my-tags" ],
    callback: function(e) {
        "error" === e.type ? alert("Sorry, no push for you: " + e.error) : "success" === e.type ? alert("Your token is: " + e.deviceToken) : "callback" === e.type && alert(e.message);
    }
});

urbanairport.enable();

Alloy.createController("index");