#CustomTabGroup

A customized tab group view.

##Getting Started

To use CustomTabGroup in your project, copy the folder into the Resource directory of your project, and import the code:

```
var CustomTabGroup = require('CustomTabGroup/CustomTabGroup');
```

Then, create a new instance of the view (tabCount MUST be defined):

```
var customTabGroup = CustomTabGroup();
```

Note: This call uses the default paramaters.  This can also be called using your own custom examples:

```
var customTabGroup = CustomTabGroup({
    position: 'bottom',
    height:   '80%',
    tabCount:  2
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
        <td>name</td>
        <td>string</td>
        <td>'default'</td>
        <td>Defines the name of the tab group, which is used as an identifier in notification events.</td>
    </tr>
    <tr>
        <td>height</td>
        <td>string</td>
        <td>'auto'</td>
        <td>Defines the height of the tab view (and subsequently the maximum height of all its views).</td>
    </tr>
    <tr>
        <td>width</td>
        <td>string</td>
        <td>'auto'</td>
        <td>Defines the width of the tab view (and subsequently the maximum width of all its views).</td>
    </tr>
    <tr>
        <td>tabBarHeight</td>
        <td>string</td>
        <td>'10%'</td>
        <td>Defines the height of the tab bar.</td>
    </tr>
    <tr>
        <td>position</td>
        <td>string</td>
        <td>'bottom'</td>
        <td>Defines where the tab bar will be on the view.  This can be either 'top' or 'bottom'.</td>
    </tr>
    <tr>
        <td>tabCount</td>
        <td>int</td>
        <td>0</td>
        <td>The number of tabs (and views) in the tab group.  Note: this parameter is MANDATORY</td>
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