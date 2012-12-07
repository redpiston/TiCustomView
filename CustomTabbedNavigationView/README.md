#CustomTabbedNavigationView

A customized hybrid navigation view and tab group.

##Getting Started

To use CustomTabbedNavigationView in your project, copy the folder into the Resource directory of your project, and import the code:

```
var CustomTabbedNavigationView = require('CustomTabbedNavigationView/CustomTabbedNavigationView');
```

Then, create a new instance of the view:

```
var customTabbedNavigationView = CustomTabbedNavigationView();
```

Note: This call uses the default paramaters.  This can also be called using your own custom examples:

```
var customTabbedNavigationView = CustomTabbedNavigationView({
    position:   'bottom',
    height:     '80%',
    viewCount:  2
});
```

The following properties can be defined when creating a new custom tabbed navigation view:

<table>
    <tr>
        <th>Property</th>
        <th>Type</th>
        <th>Default</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>height</td>
        <td>string</td>
        <td>'auto'</td>
        <td>Defines the height of the tabbed navigation view (and subsequently the maximum height of all its views).</td>
    </tr>
    <tr>
        <td>width</td>
        <td>string</td>
        <td>'auto'</td>
        <td>Defines the width of the tabbed navigation view (and subsequently the maximum width of all its views).</td>
    </tr>
     <tr>
        <td>buttonWidth</td>
        <td>string</td>
        <td>'14%'</td>
        <td>Defines the button width of the back and next buttons of the tabbed navigation view.</td>
    </tr>
    <tr>
        <td>buttonHeight</td>
        <td>string</td>
        <td>'85%'</td>
        <td>Defines the button height of the back and next buttons of the tabbed navigation view.</td>
    </tr>
    <tr>
        <td>navBarHeight</td>
        <td>string</td>
        <td>'10%'</td>
        <td>Defines the height of the nav bar.</td>
    </tr>
    <tr>
        <td>position</td>
        <td>string</td>
        <td>'top'</td>
        <td>Defines where the nav bar will be on the view.  This can be either 'top' or 'bottom'.</td>
    </tr>
    <tr>
        <td>viewCount</td>
        <td>int</td>
        <td>0</td>
        <td>The number of tabs (and views) in the tabbed navigation view.  Note: this parameter is MANDATORY</td>
    </tr>
    <tr>
        <td>nextButtonImage</td>
        <td>string</td>
        <td>'/CustomTabbedNavigationView/images/ next_button_default.png'</td>
        <td>The image of the next button (normal state).</td>
    </tr>
    <tr>
        <td>nextButtonSelectedImage</td>
        <td>string</td>
        <td>'/CustomTabbedNavigationView/images/ next_button_selected_default.png'</td>
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
        <td>'/CustomTabbedNavigationView/images/ back_button_default.png'</td>
        <td>The image of the back button (normal state).</td>
    </tr>
    <tr>
        <td>backButtonSelectedImage</td>
        <td>string</td>
        <td>'/CustomTabbedNavigationView/images/ back_button_selected_default.png'</td>
        <td>The image of the back button (active state).</td>
    </tr>
    <tr>
        <td>backButtonLeft</td>
        <td>string</td>
        <td>'1%'</td>
        <td>Defines the padding between the back button the left-end of the navigation bar.</td>
    </tr>
     <tr>
        <td>animationDuration</td>
        <td>int</td>
        <td>500</td>
        <td>The time is takes (in ms) for the next view to transition onto the screen when the next or back buttons are pressed.</td>
    </tr>
</table>

##Creating A View

Once a tabbed navigation view has been created, the following method can be called to create a new view for it:

```
customTabbedNavigationView.addView();
```

Note: This call uses the default paramaters.  This can also be called using your own custom examples:

```
customTabbedNavigationView.addView({
    view:   testView
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
        <td>The view being added to the tabbed navigation view.  If not set, this method will create a default view.</td>
    </tr>
    <tr>
        <td>inactiveViewTabImage</td>
        <td>string</td>
        <td>'/CustomTabbedNavigationView/images/ inactive_view_tab_default.png'</td>
        <td>The image of the tab button (normal state).</td>
    </tr>
    <tr>
        <td>activeViewTabImage</td>
        <td>string</td>
        <td>'/CustomTabbedNavigationView/images/ active_view_tab_default.png'</td>
        <td>The image of the tab button (active state).</td>
    </tr>
    <tr>
        <td>viewTabImageWidth</td>
        <td>string</td>
        <td>'50%'</td>
        <td>The width of the tab button.</td>
    </tr>
    <tr>
        <td>viewTabImageHeight</td>
        <td>string</td>
        <td>'50%'</td>
        <td>The height of the tab button.</td>
    </tr>
    <tr>
        <td>viewTabFont</td>
        <td>object</td>
        <td>{fontSize:'8dp', fontWeight:'bold', fontFamily:'Helvetica Neue'}</td>
        <td>The font of the tab text.</td>
    </tr>
    <tr>
        <td>activeViewTabColor</td>
        <td>string</td>
        <td>'black'</td>
        <td>The color of the tab text when the tab is active.</td>
    </tr>
    <tr>
        <td>inactiveViewTabColor</td>
        <td>string</td>
        <td>'white'</td>
        <td>he color of the tab text when the tab is inactive.</td>
    </tr>
</table>

##Selecting a View

Once the tabbed views are created, the following method can be called to programmatically select a view:

```
customTabbedNavigationView.selectView(1);
```

This method is called with the following following parameters:

<table>
    <tr>
        <th>Parameter</th>
        <th>Type</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>index</td>
        <td>int</td>
        <td>The index of the view to select.</td>
    </tr>
</table>