// The contents of this file will be executed before any of
// your view controllers are ever executed, including the index.
// You have access to all functionality on the `Alloy` namespace.
//
// This is a great place to do any initialization for your app
// or create any global variables/functions that you'd like to
// make available throughout your app. You can easily make things
// accessible globally by attaching them to the `Alloy.Globals`
// object. For example:
//
// Alloy.Globals.someGlobalFunction = function(){};

// Set the background color to non-black to see the status bar
Ti.UI.setBackgroundColor('#0b0a2b');

// Function to test if device is iOS 7 or later
Alloy.Globals.isiOS7Plus = function()
{
	// iOS-specific test
	if (Titanium.Platform.name == 'iPhone OS')
	{
		var version = Titanium.Platform.version.split(".");
		var major = parseInt(version[0],10);

		// Can only test this support on a 3.2+ device
		if (major >= 7)
		{
			return true;
		}
	}
	return false;
};

var iOS7 = Alloy.Globals.isiOS7Plus();
Alloy.Globals.theTop = iOS7 ? 20 : 0;

Alloy.Globals.oneThird = Ti.Platform.displayCaps.platformWidth / 3;

// create a JavaScript alias to the platform-specific property
var osname = Ti.Platform.osname;
// Booleans identifying the platforms are handy too
var menuOffset = (osname == 'android') ? 120 : 60;
Alloy.Globals.menuWidth = Ti.Platform.displayCaps.platformWidth-menuOffset;

Alloy.Collections.schedules = Alloy.createCollection('schedules');

// Loads the Facebook module, which can be referenced by Alloy.Globals.Facebook
Alloy.Globals.Facebook = require('facebook');

// Urban Airship / UrbanAirport Initialize
var urbanairport = require('urbanairport');
 
urbanairport.register({
	debug: true, // Show debug info
	 
	// Sets push types
	sound: true,   // iOS + Android (default)
	vibrate: true, // Android (default)
	badge: true,   // iOS (default)
	alert: true,   // iOS (default)
	 
	// Set any property and call any single-property method of the extended module
	autoBadge: false,
	 
	// Enable compatibility mode (see below)
	compatibility: true,
	  
	// Set any property and call any single-property method of the extended module
	//showOnAppClick: true,
	  
	// On Android these will be automatically set once UA is flying
	alias: 'tidev',
	tags: ['testingtesting', 'appcelerator', 'my-tags'], // Supports both a single or Array of strings!
	 
	callback: function(e) { // The only callback you need
		
		// Registration failed
		if (e.type === 'error') {
			alert('Sorry, no push for you: ' + e.error);
		 
		    // Registration done
		} else if (e.type === 'success') {
			alert('Your token is: ' + e.deviceToken);
		 
		    // Received notification
		} else if (e.type === 'callback') {
		 
	   		// Properties are normalized for iOS and Android:
	  		// e.payload === e.data === e.data.aps
	  		// e.message === e.data.alert === e.data.aps.alert
	    	alert(e.message);
	    }
	}
});
 
// Manually disable/enable push
urbanairport.enable(); // disable(); enable();
 
// Append tags instead of resetting them
//urbanairport.addTags('foo'); // Both single and Array supported
 

