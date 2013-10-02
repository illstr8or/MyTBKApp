var Alloy = require('alloy');

exports.getMainView = function(){
	var dash = Alloy.createController('dashboard');
	return dash;
};

exports.getMenuView = function(){
	var menu = Alloy.createController('mainmenu');
	return menu;
};

exports.getProfileView = function(){
	var profile = Alloy.createController('profile');
	return profile;
};

exports.getStudyGuidesView = function(){
	var study = Alloy.createController('studyguides');
	return study;
};

exports.getMenuButton = function(args){
	var view = Ti.UI.createView({
		height: args.h,
		width: args.w,
	});
	
	var btn = Ti.UI.createView({
		height: args.h,
		width: args.w
	});
	
	view.add(btn);
	
	return view;
};

exports.getMainShare = function(args){
	var view = Ti.UI.createView({
		height: args.h,
		width: args.w,
	});
	
	var btn = Ti.UI.createView({
		height: args.h,
		width: args.w
	});
	
	view.add(btn);
	
	return view;
};

