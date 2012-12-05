//FirstView Component Constructor

// load libraries
var CustomTabGroup = require('CustomTabGroup/CustomTabGroup');
var CustomTabbedNavigationView = require('CustomTabbedNavigationView/CustomTabbedNavigationView');
var CustomNavigationView = require('CustomNavigationView/CustomNavigationView');

function FirstView() {
	// create custom tab group
	var self = CustomTabGroup({
		tabCount:	2
	});
	
	// create custom navigation view
	var customNavView = CustomNavigationView();
	
	// create views for nav view 
	var exampleNavView1 = Titanium.UI.createView({
		backgroundImage:	'bg_image_1.jpeg'
	});
	customNavView.addView({
		view:	exampleNavView1,
		title:	'EXAMPLE'
	});
	
	var exampleNavView2 = Titanium.UI.createView({
		backgroundImage:	'bg_image_2.jpeg'
	});
	customNavView.addView({
		view:	exampleNavView2,
		title:	'NAVIGATION'
	});
	
	var exampleNavView3 = Titanium.UI.createView({
		backgroundImage:	'bg_image_3.jpeg'
	});
	customNavView.addView({
		view:	exampleNavView3,
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
	var exampleTabNavView1 = Titanium.UI.createView({
		backgroundImage:	'bg_image_1.jpeg'
	});
	customTabbedNavView.addView({
		view:	exampleTabNavView1,
	});
	
	var exampleTabNavView2 = Titanium.UI.createView({
		backgroundImage:	'bg_image_2.jpeg'
	});
	customTabbedNavView.addView({
		view:	exampleTabNavView2,
	});
	
	var exampleTabNavView3 = Titanium.UI.createView({
		backgroundImage:	'bg_image_3.jpeg'
	});
	customTabbedNavView.addView({
		view:	exampleTabNavView3,
	});
	
	var exampleTabNavView4 = Titanium.UI.createView({
		backgroundImage:	'bg_image_4.jpeg'
	});
	customTabbedNavView.addView({
		view:	exampleTabNavView4,
	});
	
	self.addTab({
		view:		customTabbedNavView,
		tabText:	'Custom Tabbed Navigation View'
	});
	
	// select starting tab
	self.selectTab(0);
	
	return self;
}

module.exports = FirstView;
