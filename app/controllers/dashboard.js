// UI Window for the title nav bar
// leftNavButton and rightNavButton will be the main buttons. 
// Might need to redo what's in the tss and xml to create these items
// programatically here

// shareButton = Ti.UI.createButton({ systemButton: Ti.UI.iPhone.SystemButton.SHARE }); <-- Not sure if this one works

// nav bar title text should me medium font weight at 34 px size, white

$.mainShare.addEventListener('click', function shareInfo(e){
	alert("Share this view!");
});