var Alloy = require("alloy");

exports.getMainView = function() {
    var dash = Alloy.createController("dashboard");
    return dash;
};

exports.getMenuView = function() {
    var menu = Alloy.createController("mainmenu");
    return menu;
};

exports.getMenuButton = function(args) {
    var view = Ti.UI.createView({
        height: args.h,
        width: args.w
    });
    var btn = Ti.UI.createView({
        height: "60dp",
        width: "60dp"
    });
    view.add(btn);
    return view;
};