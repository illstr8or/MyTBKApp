function Controller() {
    function rowSelect(e) {
        if (currentView.id != e.row.id) {
            $.drawermenu.drawermainview.remove(currentView);
            switch (e.row.id) {
              case "profile":
                currentView = profile.getView();
                break;

              case "studyguides":
                currentView = studyguides.getView();
            }
            $.drawermenu.drawermainview.add(currentView);
        }
    }
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
    $.drawermenu.drawermenuview.add(menuView.getView());
    var mainView = controls.getMainView();
    mainView.menuButton.add(controls.getMenuButton({
        h: "60dp",
        w: "60dp"
    }));
    mainView.menuButton.addEventListener("click", $.drawermenu.showhidemenu);
    var currentView = mainView.getView();
    $.drawermenu.drawermainview.add(currentView);
    var profile = controls.getProfileView();
    profile.menuButton.add(controls.getMenuButton({
        h: "60dp",
        w: "60dp"
    }));
    profile.menuButton.addEventListener("click", $.drawermenu.showhidemenu);
    var studyguides = controls.getStudyGuidesView();
    studyguides.menuButton.add(controls.getMenuButton({
        h: "60dp",
        w: "60dp"
    }));
    studyguides.menuButton.addEventListener("click", $.drawermenu.showhidemenu);
    menuView.menuTable.addEventListener("click", function(e) {
        $.drawermenu.showhidemenu();
        rowSelect(e);
    });
    Ti.Gesture.addEventListener("orientationchange", function() {
        $.drawermenu.handleRotation();
    });
    $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;