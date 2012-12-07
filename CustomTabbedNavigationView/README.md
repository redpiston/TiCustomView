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

##Adding a Tab

Once a tab group has been created, the following method can be called to add a tab (and corresponding view):

```
customTabGroup.addTab();
```

Note: This call uses the default paramaters.  This can also be called using your own custom examples:

```
customTabGroup.addTab({
    tabText:  'Example Tab'
});
```

The following properties can be defined when adding a new tab:

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
        <td>The view being associated with this tab.  If not set, this method will create a default view.</td>
    </tr>
    <tr>
        <td>name</td>
        <td>string</td>
        <td>'default'</td>
        <td>Defines the name of the tab view, which is used as an identifier in notification events.</td>
    </tr>
    <tr>
        <td>tabButtonImageWidth</td>
        <td>string</td>
        <td>'80%'</td>
        <td>The width of the tab button image.</td>
    </tr>
    <tr>
        <td>tabButtonImageHeight</td>
        <td>string</td>
        <td>'50%'</td>
        <td>The height of the tab button image.</td>
    </tr>
    <tr>
        <td>tabButtonImage</td>
        <td>string</td>
        <td>'/CustomTabGroup/images/ tabgroup_button_off_default.png'</td>
        <td>The image of the tab button (normal state).</td>
    </tr>
    <tr>
        <td>tabButtonImageSelected</td>
        <td>string</td>
        <td>'/CustomTabGroup/images/ tabgroup_button_on_default.png'</td>
        <td>The image of the tab button (active state).</td>
    </tr>
    <tr>
        <td>tabText</td>
        <td>string</td>
        <td>'TEST'</td>
        <td>The title of the tab button.</td>
    </tr>
     <tr>
        <td>tabTextBottom</td>
        <td>string</td>
        <td>'5%'</td>
        <td>The padding between the bottom of the tab and the tab text.</td>
    </tr>
    <tr>
        <td>tabFont</td>
        <td>object</td>
        <td>{fontSize:'8dp', fontWeight:'bold', fontFamily:'Helvetica Neue'}</td>
        <td>The font of the tab text.</td>
    </tr>
     <tr>
        <td>tabFontColor</td>
        <td>string</td>
        <td>'white'</td>
        <td>The color of the title.</td>
    </tr>
    <tr>
        <td>tabFontColorSelected</td>
        <td>string</td>
        <td>'white'</td>
        <td>The color of the title when the tab is selected.</td>
    </tr>
</table>

##Selecting a Tab

Once the tabs are created, the following method can be called to programmatically select a tab:

```
customTabGroup.selectTab(1);
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
        <td>The index of the tab to select.</td>
    </tr>
</table>

##Notifications

These custom notifications are fired during the following circumstances:

###gainFocus

This is fired when a tab becomes selected.  The following parameters are passed to the event listener:

<table>
    <tr>
        <th>Property</th>
        <th>Type</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>tabName</td>
        <td>string</td>
        <td>The name of the specific tab to gain focus.</td>
    </tr>
    <tr>
        <td>tabGroupName</td>
        <td>string</td>
        <td>The name of the tab group to gain focus.</td>
    </tr>
</table>

###loseFocus

This is fired when a tab becomes unselected.  The following parameters are passed to the event listener:

<table>
    <tr>
        <th>Property</th>
        <th>Type</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>tabName</td>
        <td>string</td>
        <td>The name of the specific tab to lose focus.</td>
    </tr>
    <tr>
        <td>tabGroupName</td>
        <td>string</td>
        <td>The name of the tab group to lose focus.</td>
    </tr>
</table>