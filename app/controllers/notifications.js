exports.buttonTab1 = $.buttonTab;
exports.buttonTab2 = $.invisibleTabA;
exports.buttonTab3 = $.invisibleTabB;

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
//urbanairport.enable(); // disable(); enable();
 
// Append tags instead of resetting them
//urbanairport.addTags('foo'); // Both single and Array supported
 

