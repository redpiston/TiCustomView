#CustomNavigationView

A customized navigation view.

##Getting Started

To use CustomNavigationView in your project, copy the folder into the Resource directory of your project, and import the code:

```
var CustomNavigationView = require('CustomNavigationView/CustomNavigationView');
```

Then, create a new instance of the view:

```
var customNavView = CustomNavigationView();
```

Note: This call uses the default paramaters.  This can also be called using your own custom examples:

```
var customNavView = CustomNavigationView({
    position: 'bottom',
    height:   '80%'
});
```

The following properties can be defined when creating a new custom navigation view:

<table>
    <tr>
        <th>Property</th>
        <th>Type</th>
        <th>Default</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>position</td>
        <td>string</td>
        <td>'top'</td>
        <td>Defines where the navigation bar will be on the view.  This can be either 'top' or 'bottom'.</td>
    </tr>
    <tr>
        <td>width</td>
        <td>string</td>
        <td>'auto'</td>
        <td>Defines the width of the navigation view (and subsequently the maximum width of all its views).</td>
    </tr>
    <tr>
        <td>height</td>
        <td>string</td>
        <td>'auto'</td>
        <td>Defines the height of the navigation view (and subsequently the maximum height of all its views).</td>
    </tr>
    <tr>
        <td>navBarHeight</td>
        <td>string</td>
        <td>'10%'</td>
        <td>Defines the height of the navigation bar.</td>
    </tr>
    <tr>
        <td>buttonWidth</td>
        <td>string</td>
        <td>'14%'</td>
        <td>Defines the button width of the back and next buttons of the navigation view.</td>
    </tr>
    <tr>
        <td>buttonHeight</td>
        <td>string</td>
        <td>'85%'</td>
        <td>Defines the button height of the back and next buttons of the navigation view.</td>
    </tr>
    <tr>
        <td>nextButtonImage</td>
        <td>string</td>
        <td>'/CustomNavigationView/images/ next_button_default.png'</td>
        <td>The image of the next button (normal state).</td>
    </tr>
    <tr>
        <td>nextButtonSelectedImage</td>
        <td>string</td>
        <td>'/CustomNavigationView/images/ next_button_selected_default.png'</td>
        <td>The image of the next button (active state).</td>
    </tr>
    <tr>
        <td>nextButtonRight</td>
        <td>string</td>
        <td>'1%'</td>
        <td>Defines the padding between the next button the right-end of the navigation bar.</td>
    </tr>
    <tr>
        <td>backButtonImage</td>
        <td>string</td>
        <td>'/CustomNavigationView/images/ back_button_default.png'</td>
        <td>The image of the back button (normal state).</td>
    </tr>
    <tr>
        <td>backButtonSelectedImage</td>
        <td>string</td>
        <td>'/CustomNavigationView/images/ back_button_selected_default.png'</td>
        <td>The image of the back button (active state).</td>
    </tr>
    <tr>
        <td>backButtonLeft</td>
        <td>string</td>
        <td>'1%'</td>
        <td>Defines the padding between the back button the left-end of the navigation bar.</td>
    </tr>
    <tr>
        <td>navBarImage</td>
        <td>string</td>
        <td>'/CustomNavigationView/images/ navigation_bar_default.png'</td>
        <td>The image of the navigation bar.</td>
    </tr>
     <tr>
        <td>animationDuration</td>
        <td>int</td>
        <td>500</td>
        <td>The time is takes (in ms) for the next view to transition onto the screen when the next or back buttons are pressed.</td>
    </tr>
</table>

##Creating A View

Once a navigation view has been created, the following method can be called to create a new view for it:

```
customNavView.addView();
```

Note: This call uses the default paramaters.  This can also be called using your own custom examples:

```
customNavView.addView({
    title:	'Example Navigation View'
});
```

The following properties can be defined when adding a new view:

<table>
    <tr>
        <th>Property</th>
        <th>Type</th>
        <th>Default</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>view</td>
        <td>Titanium.UI.View</td>
        <td>null</td>
        <td>The view being added to the navigation view.  If not set, this method will create a default view.</td>
    </tr>
    <tr>
        <td>title</td>
        <td>string</td>
        <td>'TEST'</td>
        <td>The title of the view presented in the navigation bar when this view is active.</td>
    </tr>
    <tr>
        <td>titleColor</td>
        <td>string</td>
        <td>'white'</td>
        <td>The color of the title.</td>
    </tr>
    <tr>
        <td>titleFont</td>
        <td>object</td>
        <td>{fontSize:'14dp', fontWeight:'bold', fontFamily:'Helvetica Neue'}</td>
        <td>The color of the title.</td>
    </tr>
</table>

##Notifications

These custom notifications are fired during the following circumstances:

###navAnimationBegin

This is fired when a transition animation to a new view begins.  The following parameters are passed to the event listener:

<table>
    <tr>
        <th>Property</th>
        <th>Type</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>currentViewIndex</td>
        <td>int</td>
        <td>The index of the current view in the array of views for this navigation view.</td>
    </tr>
</table>

###navAnimationEnd

This is fired when a transition animation to a new view ends.  The following parameters are passed to the event listener:

<table>
    <tr>
        <th>Property</th>
        <th>Type</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>currentViewIndex</td>
        <td>int</td>
        <td>The index of the current view in the array of views for this navigation view.</td>
    </tr>
</table>