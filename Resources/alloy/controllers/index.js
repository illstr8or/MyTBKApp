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
                break;

              case "contact":
                currentView = contact.getView();
                break;

              case "location":
                currentView = location.getView();
                break;

              case "referafriend":
                currentView = referafriend.getView();
                break;

              case "events":
                currentView = mainView.getView();
                a.zIndex = 3;
                b.zIndex = 2;
                c.zIndex = 1;
                break;

              case "notifications":
                currentView = mainView.getView();
                a.zIndex = 2;
                b.zIndex = 3;
                c.zIndex = 1;
                break;

              case "schedule":
                currentView = mainView.getView();
                a.zIndex = 1;
                b.zIndex = 2;
                c.zIndex = 3;
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
        backgroundColor: "transparent",
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
    var sub = mainView.sub;
    var a = sub.suba.getView();
    var b = sub.subb.getView();
    var c = sub.subc.getView();
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
    var location = controls.getLocationView();
    location.menuButton.add(controls.getMenuButton({
        h: "60dp",
        w: "60dp"
    }));
    location.menuButton.addEventListener("click", $.drawermenu.showhidemenu);
    var contact = controls.getContactView();
    contact.menuButton.add(controls.getMenuButton({
        h: "60dp",
        w: "60dp"
    }));
    contact.menuButton.addEventListener("click", $.drawermenu.showhidemenu);
    var referafriend = controls.getReferAFriendView();
    referafriend.menuButton.add(controls.getMenuButton({
        h: "60dp",
        w: "60dp"
    }));
    referafriend.menuButton.addEventListener("click", $.drawermenu.showhidemenu);
    menuView.menuTable.addEventListener("click", function(e) {
        $.drawermenu.showhidemenu();
        rowSelect(e);
    });
    Ti.Gesture.addEventListener("orientationchange", function() {
        $.drawermenu.handleRotation();
    });
    var fb = Alloy.Globals.Facebook;
    fb.appid = Alloy.CFG.FACEBOOK_APP_ID;
    fb.permissions = [ "user_events" ];
    fb.forceDialogAuth = false;
    if (fb.loggedIn) $.index.open(); else {
        fb.addEventListener("login", function(e) {
            if (e.success) {
                $.index.open();
                alert("Facebook Success!");
            } else e.error ? alert("Facebook error: " + e.error) : alert("Unknown Facebook error");
        });
        fb.authorize();
        alert("Time to log in to Facebook");
    }
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;