/**************************************************************************************************
 * 
 * 											CustomNavigationView
 * 
 **************************************************************************************************/

function CustomNavigationView(args) {
	// default class properties
	var property = {
		name:						null,
		backgroundColor:			'black',
		position:					'top',
		height:						'auto',
		width:						'auto',
		buttonWidth:				'14%',
		buttonHeight:				'100%',
		navBarHeight:				'10%',
		navViewHeight:				null,
		navViews:					null,
		currentViewIndex:			null,
		nextButtonImage:			'/CustomNavigationView/images/next_button_default.png',
		nextButtonSelectedImage:	'none',
		nextButtonRight:			'1%',
		backButtonImage:			'/CustomNavigationView/images/back_button_default.png',
		backButtonSelectedImage:	'none',
		backButtonLeft:				'1%',
		navBarImage:				'/CustomNavigationView/images/navigation_bar_default.png',
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
	var nextButton = Titanium.UI.createButton({
		backgroundImage:			property['nextButtonImage'],
		backgroundSelectedImage:	property['nextButtonSelectedImage'],
		height:						property['buttonHeight'],
		width:						property['buttonWidth'],
		right:						property['nextButtonRight'],
	});
	
	nextButton.addEventListener('click', function(){
		// check if navigation view is at the end
		if (property['currentViewIndex'] == property['navViews'].length-1) {
			
			// fire navigation end action event and return
			Ti.App.fireEvent('navEndAction', {name: property['name']});
			return;
		}
		
		// unhide the back button
		backButton.visible = true;
		
		// fire navigation animation begin event
		Ti.App.fireEvent('navAnimationBegin', {currentViewIndex: property['currentViewIndex']});
		
		// fade out current title
		property['navViews'][property['currentViewIndex']].title.animate(titleFadeOutAnimation);
		
		// move and hide the current view off the screen	
		property['navViews'][property['currentViewIndex']].animate(nextSlideOffScreenAnimation); 
		
    	// unhide and move the next view onto the screen
    	property['currentViewIndex'] += 1;
    	
    	// check if navigation view is going to be at the end
		if (property['currentViewIndex'] == property['navViews'].length-1) {
			
			// fire navigation end visible event
			Ti.App.fireEvent('navEndVisible', {name: property['name']});
		}
    	
    	property['navViews'][property['currentViewIndex']].right = -(property['screenWidth']);
    	property['navViews'][property['currentViewIndex']].left = property['screenWidth'];
   
    	property['navViews'][property['currentViewIndex']].animate(nextSlideOnScreenAnimation);
    	
    	// fade in new title
    	property['navViews'][property['currentViewIndex']].title.animate(titleFadeInAnimation);
	});
	
	navBar.add(nextButton);
	
	// back button
	var backButton = Titanium.UI.createButton({
		backgroundImage:			property['backButtonImage'],
		backgroundSelectedImage:	property['backButtonSelectedImage'],
		height:						property['buttonHeight'],
		width:						property['buttonWidth'],
		left:						property['backButtonLeft'],
	});
	
	backButton.addEventListener('click', function(){
		// check if navigation view is at the start
		if (property['currentViewIndex'] == 0) {
			
			// fire navigation start action event and return
			Ti.App.fireEvent('navStartAction', {name: property['name']});
			return;
		}
		
		// unhide the next button
		nextButton.visible = true;
		
		// fire navigation animation begin event
		Ti.App.fireEvent('navAnimationBegin', {currentViewIndex: property['currentViewIndex']});
		
		// fade out current title
		property['navViews'][property['currentViewIndex']].title.animate(titleFadeOutAnimation);
		
		// move and hide the current view off the screen
		property['navViews'][property['currentViewIndex']].animate(backSlideOffScreenAnimation); 

    	// unhide and move the previous view onto the screen
    	property['currentViewIndex'] -= 1;
    	
    	// check if navigation view is going to be at the start
		if (property['currentViewIndex'] == 0) {
			
			// fire navigation start visible event
			Ti.App.fireEvent('navStartVisible', {name: property['name']});
		}
    	
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
			titleFont:			{fontSize:'8dp',fontWeight:'bold',fontFamily:'Helvetica Neue'},
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
	
	self.reset = function() {
		
		// hide current title
		property['navViews'][property['currentViewIndex']].title.opacity = 0;
		
		// reset back to the first view
		for (var i = 0; i < property['navViews'].length; i++) {
			
			if (i == 0) {
				property['navViews'][i].right = 0;
				property['navViews'][i].left = 0;
			} else {
				property['navViews'][i].right = -(property['screenWidth']);
				property['navViews'][i].left = property['screenWidth'];
			}	
		}
		
		// reset index to first view
		property['currentViewIndex'] = 0;
		
		// show new title
		property['navViews'][property['currentViewIndex']].title.opacity = 1;
	}
	
	self.nextView = function() {
		nextButton.fireEvent('click');
	}
	
	self.hideBackButton = function() {
		backButton.visible = false;
	}
	
	self.showBackButton = function() {
		backButton.visible = true;
	}
	
	self.hideNextButton = function() {
		nextButton.visible = false;
	}
	
	self.showNextButton = function() {
		nextButton.visible = true;
	}
	
	return self;
}

module.exports = CustomNavigationView;