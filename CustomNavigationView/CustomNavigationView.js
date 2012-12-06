/**************************************************************************************************
 * 
 *                                        CustomNavigationView
 * 
 **************************************************************************************************/

function CustomNavigationView(args) {
	// default class properties
	var property = {
		backgroundColor:		'black',
		position:			'top',
		height:				'auto',
		width:				'auto',
		buttonWidth:			'14%',
		buttonHeight:			'85%',
		navBarHeight:			'10%',
		navViewHeight:			null,
		navViews:			null,
		currentViewIndex:		null,
		nextButtonImage:		'/CustomNavigationView/images/next_button_default.png',
		nextButtonSelectedImage:	'/CustomNavigationView/images/next_button_selected_default.png',
		nextButtonRight:		'1%',
		backButtonImage:		'/CustomNavigationView/images/back_button_default.png',
		backButtonSelectedImage:	'/CustomNavigationView/images/back_button_selected_default.png',
		backButtonLeft:			'1%',
		navBarImage:			'/CustomNavigationView/images/navigation_bar_default.png',
		screenHeight:			Ti.Platform.displayCaps.platformHeight,
		screenWidth:			Ti.Platform.displayCaps.platformWidth,
		animationDuration:		500,
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
	
	// create array of nav views
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
	nextSlideOnScreenAnimation.addEventListener('complete', function(){
		Ti.App.fireEvent('navAnimationEnd', {currentViewIndex: property['currentViewIndex']});
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
      	curve: 		Titanium.UI.ANIMATION_CURVE_EASE_IN_OUT,
    });
    backSlideOnScreenAnimation.addEventListener('complete', function(){
		Ti.App.fireEvent('navAnimationEnd', {currentViewIndex: property['currentViewIndex']});
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
		
		// fire navigation animation begin event
		Ti.App.fireEvent('navAnimationBegin', {currentViewIndex: property['currentViewIndex']});
		
		// fade out current title
		property['navViews'][property['currentViewIndex']].title.animate(titleFadeOutAnimation);
		
		// move and hide the current view off the screen	
		property['navViews'][property['currentViewIndex']].animate(nextSlideOffScreenAnimation); 
		
    	// unhide and move the next view onto the screen
    	property['currentViewIndex'] += 1;
    	property['navViews'][property['currentViewIndex']].right = -(property['screenWidth']);
    	property['navViews'][property['currentViewIndex']].left = property['screenWidth'];
   
    	property['navViews'][property['currentViewIndex']].animate(nextSlideOnScreenAnimation);
    	
    	// fade in new title
    	property['navViews'][property['currentViewIndex']].title.animate(titleFadeInAnimation);
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
		
		// fire navigation animation begin event
		Ti.App.fireEvent('navAnimationBegin', {currentViewIndex: property['currentViewIndex']});
		
		// fade out current title
		property['navViews'][property['currentViewIndex']].title.animate(titleFadeOutAnimation);
		
		// move and hide the current view off the screen
		property['navViews'][property['currentViewIndex']].animate(backSlideOffScreenAnimation); 

    	// unhide and move the previous view onto the screen
    	property['currentViewIndex'] -= 1;
    	property['navViews'][property['currentViewIndex']].right = property['screenWidth'];
    	property['navViews'][property['currentViewIndex']].left = -(property['screenWidth']);
    	
    	property['navViews'][property['currentViewIndex']].animate(backSlideOnScreenAnimation);
    	
    	// fade in new title
		property['navViews'][property['currentViewIndex']].title.animate(titleFadeInAnimation);	
	});
	
	navBar.add(backButton);
	
	self.add(navBar);
	
	self.addView = function(args) {
		// default values
		var values = {
			view:				null,
			title:				'TEST',
			titleColor:			'white',
			titleFont:			{fontSize:'14dp',fontWeight:'bold',fontFamily:'Helvetica Neue'},
		};
	
		// replace default values with supplied arguments
		for (param in args) {
			values[param] = args[param];
		}
		
		// set parameters for the view
		var left, right;
		if (property['navViews'].length == 0) {
			right = 0;
			left = 0;
		} else {
			right = -(property['screenWidth']);
			left = property['screenWidth'];
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
		
		// create title label
		var titleLabel = Titanium.UI.createLabel({
			text:		values['title'],
			color:		values['titleColor'],
			font:		values['titleFont'],
			opacity:	0,
		});
		
		navBar.add(titleLabel);
		
		// if this is the first view, fade title in
		if (property['navViews'].length == 0) {
			titleLabel.animate(titleFadeInAnimation);
		}
		
		// setup view properties
		newView.title = titleLabel;
		
		// push new view to array for later use
		property['navViews'].push(newView);
		
		self.add(newView);
	}
	
	self.nextView = function() {
		nextButton.fireEvent('click');
	}
	
	return self;
}

module.exports = CustomNavigationView;