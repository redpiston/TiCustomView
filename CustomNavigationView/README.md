##CustomNavigationView

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

##Properties

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
        <td>&quot;top&quot;</td>
        <td>Defines where the navigation bar will be on the view.  This can be either &quot;top&quot; or &quot;bottom&quot;</td>
    </tr>
    <tr>
        <td>width</td>
        <td>string</td>
        <td>&quot;auto&quot;</td>
        <td>Defines the width of the navigation view (and subsequently the maximum width of all its views)</td>
    </tr>
    <tr>
        <td>height</td>
        <td>string</td>
        <td>&quot;auto&quot;</td>
        <td>Defines the height of the navigation view (and subsequently the maximum height of all its views)</td>
    </tr>
    <tr>
        <td>navBarHeight</td>
        <td>string</td>
        <td>&quot;10%&quot;</td>
        <td>Defines the height of the navigation bar</td>
    </tr>
    <tr>
        <td>buttonWidth</td>
        <td>string</td>
        <td>&quot;14%&quot;</td>
        <td>Defines the button width of the back and next buttons of the navigation view</td>
    </tr>
    <tr>
        <td>buttonHeight</td>
        <td>string</td>
        <td>&quot;85%&quot;</td>
        <td>Defines the button height of the back and next buttons of the navigation view</td>
    </tr>
</table>