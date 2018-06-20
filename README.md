# `<myuw-drawer open links='...'></myuw-drawer>`

## Using the component

* Include script tag for component.
* Add custom html tag

```html
<myuw-drawer>
  <myuw-drawer-link
    slot="myuw-drawer-links"
    name="MyUW home"
    icon="mail"
    href="http://google.com">
  </myuw-drawer-link>
  <myuw-drawer-link
    slot="myuw-drawer-links"
    name="Browse apps"
    icon="explore"
    href="http://google.com">
  </myuw-drawer-link>
  <myuw-drawer-link
    slot="myuw-drawer-links"
    name="Notifications"
    icon="notifications"
    href="http://google.com">
  </myuw-drawer-link>
  <myuw-drawer-link
    slot="myuw-drawer-links"
    name="About"
    icon="info"
    href="http://google.com">
  </myuw-drawer-link>
  <myuw-drawer-link
    slot="myuw-drawer-links"
    name="Version information"
    icon="help_outline"
    href="http://google.com">
  </myuw-drawer-link>
</myuw-drawer>
```
