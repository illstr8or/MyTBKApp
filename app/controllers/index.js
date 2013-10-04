// This is the main screen for the app
// This view will show while app is loading

var controls = require('controls');

// get menu view as object
var menuView = controls.getMenuView();

// add menu view to container exposed by widget
$.drawermenu.drawermenuview.add(menuView.getView()); // get view is an Alloy Method

// ----
// get main view as object
var mainView = controls.getMainView();
mainView.menuButton.add(controls.getMenuButton({
	h: '60dp',
	w: '60dp'
}));
mainView.menuButton.addEventListener('click', $.drawermenu.showhidemenu); // method is exposed by widget
// ----

// add view to container exposed by widget 
var currentView = mainView.getView();
$.drawermenu.drawermainview.add(currentView);


// get profile view as object
var profile = controls.getProfileView();
profile.menuButton.add(controls.getMenuButton({
	h: '60dp',
	w: '60dp'
}));
profile.menuButton.addEventListener('click', $.drawermenu.showhidemenu); // method is exposed by widget
// ----


// get study guides view as object
var studyguides = controls.getStudyGuidesView();
studyguides.menuButton.add(controls.getMenuButton({
	h: '60dp',
	w: '60dp'
}));
studyguides.menuButton.addEventListener('click', $.drawermenu.showhidemenu); // method is exposed by widget
// ----


// get location view as object
var location = controls.getLocationView();
location.menuButton.add(controls.getMenuButton({
	h: '60dp',
	w: '60dp'
}));
location.menuButton.addEventListener('click', $.drawermenu.showhidemenu); // method is exposed by widget
// ----


// get contact view as object
var contact = controls.getContactView();
contact.menuButton.add(controls.getMenuButton({
	h: '60dp',
	w: '60dp'
}));
contact.menuButton.addEventListener('click', $.drawermenu.showhidemenu); // method is exposed by widget
// ----


// get refer a friend view as object
var referafriend = controls.getReferAFriendView();
referafriend.menuButton.add(controls.getMenuButton({
	h: '60dp',
	w: '60dp'
}));
referafriend.menuButton.addEventListener('click', $.drawermenu.showhidemenu); // method is exposed by widget
// ----


function rowSelect(e) {
	if (currentView.id != e.row.id) {
		$.drawermenu.drawermainview.remove(currentView);
		switch(e.row.id) {
		
			case 'profile' :
			
				currentView = profile.getView();
				
				break;
			
			case 'studyguides' :
			
				currentView = studyguides.getView();
				
				break;
				
			case 'contact' :
			
				currentView = contact.getView();
				
				break;
				
			case 'location' :
			
				currentView = location.getView();
				
				break;
				
			case 'referafriend' :
			
				currentView = referafriend.getView();
				
				break;
				
			case 'events' :
			case 'notifications' :
			case 'schedule' :
			
				currentView = mainView.getView();
				
				break;
		
		};
		$.drawermenu.drawermainview.add(currentView);
	}
	//alert(e.row.id);
}

// Swap views on menu item click
// add event listener in this context
menuView.menuTable.addEventListener('click', function selectRow(e){
	$.drawermenu.showhidemenu();
	// on Android the event is received by the label, so watch out!
	//Ti.API.info(e.rowData.id);
	rowSelect(e);
});

Ti.Gesture.addEventListener('orientationchange', function(e) {
	$.drawermenu.handleRotation();
});

$.index.open();