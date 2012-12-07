#CustomTabGroup

A customized tab group view.

##Getting Started

To use CustomTabGroup in your project, copy the folder into the Resource directory of your project, and import the code:

```
var CustomTabGroup = require('CustomTabGroup/CustomTabGroup');
```

Then, create a new instance of the view:

```
var customTabGroup = CustomTabGroup();
```

Note: This call uses the default paramaters.  This can also be called using your own custom examples:

```
var customTabGroup = CustomTabGroup({
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
        <td>name</td>
        <td>string</td>
        <td>'default'</td>
        <td>Defines the name of the tab group, which is used as an identifier in notification events.</td>
    </tr>
    <tr>
        <td>height</td>
        <td>string</td>
        <td>'auto'</td>
        <td>Defines the height of the tab view (and subsequently the maximum height of all its views)</td>
    </tr>
    <tr>
        <td>width</td>
        <td>string</td>
        <td>'auto'</td>
        <td>Defines the width of the tab view (and subsequently the maximum width of all its views)</td>
    </tr>
    <tr>
        <td>tabBarHeight</td>
        <td>string</td>
        <td>'10%'</td>
        <td>Defines the height of the tab bar</td>
    </tr>
    <tr>
        <td>position</td>
        <td>string</td>
        <td>'bottom'</td>
        <td>Defines where the tab bar will be on the view.  This can be either 'top' or 'bottom'</td>
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
    title:  'Example Navigation View'
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
        <td>&quot;TEST&quot;</td>
        <td>The title of the view presented in the navigation bar when this view is active.</td>
    </tr>
    <tr>
        <td>titleColor</td>
        <td>string</td>
        <td>&quot;white&quot;</td>
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