/**************************************************************************************************
 * 
 * 											CustomTabbedNavigationView
 * 
 **************************************************************************************************/

function CustomTabbedNavigationView(args) {
	// default class properties
	var property = {
		backgroundColor:			'black',
		position:					'top',
		height:						'auto',
		width:						'auto',
		buttonWidth:				'14%',
		buttonHeight:				'85%',
		navBarHeight:				'10%',
		navViewHeight:				null,
		viewCount:					0,
		navViews:					null,
		viewTabButtons:				null,
		viewTabBorder:				'20%',
		currentViewIndex:			null,
		nextButtonImage:			'/CustomTabbedNavigationView/images/next_button_default.png',
		nextButtonSelectedImage:	'/CustomTabbedNavigationView/images/next_button_selected_default.png',
		nextButtonRight:			'1%',
		backButtonImage:			'/CustomTabbedNavigationView/images/back_button_default.png',
		backButtonSelectedImage:	'/CustomTabbedNavigationView/images/back_button_selected_default.png',
		backButtonLeft:				'1%',
		navBarImage:				'/CustomTabbedNavigationView/images/navigation_bar_default.png',
		screenHeight:				Ti.Platform.displayCaps.platformHeight,
		screenWidth:				Ti.Platform.displayCaps.platformWidth,
		animationDuration:			500,
	};
	
	// replace default values with supplied arguments
	for (param in args) {
		property[param] = args[param];
	}
	
	// determine navigation bar alignment
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
	
	// set current view index
	property['currentViewIndex'] = 0;
	
	// set nav view height
	property['navViewHeight'] = (100 - parseInt(property['navBarHeight'])) + '%';
	
	// create array of nav views and view tab buttons
	if (property['viewTabButtons'] == null) {
		property['viewTabButtons'] = new Array();
	}
	
	if (property['navViews'] == null) {
		property['navViews'] = new Array();
	}
	
	var self = Titanium.UI.createView({
		backgroundColor:	property['backgroundColor'],
		height:				property['height'],
		width:				property['width'],
	});
	
	// animations
	var titleFadeOutAnimation = Ti.UI.createAnimation({
        opacity:	0,
        duration: 	property['animationDuration'],
      	curve: 		Titanium.UI.ANIMATION_CURVE_EASE_IN_OUT,
    });
	
	var titleFadeInAnimation = Ti.UI.createAnimation({
        opacity:	1,
        duration: 	property['animationDuration'],
      	curve: 		Titanium.UI.ANIMATION_CURVE_EASE_IN_OUT,
    });
	
	var nextSlideOffScreenAnimation = Ti.UI.createAnimation({
        right:		 property['screenWidth'],
        left: 		-(property['screenWidth']),
        duration: 	property['animationDuration'],
      	curve: 		Titanium.UI.ANIMATION_CURVE_EASE_IN_OUT
    });
	
	var nextSlideOnScreenAnimation = Ti.UI.createAnimation({
        right: 		0,
        left:		0,
        duration:	property['animationDuration'],
      	curve: 		Titanium.UI.ANIMATION_CURVE_EASE_IN_OUT
    });
	
	var backSlideOffScreenAnimation = Ti.UI.createAnimation({
        right: 		-(property['screenWidth']),
        left: 		property['screenWidth'],
        duration:	property['animationDuration'],
      	curve: 		Titanium.UI.ANIMATION_CURVE_EASE_IN_OUT
    });
	
	var backSlideOnScreenAnimation = Ti.UI.createAnimation({
        right: 		0,
        left:		0,
        duration:	property['animationDuration'],
      	curve: 		Titanium.UI.ANIMATION_CURVE_EASE_IN_OUT
    });
	
	// navigation bar
	var navBar = Titanium.UI.createView({
		backgroundImage:	property['navBarImage'],
		height:				property['navBarHeight'],
		top:				property['top'],
		bottom:				property['bottom'],
	});
	
	// next button
	var nextButton = Titanium.UI.createView({
		backgroundImage:			property['nextButtonImage'],
		height:						property['buttonHeight'],
		width:						property['buttonWidth'],
		right:						property['nextButtonRight'],
	});
	
	nextButton.addEventListener('touchstart', function(){
		// set button background to selected
		nextButton.backgroundImage = property['nextButtonSelectedImage'];
	});
	
	nextButton.addEventListener('touchend', function(){
		// set button background to unselected
		nextButton.backgroundImage = property['nextButtonImage'];
		
		// next button should not do anything if the current view is the last view
		if (property['currentViewIndex'] == property['navViews'].length-1) {
			return;
		}
		
		// move and hide the current view off the screen	
		property['navViews'][property['currentViewIndex']].animate(nextSlideOffScreenAnimation); 
		
		// unselect view tab
		property['viewTabButtons'][property['currentViewIndex']].viewTabImageView.backgroundImage = property['viewTabButtons'][property['currentViewIndex']].inactiveViewTabImage;
		property['viewTabButtons'][property['currentViewIndex']].label.color = property['viewTabButtons'][property['currentViewIndex']].inactiveLabelColor;
		
    	// unhide and move the next view onto the screen
    	property['currentViewIndex'] += 1;
    	property['navViews'][property['currentViewIndex']].right = -(property['screenWidth']);
    	property['navViews'][property['currentViewIndex']].left = property['screenWidth'];
   
    	property['navViews'][property['currentViewIndex']].animate(nextSlideOnScreenAnimation);
    	
    	// select new view tab
    	property['viewTabButtons'][property['currentViewIndex']].viewTabImageView.backgroundImage = property['viewTabButtons'][property['currentViewIndex']].activeViewTabImage;
    	property['viewTabButtons'][property['currentViewIndex']].label.color = property['viewTabButtons'][property['currentViewIndex']].activeLabelColor;
	});
	
	navBar.add(nextButton);
	
	// back button
	var backButton = Titanium.UI.createView({
		backgroundImage:			property['backButtonImage'],
		height:						property['buttonHeight'],
		width:						property['buttonWidth'],
		left:						property['backButtonLeft'],
	});
	
	backButton.addEventListener('touchstart', function(){
		// set button background to selected
		backButton.backgroundImage = property['backButtonSelectedImage'];
	});
	
	backButton.addEventListener('touchend', function(){
		// set button background to unselected
		backButton.backgroundImage = property['backButtonImage'];
		
		// back button should not do anything if the current view is the first view
		if (property['currentViewIndex'] == 0) {
			return;
		}
		
		// move and hide the current view off the screen
		property['navViews'][property['currentViewIndex']].animate(backSlideOffScreenAnimation); 
		
		// unselect view tab
		property['viewTabButtons'][property['currentViewIndex']].viewTabImageView.backgroundImage = property['viewTabButtons'][property['currentViewIndex']].inactiveViewTabImage;
		property['viewTabButtons'][property['currentViewIndex']].label.color = property['viewTabButtons'][property['currentViewIndex']].inactiveLabelColor;
		
    	// unhide and move the previous view onto the screen
    	property['currentViewIndex'] -= 1;
    	property['navViews'][property['currentViewIndex']].right = property['screenWidth'];
    	property['navViews'][property['currentViewIndex']].left = -(property['screenWidth']);
    	
    	property['navViews'][property['currentViewIndex']].animate(backSlideOnScreenAnimation);
    	
    	// select new view tab
    	property['viewTabButtons'][property['currentViewIndex']].viewTabImageView.backgroundImage = property['viewTabButtons'][property['currentViewIndex']].activeViewTabImage;
    	property['viewTabButtons'][property['currentViewIndex']].label.color = property['viewTabButtons'][property['currentViewIndex']].activeLabelColor;
	});
	
	navBar.add(backButton);
	
	self.add(navBar);
	
	self.addView = function(args) {
		// default values
		var values = {
			view:						null,
			activeViewTabImage:			'/CustomTabbedNavigationView/images/active_view_tab_default.png',
			inactiveViewTabImage:		'/CustomTabbedNavigationView/images/inactive_view_tab_default.png',
			viewTabImageWidth:			'50%',
			viewTabImageHeight:			'50%',
			viewTabFont:				{fontSize:'8dp',fontWeight:'bold',fontFamily:'Helvetica Neue'},
			activeViewTabColor:			'black',
			inactiveViewTabColor:		'white',
			viewTabText:				null,
			viewTabButtonCenter:		null,
			viewTabButtonWidth:			null,
		};
	
		// replace default values with supplied arguments
		for (param in args) {
			values[param] = args[param];
		}
		
		// determine center point of button
		if (values['viewTabButtonCenter'] == null) {
			var x = (parseInt(property['viewTabBorder']) + ((100 - (parseInt(property['viewTabBorder'])*2)) / (property['viewCount'] * 2)) * ((2 * property['navViews'].length) + 1)) + '%';
			var y = '50%';
			values['viewTabButtonCenter'] = {x:x, y:y};	
		}
		
		if (values['viewTabButtonWidth'] == null) {
			values['viewTabButtonWidth'] = (100 - 2*parseInt(property['viewTabBorder'])) / property['viewCount'] + '%';
		}
		
		// set parameters for the view
		var left, right, viewTabBackgroundImage, color;
		if (property['navViews'].length == 0) {
			right = 0;
			left = 0;
			viewTabBackgroundImage = values['activeViewTabImage'];
			color = values['activeViewTabColor'];
		} else {
			right = -(property['screenWidth']);
			left = property['screenWidth'];
			viewTabBackgroundImage = values['inactiveViewTabImage'];
			color = values['inactiveViewTabColor']; 
		}
		
		// create tab view, set to opposite position of tab bar
		var newView = Titanium.UI.createView({
			height:				property['navViewHeight'],
			top:				property['bottom'],
			bottom:				property['top'],
			backgroundColor:	'black',
			left:				left,
			right:				right,
		});
		
		// create default view if one does not exist
		if (values['view'] == null) {
			values['view'] = Titanium.UI.createView();
			
			var defaultLabel = Titanium.UI.createLabel({
				text:	'View #' + property['navViews'].length,
				color:	'white',
			});
			values['view'].add(defaultLabel);	
		}
		
		newView.add(values['view']);
		
		// create view tab button, image and label
		var viewTabButton = Titanium.UI.createView({
			backgroundImage:	'none',
			width:				values['viewTabButtonWidth'],
			center:				values['viewTabButtonCenter'],
		});
				
		var viewTabImage = Titanium.UI.createView({
			width:				values['viewTabImageWidth'],
			height:				values['viewTabImageHeight'],
			backgroundImage:	viewTabBackgroundImage,
		});
		
		if (values['viewTabText'] == null) {
			values['viewTabText'] = property['navViews'].length + 1;
		}
		
		var vewTabLabel = Titanium.UI.createLabel({
			text:		values['viewTabText'],
			font:		values['viewTabFont'],
			color:		color,
			textAlign:	'center',
		});
		
		viewTabButton.add(viewTabImage);
		viewTabButton.add(vewTabLabel);
		
		// setup view tab button properties
		viewTabButton.viewTabImageView = viewTabImage;
		viewTabButton.activeViewTabImage = values['activeViewTabImage'];
		viewTabButton.inactiveViewTabImage = values['inactiveViewTabImage'];
		viewTabButton.label = vewTabLabel;
		viewTabButton.activeLabelColor = values['activeViewTabColor'];
		viewTabButton.inactiveLabelColor = values['inactiveViewTabColor'];
		
		navBar.add(viewTabButton);
		
		viewTabButton.addEventListener('click', function(){
			// get the index of the clicked view tab button
			var buttonIndex = property['viewTabButtons'].indexOf(viewTabButton);
			
			// rearrange all view's left/ right parameters accordingly
			if (property['currentViewIndex'] == buttonIndex) {
				return;
			} else if (property['currentViewIndex'] < buttonIndex) {
				for (var i = property['currentViewIndex']; i < buttonIndex; i++) {
					if (i == property['currentViewIndex']) {
						property['viewTabButtons'][i].viewTabImageView.backgroundImage = property['viewTabButtons'][property['currentViewIndex']].inactiveViewTabImage;
						property['viewTabButtons'][i].label.color = property['viewTabButtons'][property['currentViewIndex']].inactiveLabelColor;
					}
					
					property['navViews'][i].right = property['screenWidth'];
    				property['navViews'][i].left = -(property['screenWidth']);
				}
			} else if (property['currentViewIndex'] > buttonIndex) {
				for (var i = property['currentViewIndex']; i > buttonIndex; i--) {
					if (i == property['currentViewIndex']) {
						property['viewTabButtons'][i].viewTabImageView.backgroundImage = property['viewTabButtons'][property['currentViewIndex']].inactiveViewTabImage;
						property['viewTabButtons'][i].label.color = property['viewTabButtons'][property['currentViewIndex']].inactiveLabelColor;
					}
					
					property['navViews'][i].right = -(property['screenWidth']);
    				property['navViews'][i].left = property['screenWidth'];
				}
			} 
			
			// save the current tab button index as the selected tab
			property['currentViewIndex'] = property['viewTabButtons'].indexOf(viewTabButton);
			
			// show the tab view
			property['viewTabButtons'][property['currentViewIndex']].viewTabImageView.backgroundImage = viewTabButton.activeViewTabImage;
			property['viewTabButtons'][property['currentViewIndex']].label.color = property['viewTabButtons'][property['currentViewIndex']].activeLabelColor;
			property['navViews'][property['currentViewIndex']].left = 0;
			property['navViews'][property['currentViewIndex']].right = 0;
		});
		
		// push view tab and new view to array for later use
		property['viewTabButtons'].push(viewTabButton);
		property['navViews'].push(newView);
		
		self.add(newView);
	}
	
	self.selectView = function(index) { 
		property['viewTabButtons'][index].fireEvent('click');
	}
	
	return self;
}

module.exports = CustomTabbedNavigationView;