// This is the main screen for the app
// This view will show while app is loading

var controls = require('controls');

// get menu view as object
var menuView = controls.getMenuView();

// add event listener in this context
menuView.menuTable.addEventListener('click',function(e){
	$.drawermenu.showhidemenu();
	// on Android the event is received by the label, so watch out!
	Ti.API.info(e.rowData.id); 
});

// add menu view to container exposed by widget
$.drawermenu.drawermenuview.add(menuView.getView()); // get view is an Alloy Method

// get main view as object
var mainView = controls.getMainView();

// attach event listener to menu button
mainView.menuButton.add(controls.getMenuButton({
	h: '60dp',
	w: '60dp'
}));

mainView.menuButton.addEventListener('click',$.drawermenu.showhidemenu); // method is exposed by widget

// add view to container exposed by widget
$.drawermenu.drawermainview.add(mainView.getView());

Ti.Gesture.addEventListener('orientationchange', function(e) {
	$.drawermenu.handleRotation();
});

$.index.open();