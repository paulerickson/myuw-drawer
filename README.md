# `<myuw-drawer>`

A slide out navigation drawer for use with the MyUW App Bar

## Development and contribution

To run the demo app locally and test the component, run the following commands:

```bash
$ npm install
$ npm start
```

## Getting Started

Add the following imports to your page's `<head>`:

```html
<link rel="import" href="https://unpkg.com/@myuw-web-components/myuw-drawer@1.0.0/myuw-drawer.html">
<link rel="import" href="https://unpkg.com/@myuw-web-components/myuw-drawer@1.0.0/myuw-drawer-link.html">
```

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
</myuw-drawer>
```

### Configuration / child components

Use the named `<slot>` tags to include child components of the myuw-drawer:

**Available slots:**
- **myuw-drawer-links**: Insert the `<myuw-drawer-link>` component