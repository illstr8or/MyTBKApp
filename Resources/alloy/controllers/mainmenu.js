function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "mainmenu";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
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
    $.__views.settingsButton = Ti.UI.createView({
        left: "12dp",
        width: "60dp",
        height: "60dp",
        layout: "horizontal",
        horizontalWrap: false,
        id: "settingsButton"
    });
    $.__views.menuTopBar.add($.__views.settingsButton);
    $.__views.settingsBtn = Ti.UI.createImageView({
        width: "30dp",
        height: "30dp",
        image: "/settings-icon.png",
        id: "settingsBtn"
    });
    $.__views.settingsButton.add($.__views.settingsBtn);
    $.__views.profileView = Ti.UI.createTableViewSection({
        id: "profileView"
    });
    var __alloyId2 = [];
    __alloyId2.push($.__views.profileView);
    $.__views.profile = Ti.UI.createTableViewRow({
        height: "75dp",
        backgroundImage: "/menu-row-item-bg-profile-off.png",
        backgroundRepeat: true,
        selectedColor: "#284bff",
        id: "profile"
    });
    $.__views.profileView.add($.__views.profile);
    $.__views.profileContainer = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: "75dp",
        layout: "horizontal",
        id: "profileContainer"
    });
    $.__views.profile.add($.__views.profileContainer);
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
        minimumFontSize: "14dp",
        font: {
            fontSize: "16dp"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        verticalAlign: Ti.UI.TEXT_VERTICAL_ALIGNMENT_CENTER,
        id: "profileLabel",
        text: "Gena Nardini-Eiseman"
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
        id: "rowHeader1",
        text: "myTBK"
    });
    $.__views.headContainer.add($.__views.rowHeader1);
    $.__views.__alloyId3.headerView = $.__views.headContainer;
    $.__views.events = Ti.UI.createTableViewRow({
        height: "43dp",
        backgroundImage: "/menu-row-item-bg-off.png",
        backgroundRepeat: true,
        selectedColor: "#284bff",
        id: "events"
    });
    $.__views.__alloyId3.add($.__views.events);
    $.__views.rowContainer = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: "43dp",
        layout: "horizontal",
        id: "rowContainer"
    });
    $.__views.events.add($.__views.rowContainer);
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
        id: "rowLabel",
        text: "events"
    });
    $.__views.rowContainer.add($.__views.rowLabel);
    $.__views.notifications = Ti.UI.createTableViewRow({
        height: "43dp",
        backgroundImage: "/menu-row-item-bg-off.png",
        backgroundRepeat: true,
        selectedColor: "#284bff",
        id: "notifications"
    });
    $.__views.__alloyId3.add($.__views.notifications);
    $.__views.rowContainer = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: "43dp",
        layout: "horizontal",
        id: "rowContainer"
    });
    $.__views.notifications.add($.__views.rowContainer);
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
        id: "rowLabel",
        text: "notifications"
    });
    $.__views.rowContainer.add($.__views.rowLabel);
    $.__views.schedule = Ti.UI.createTableViewRow({
        height: "43dp",
        backgroundImage: "/menu-row-item-bg-off.png",
        backgroundRepeat: true,
        selectedColor: "#284bff",
        id: "schedule"
    });
    $.__views.__alloyId3.add($.__views.schedule);
    $.__views.rowContainer = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: "43dp",
        layout: "horizontal",
        id: "rowContainer"
    });
    $.__views.schedule.add($.__views.rowContainer);
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
        id: "rowLabel",
        text: "schedule"
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
        id: "rowHeader2",
        text: "TRAINING"
    });
    $.__views.headContainer.add($.__views.rowHeader2);
    $.__views.__alloyId5.headerView = $.__views.headContainer;
    $.__views.studyguides = Ti.UI.createTableViewRow({
        height: "43dp",
        backgroundImage: "/menu-row-item-bg-off.png",
        backgroundRepeat: true,
        selectedColor: "#284bff",
        id: "studyguides"
    });
    $.__views.__alloyId5.add($.__views.studyguides);
    $.__views.rowContainer = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: "43dp",
        layout: "horizontal",
        id: "rowContainer"
    });
    $.__views.studyguides.add($.__views.rowContainer);
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
        id: "rowLabel",
        text: "study guides"
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
        id: "rowHeader3",
        text: "INFORMATION"
    });
    $.__views.headContainer.add($.__views.rowHeader3);
    $.__views.__alloyId7.headerView = $.__views.headContainer;
    $.__views.referafriend = Ti.UI.createTableViewRow({
        height: "43dp",
        backgroundImage: "/menu-row-item-bg-off.png",
        backgroundRepeat: true,
        selectedColor: "#284bff",
        id: "referafriend"
    });
    $.__views.__alloyId7.add($.__views.referafriend);
    $.__views.rowContainer = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: "43dp",
        layout: "horizontal",
        id: "rowContainer"
    });
    $.__views.referafriend.add($.__views.rowContainer);
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
        id: "rowLabel",
        text: "refer a friend"
    });
    $.__views.rowContainer.add($.__views.rowLabel);
    $.__views.location = Ti.UI.createTableViewRow({
        height: "43dp",
        backgroundImage: "/menu-row-item-bg-off.png",
        backgroundRepeat: true,
        selectedColor: "#284bff",
        id: "location"
    });
    $.__views.__alloyId7.add($.__views.location);
    $.__views.rowContainer = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: "43dp",
        layout: "horizontal",
        id: "rowContainer"
    });
    $.__views.location.add($.__views.rowContainer);
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
        id: "rowLabel",
        text: "location"
    });
    $.__views.rowContainer.add($.__views.rowLabel);
    $.__views.contact = Ti.UI.createTableViewRow({
        height: "43dp",
        backgroundImage: "/menu-row-item-bg-off.png",
        backgroundRepeat: true,
        selectedColor: "#284bff",
        id: "contact"
    });
    $.__views.__alloyId7.add($.__views.contact);
    $.__views.rowContainer = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: "43dp",
        layout: "horizontal",
        id: "rowContainer"
    });
    $.__views.contact.add($.__views.rowContainer);
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
        id: "rowLabel",
        text: "contact"
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
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;