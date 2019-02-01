# Examples

This document contains examples of using the component.

## The simplest implementation

The behavior of tabs is no different from the behavior of ordinary links.
To select an active tab, use the `data-ah-tab-active="true"` attribute.

```js
$('.ah-tab-wrapper').horizontalmenu();
```

```html
<div class="ah-tab-wrapper">
    <div class="ah-tab">
        <a class="ah-tab-item" href="" data-ah-tab-active="true">First tab</a>
        <a class="ah-tab-item" href="">Second tab</a>
        <a class="ah-tab-item" href="">Third tab</a>
        <a class="ah-tab-item" href="">Fourth tab</a>
        <a class="ah-tab-item" href="">Fifth tab</a>
    </div>
</div>
```

## Switching tabs without redirecting the link

When you click on the tab, it becomes active `data-ah-tab-active="true"`, all other tabs are deactivated.

```js
$('.ah-tab-wrapper').horizontalmenu({
    //the tab click event occurs before the tab is assigned the data-ah-tab-active="true" attribute
    itemClick : function(item) { //item - the tab on which you clicked
        return false; //stop the standard click-through
    }
});
```

```html
<div class="ah-tab-wrapper">
    <div class="ah-tab">
        <a class="ah-tab-item" href="" data-ah-tab-active="true">First tab</a>
        <a class="ah-tab-item" href="">Second tab</a>
        <a class="ah-tab-item" href="">Third tab</a>
        <a class="ah-tab-item" href="">Fourth tab</a>
        <a class="ah-tab-item" href="">Fifth tab</a>
    </div>
</div>
```

## Switching tabs without redirecting the link and displaying the content of the active tab

When you click on the tab, it becomes active `data-ah-tab-active="true"`, all other tabs are deactivated.
The content related to the active tab will be displayed.

```js
$('#tab').horizontalmenu({
    itemClick : function(item) {
        $('#tab_content .ah-tab-content').removeAttr('data-ah-tab-active'); //hide the content of all tabs
        $($(item).attr('href')).attr('data-ah-tab-active', 'true'); //display content belonging to the current tab
        return false; //stopping the standard click-through
    }
});
```

```html
<div id="tab" class="ah-tab-wrapper">
    <div class="ah-tab">
        <a class="ah-tab-item" href="" data-ah-tab-active="true">First tab</a>
        <a class="ah-tab-item" href="">Second tab</a>
        <a class="ah-tab-item" href="">Third tab</a>
    </div>
</div>

<div id="tab_content" class="ah-tab-content-wrapper">
    <div id="tab1" class="ah-tab-content" data-ah-tab-active="true">
        <h2>It is the content of the first tab</h2>
    </div>
    <div id="tab2" class="ah-tab-content">
        <h2>It is the content of the second tab</h2>
    </div>
    <div id="tab3" class="ah-tab-content">
        <h2>It is the content of the third tab</h2>
    </div>
</div>
```