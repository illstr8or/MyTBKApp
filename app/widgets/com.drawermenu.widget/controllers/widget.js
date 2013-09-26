var menuOpen = false;

var menuWidth = '262dp';

var showhidemenu = function(){
	if (menuOpen){
		moveTo = 0;
		menuOpen = false;
	} else {
		moveTo = menuWidth;
		menuOpen = true;
	};

	$.drawermainview.width = Ti.Platform.displayCaps.platformWidth;
	$.drawermainview.animate({
		left : moveTo,
		curve : Ti.UI.ANIMATION_CURVE_EASE_IN_OUT,
		duration : 150
	});
};

exports.handleRotation = function() {
/*
  	Add the orientation handler in the controller that loads this widget. Like this:
	Ti.Gesture.addEventListener('orientationchange', function() {
		$.ds.handleRotation();
	});
*/
	$.drawermainview.width = Ti.Platform.displayCaps.platformWidth;
};

exports.showhidemenu = showhidemenu;