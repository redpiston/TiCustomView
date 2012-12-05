//FirstView Component Constructor

// load libraries
var CustomTabGroup = require('CustomTabGroup/CustomTabGroup');
var CustomTabbedNavigationView = require('CustomTabbedNavigationView/CustomTabbedNavigationView');
var CustomNavigationView = require('CustomNavigationView/CustomNavigationView');

function FirstView() {
	//create custom tab group
	var self = CustomTabGroup({
		tabCount:	2
	});
	
	// create custom navigation view
	var customNavView = CustomNavigationView();
	
	// create views for nav view
	customNavView.addView({
		title:	'EXAMPLE'
	});
	customNavView.addView({
		title:	'NAVIGATION'
	});
	customNavView.addView({
		title:	'VIEW'
	});
	
	self.addTab({
		view:		customNavView,
		tabText:	'Custom Navigation View'
	});
	
	// create custom tabbed navigation view
	var customTabbedNavView = CustomTabbedNavigationView({
		viewCount:	4
	});
	
	// create views for tabbed nav view
	customTabbedNavView.addView();
	customTabbedNavView.addView();
	customTabbedNavView.addView();
	customTabbedNavView.addView();
	
	self.addTab({
		view:		customTabbedNavView,
		tabText:	'Custom Tabbed Navigation View'
	});
	
	// select starting tab
	self.selectTab(0);
	
	return self;
}

module.exports = FirstView;
