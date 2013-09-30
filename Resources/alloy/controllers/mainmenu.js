function Controller() {
    function doHeaderClick() {
        alert("header");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "mainmenu";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.menuView = Ti.UI.createView({
        layout: "vertical",
        backgroundColor: "#0b0a2b",
        id: "menuView"
    });
    $.__views.menuView && $.addTopLevelView($.__views.menuView);
    $.__views.menuTopBar = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: "60dp",
        backgroundColor: "#0b0a2b",
        layout: "horizontal",
        id: "menuTopBar"
    });
    $.__views.menuView.add($.__views.menuTopBar);
    $.__views.row0 = Ti.UI.createTableViewRow({
        height: "75dp",
        backgroundImage: "/menu-row-item-bg-profile-off.png",
        backgroundRepeat: true,
        selectedColor: "#284bff",
        id: "row0"
    });
    var __alloyId2 = [];
    __alloyId2.push($.__views.row0);
    $.__views.profileContainer = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: "75dp",
        layout: "horizontal",
        id: "profileContainer"
    });
    $.__views.row0.add($.__views.profileContainer);
    $.__views.rowProfile = Ti.UI.createView({
        left: 0,
        top: "1dp",
        width: "69dp",
        height: "73dp",
        verticalAlign: Ti.UI.TEXT_VERTICAL_ALIGNMENT_CENTER,
        backgroundImage: "/profile-pic-menu.png",
        id: "rowProfile"
    });
    $.__views.profileContainer.add($.__views.rowProfile);
    $.__views.profileLabel = Ti.UI.createLabel({
        color: "#fff",
        left: "18dp",
        height: "75dp",
        font: {
            fontSize: "18dp"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        verticalAlign: Ti.UI.TEXT_VERTICAL_ALIGNMENT_CENTER,
        text: "Gena Nardini-Eiseman",
        id: "profileLabel"
    });
    $.__views.profileContainer.add($.__views.profileLabel);
    $.__views.__alloyId3 = Ti.UI.createTableViewSection({
        id: "__alloyId3"
    });
    __alloyId2.push($.__views.__alloyId3);
    $.__views.headContainer = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: "39dp",
        backgroundImage: "/menu-header-item-bg.png",
        backgroundRepeat: true,
        layout: "horizontal",
        horizontalWrap: false,
        id: "headContainer"
    });
    doHeaderClick ? $.__views.headContainer.addEventListener("click", doHeaderClick) : __defers["$.__views.headContainer!click!doHeaderClick"] = true;
    $.__views.rowHeader1 = Ti.UI.createLabel({
        color: "#fff",
        left: "12dp",
        width: Ti.UI.SIZE,
        height: "39dp",
        font: {
            fontSize: "14dp"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        verticalAlign: Ti.UI.TEXT_VERTICAL_ALIGNMENT_CENTER,
        text: "myTBK",
        id: "rowHeader1"
    });
    $.__views.headContainer.add($.__views.rowHeader1);
    $.__views.headIcon = Ti.UI.createView({
        right: "4dp",
        width: "18dp",
        height: "18dp",
        verticalAlign: Ti.UI.TEXT_VERTICAL_ALIGNMENT_CENTER,
        textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
        backgroundImage: "/menu-right-carat.png",
        layout: "horizontal",
        id: "headIcon"
    });
    $.__views.headContainer.add($.__views.headIcon);
    $.__views.__alloyId3.headerView = $.__views.headContainer;
    $.__views.row1 = Ti.UI.createTableViewRow({
        height: "43dp",
        backgroundImage: "/menu-row-item-bg-off.png",
        backgroundRepeat: true,
        selectedColor: "#284bff",
        id: "row1"
    });
    $.__views.__alloyId3.add($.__views.row1);
    $.__views.rowContainer = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: "43dp",
        layout: "horizontal",
        id: "rowContainer"
    });
    $.__views.row1.add($.__views.rowContainer);
    $.__views.rowEvents = Ti.UI.createView({
        left: "12dp",
        top: "12dp",
        width: "18dp",
        height: "18dp",
        verticalAlign: Ti.UI.TEXT_VERTICAL_ALIGNMENT_CENTER,
        backgroundImage: "/events-icon.png",
        id: "rowEvents"
    });
    $.__views.rowContainer.add($.__views.rowEvents);
    $.__views.rowLabel = Ti.UI.createLabel({
        color: "#fff",
        left: "18dp",
        height: "43dp",
        font: {
            fontSize: "18dp"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        verticalAlign: Ti.UI.TEXT_VERTICAL_ALIGNMENT_CENTER,
        text: "events",
        id: "rowLabel"
    });
    $.__views.rowContainer.add($.__views.rowLabel);
    $.__views.row2 = Ti.UI.createTableViewRow({
        height: "43dp",
        backgroundImage: "/menu-row-item-bg-off.png",
        backgroundRepeat: true,
        selectedColor: "#284bff",
        id: "row2"
    });
    $.__views.__alloyId3.add($.__views.row2);
    $.__views.rowContainer = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: "43dp",
        layout: "horizontal",
        id: "rowContainer"
    });
    $.__views.row2.add($.__views.rowContainer);
    $.__views.rowNotifications = Ti.UI.createView({
        left: "12dp",
        top: "12dp",
        width: "18dp",
        height: "18dp",
        verticalAlign: Ti.UI.TEXT_VERTICAL_ALIGNMENT_CENTER,
        backgroundImage: "/notifications-icon.png",
        id: "rowNotifications"
    });
    $.__views.rowContainer.add($.__views.rowNotifications);
    $.__views.rowLabel = Ti.UI.createLabel({
        color: "#fff",
        left: "18dp",
        height: "43dp",
        font: {
            fontSize: "18dp"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        verticalAlign: Ti.UI.TEXT_VERTICAL_ALIGNMENT_CENTER,
        text: "notifications",
        id: "rowLabel"
    });
    $.__views.rowContainer.add($.__views.rowLabel);
    $.__views.row3 = Ti.UI.createTableViewRow({
        height: "43dp",
        backgroundImage: "/menu-row-item-bg-off.png",
        backgroundRepeat: true,
        selectedColor: "#284bff",
        id: "row3"
    });
    $.__views.__alloyId3.add($.__views.row3);
    $.__views.rowContainer = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: "43dp",
        layout: "horizontal",
        id: "rowContainer"
    });
    $.__views.row3.add($.__views.rowContainer);
    $.__views.rowSchedule = Ti.UI.createView({
        left: "12dp",
        top: "12dp",
        width: "18dp",
        height: "18dp",
        verticalAlign: Ti.UI.TEXT_VERTICAL_ALIGNMENT_CENTER,
        backgroundImage: "/schedule-icon.png",
        id: "rowSchedule"
    });
    $.__views.rowContainer.add($.__views.rowSchedule);
    $.__views.rowLabel = Ti.UI.createLabel({
        color: "#fff",
        left: "18dp",
        height: "43dp",
        font: {
            fontSize: "18dp"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        verticalAlign: Ti.UI.TEXT_VERTICAL_ALIGNMENT_CENTER,
        text: "schedule",
        id: "rowLabel"
    });
    $.__views.rowContainer.add($.__views.rowLabel);
    $.__views.__alloyId5 = Ti.UI.createTableViewSection({
        id: "__alloyId5"
    });
    __alloyId2.push($.__views.__alloyId5);
    $.__views.headContainer = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: "39dp",
        backgroundImage: "/menu-header-item-bg.png",
        backgroundRepeat: true,
        layout: "horizontal",
        horizontalWrap: false,
        id: "headContainer"
    });
    $.__views.rowHeader2 = Ti.UI.createLabel({
        color: "#fff",
        left: "12dp",
        width: Ti.UI.SIZE,
        height: "39dp",
        font: {
            fontSize: "14dp"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        verticalAlign: Ti.UI.TEXT_VERTICAL_ALIGNMENT_CENTER,
        text: "TRAINING",
        id: "rowHeader2"
    });
    $.__views.headContainer.add($.__views.rowHeader2);
    $.__views.__alloyId5.headerView = $.__views.headContainer;
    $.__views.row4 = Ti.UI.createTableViewRow({
        height: "43dp",
        backgroundImage: "/menu-row-item-bg-off.png",
        backgroundRepeat: true,
        selectedColor: "#284bff",
        id: "row4"
    });
    $.__views.__alloyId5.add($.__views.row4);
    $.__views.rowContainer = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: "43dp",
        layout: "horizontal",
        id: "rowContainer"
    });
    $.__views.row4.add($.__views.rowContainer);
    $.__views.rowStudyGuides = Ti.UI.createView({
        left: "12dp",
        top: "12dp",
        width: "18dp",
        height: "18dp",
        verticalAlign: Ti.UI.TEXT_VERTICAL_ALIGNMENT_CENTER,
        backgroundImage: "/study-guides-icon.png",
        id: "rowStudyGuides"
    });
    $.__views.rowContainer.add($.__views.rowStudyGuides);
    $.__views.rowLabel = Ti.UI.createLabel({
        color: "#fff",
        left: "18dp",
        height: "43dp",
        font: {
            fontSize: "18dp"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        verticalAlign: Ti.UI.TEXT_VERTICAL_ALIGNMENT_CENTER,
        text: "study guides",
        id: "rowLabel"
    });
    $.__views.rowContainer.add($.__views.rowLabel);
    $.__views.__alloyId7 = Ti.UI.createTableViewSection({
        id: "__alloyId7"
    });
    __alloyId2.push($.__views.__alloyId7);
    $.__views.headContainer = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: "39dp",
        backgroundImage: "/menu-header-item-bg.png",
        backgroundRepeat: true,
        layout: "horizontal",
        horizontalWrap: false,
        id: "headContainer"
    });
    $.__views.rowHeader3 = Ti.UI.createLabel({
        color: "#fff",
        left: "12dp",
        width: Ti.UI.SIZE,
        height: "39dp",
        font: {
            fontSize: "14dp"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        verticalAlign: Ti.UI.TEXT_VERTICAL_ALIGNMENT_CENTER,
        text: "INFORMATION",
        id: "rowHeader3"
    });
    $.__views.headContainer.add($.__views.rowHeader3);
    $.__views.__alloyId7.headerView = $.__views.headContainer;
    $.__views.row5 = Ti.UI.createTableViewRow({
        height: "43dp",
        backgroundImage: "/menu-row-item-bg-off.png",
        backgroundRepeat: true,
        selectedColor: "#284bff",
        id: "row5"
    });
    $.__views.__alloyId7.add($.__views.row5);
    $.__views.rowContainer = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: "43dp",
        layout: "horizontal",
        id: "rowContainer"
    });
    $.__views.row5.add($.__views.rowContainer);
    $.__views.rowReferAFriend = Ti.UI.createView({
        left: "12dp",
        top: "12dp",
        width: "18dp",
        height: "18dp",
        verticalAlign: Ti.UI.TEXT_VERTICAL_ALIGNMENT_CENTER,
        backgroundImage: "/refer-a-friend-icon.png",
        id: "rowReferAFriend"
    });
    $.__views.rowContainer.add($.__views.rowReferAFriend);
    $.__views.rowLabel = Ti.UI.createLabel({
        color: "#fff",
        left: "18dp",
        height: "43dp",
        font: {
            fontSize: "18dp"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        verticalAlign: Ti.UI.TEXT_VERTICAL_ALIGNMENT_CENTER,
        text: "refer a friend",
        id: "rowLabel"
    });
    $.__views.rowContainer.add($.__views.rowLabel);
    $.__views.row6 = Ti.UI.createTableViewRow({
        height: "43dp",
        backgroundImage: "/menu-row-item-bg-off.png",
        backgroundRepeat: true,
        selectedColor: "#284bff",
        id: "row6"
    });
    $.__views.__alloyId7.add($.__views.row6);
    $.__views.rowContainer = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: "43dp",
        layout: "horizontal",
        id: "rowContainer"
    });
    $.__views.row6.add($.__views.rowContainer);
    $.__views.rowLocation = Ti.UI.createView({
        left: "12dp",
        top: "12dp",
        width: "18dp",
        height: "18dp",
        verticalAlign: Ti.UI.TEXT_VERTICAL_ALIGNMENT_CENTER,
        backgroundImage: "/location-icon.png",
        id: "rowLocation"
    });
    $.__views.rowContainer.add($.__views.rowLocation);
    $.__views.rowLabel = Ti.UI.createLabel({
        color: "#fff",
        left: "18dp",
        height: "43dp",
        font: {
            fontSize: "18dp"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        verticalAlign: Ti.UI.TEXT_VERTICAL_ALIGNMENT_CENTER,
        text: "location",
        id: "rowLabel"
    });
    $.__views.rowContainer.add($.__views.rowLabel);
    $.__views.row7 = Ti.UI.createTableViewRow({
        height: "43dp",
        backgroundImage: "/menu-row-item-bg-off.png",
        backgroundRepeat: true,
        selectedColor: "#284bff",
        id: "row7"
    });
    $.__views.__alloyId7.add($.__views.row7);
    $.__views.rowContainer = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: "43dp",
        layout: "horizontal",
        id: "rowContainer"
    });
    $.__views.row7.add($.__views.rowContainer);
    $.__views.rowContact = Ti.UI.createView({
        left: "12dp",
        top: "12dp",
        width: "18dp",
        height: "18dp",
        verticalAlign: Ti.UI.TEXT_VERTICAL_ALIGNMENT_CENTER,
        backgroundImage: "/contact-icon.png",
        id: "rowContact"
    });
    $.__views.rowContainer.add($.__views.rowContact);
    $.__views.rowLabel = Ti.UI.createLabel({
        color: "#fff",
        left: "18dp",
        height: "43dp",
        font: {
            fontSize: "18dp"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        verticalAlign: Ti.UI.TEXT_VERTICAL_ALIGNMENT_CENTER,
        text: "contact",
        id: "rowLabel"
    });
    $.__views.rowContainer.add($.__views.rowLabel);
    $.__views.menuTable = Ti.UI.createTableView({
        separatorStyle: "NONE",
        separatorColor: "#0b0a2b",
        backgroundColor: "#0b0a2b",
        data: __alloyId2,
        id: "menuTable"
    });
    $.__views.menuView.add($.__views.menuTable);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.headContainer!click!doHeaderClick"] && $.__views.headContainer.addEventListener("click", doHeaderClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;