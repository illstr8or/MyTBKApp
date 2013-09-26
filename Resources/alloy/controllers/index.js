function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "#fff",
        navBarHidden: true,
        exitOnClose: true,
        fullscreen: false,
        top: Alloy.Globals.theTop,
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.drawermenu = Alloy.createWidget("com.drawermenu.widget", "widget", {
        id: "drawermenu",
        __parentSymbol: $.__views.index
    });
    $.__views.drawermenu.setParent($.__views.index);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var controls = require("controls");
    var menuView = controls.getMenuView();
    menuView.menuTable.addEventListener("click", function(e) {
        $.drawermenu.showhidemenu();
        Ti.API.info(e.rowData.id);
    });
    $.drawermenu.drawermenuview.add(menuView.getView());
    var mainView = controls.getMainView();
    mainView.menuButton.add(controls.getMenuButton({
        h: "60dp",
        w: "60dp"
    }));
    mainView.menuButton.addEventListener("click", $.drawermenu.showhidemenu);
    $.drawermenu.drawermainview.add(mainView.getView());
    Ti.Gesture.addEventListener("orientationchange", function() {
        $.drawermenu.handleRotation();
    });
    $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;