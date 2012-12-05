/**************************************************************************************************
 * 
 * 											Custom Tab Group
 * 
 **************************************************************************************************/

function CustomTabGroup(args) {
	// default class properties
	var property = {
		name:					'default',
		height:					'auto',
		width:					'auto',
		backgroundColor:		null,
		backgroundImage:		null,
		tabBarHeight:			'10%',
		tabViewHeight:			null,
		position:				'bottom',
		navBarImage:			'/CustomTabGroup/images/tabgroup_bg_default.png',
		tabCount:				0,
		tabBarButtons:			null,
		tabBarViews:			null,
		selectedTab:			null,
	};
	
	// replace default values with supplied arguments
	for (param in args) {
		property[param] = args[param];
	}
	
	// determine tab bar alignment
	if (property['position'] == 'top') {
		property['top'] = 0;
		property['bottom'] = null;
	} else if (property['position'] == 'bottom') {
		property['top'] = null;
		property['bottom'] = 0;
	} else {
		property['top'] = null;
		property['bottom'] = null;
	}
	
	// set tab view height
	property['tabViewHeight'] = (100 - parseInt(property['tabBarHeight'])) + '%';
	
	var self = Titanium.UI.createView({
		height:property['height'],
		width:property['width'],
		top:property['top'],
		bottom:property['bottom'],
		backgroundColor:property['backgroundColor'],
		backgroundImage:property['backgroundImage'],
	});
	
	// create array of tab bar buttons and views
	if (property['tabBarButtons'] == null) {
		property['tabBarButtons'] = new Array();
	}
	
	if (property['tabBarViews'] == null) {
		property['tabBarViews'] = new Array();
	}
	
	// add tab bar
	var tabBar = Titanium.UI.createView({
		backgroundImage:property['navBarImage'],
		height:property['tabBarHeight'],
		top:property['top'],
		bottom:property['bottom'],
	});
	self.add(tabBar);
	
	self.addTab = function(args) {
		// default values
		var values = {
			view:					null,
			name:					'default',
			tabButtonImageWidth:	'80%',
			tabButtonImageHeight:	'50%',
			tabButtonCenter:		null,
			tabButtonWidth:			null,
			tabButtonImage:			'/CustomTabGroup/images/tabgroup_button_off_default.png',
			tabButtonImageSelected:	'/CustomTabGroup/images/tabgroup_button_on_default.png',
			tabText:				'TEST',
			tabTextBottom:			'5%',
			tabTextLeft:			null,
			tabFont:				{fontSize:'8dp',fontWeight:'bold',fontFamily:'Helvetica Neue'},
			tabFontColor:			'white',
			tabFontColorSelected:	'white',
		};
	
		// replace default values with supplied arguments
		for (param in args) {
			values[param] = args[param];
		}
		
		// determine center point of button
		if (values['tabButtonCenter'] == null) {
			var x = ((100 / (property['tabCount'] * 2)) * ((2 * property['tabBarButtons'].length) + 1)) + '%';
			var y = '50%';
			values['tabButtonCenter'] = {x:x, y:y};	
		}
		
		if (values['tabButtonWidth'] == null) {
			values['tabButtonWidth'] = 100 / property['tabCount'] + '%';
		}
		
		// create tab button and tab button image
		var tabButton = Titanium.UI.createView({
			backgroundImage:	'none',
			width:				values['tabButtonWidth'],
			center:				values['tabButtonCenter'],
		});
		
		var tabImageView = Titanium.UI.createView({
			width:				values['tabButtonImageWidth'],
			height:				values['tabButtonImageHeight'],
			backgroundImage:	values['tabButtonImage'],
		});
		
		var tabLabel = Titanium.UI.createLabel({
			text:	values['tabText'],
			bottom:	values['tabTextBottom'],
			left:	values['tabTextLeft'],
			font:	values['tabFont'],
			color:	values['tabFontColor'],
		});
		
		tabButton.add(tabImageView);
		tabButton.add(tabLabel);
		
		// setup tab button properties
		tabButton.tabImageView = tabImageView;
		tabButton.tabLabel = tabLabel;
		tabButton.tabFontColor = values['tabFontColor'];
		tabButton.tabFontColorSelected = values['tabFontColorSelected'];
		tabButton.tabImage = values['tabButtonImage'];
		tabButton.tabImageSelected = values['tabButtonImageSelected'];
	
		// create tab view, set to opposite position of tab bar
		var tabView = Titanium.UI.createView({
			height:property['tabViewHeight'],
			top:property['bottom'],
			bottom:property['top'],
			backgroundColor:'black',
			visible:false,
		});
		
		// setup tab view properties
		tabView.tabName = values['name'];
		tabView.tabGroupName = property['name'];
		
		// if a custom view was passed in, add it to the tab view
		if (values['view'] != null) {
			tabView.add(values['view']);
		} else {
			var testLabel = Titanium.UI.createLabel({
				text:	'Tab View ' + property['tabBarButtons'].length,
				color:	'white',
			});
			tabView.add(testLabel);
		}
		
		self.add(tabView);
		
		// add tab button to the tab bar
		tabBar.add(tabButton);
		
		tabButton.addEventListener('click', function(){
			// unselect the currently selected tab and hide the view
			if (property['selectedTab'] != null) {
				// fire lose focus event for the currently selected view
				Ti.App.fireEvent('loseFocus', {tabName: property['tabBarViews'][property['selectedTab']].tabName, tabGroupName: property['tabBarViews'][property['selectedTab']].tabGroupName});
				
				property['tabBarButtons'][property['selectedTab']].tabImageView.backgroundImage = property['tabBarButtons'][property['selectedTab']].tabImage;
				property['tabBarButtons'][property['selectedTab']].tabLabel.color = property['tabBarButtons'][property['selectedTab']].tabFontColor;
				property['tabBarViews'][property['selectedTab']].visible = false;
			}
			
			// set the current tab button index as the selected tab
			property['selectedTab'] = property['tabBarButtons'].indexOf(tabButton);
			
			// fire gain focus event for the newly selected view
			Ti.App.fireEvent('gainFocus', {tabName: property['tabBarViews'][property['selectedTab']].tabName, tabGroupName: property['tabBarViews'][property['selectedTab']].tabGroupName});
			
			// show the tab view
			property['tabBarButtons'][property['selectedTab']].tabImageView.backgroundImage = tabButton.tabImageSelected;
			property['tabBarButtons'][property['selectedTab']].tabLabel.color = property['tabBarButtons'][property['selectedTab']].tabFontColorSelected;
			property['tabBarViews'][property['selectedTab']].visible = true;
		});
		
		// push tab button and view to arrays for later use
		property['tabBarButtons'].push(tabButton);
		property['tabBarViews'].push(tabView);
	}
	
	self.selectTab = function(index) { 
		property['tabBarButtons'][index].fireEvent('click');
	}
	
	return self;
}

module.exports = CustomTabGroup;