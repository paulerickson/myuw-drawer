<myuw-drawer>
Work in progress web component based on Material's app drawer.


##Using the component
* Include script tag for component.
* Add custom html tag
```javascript
	<myuw-drawer open links='{
		"primary": [   
			{ "name": "MyUW", "subheader":true },   
			{ "name": "MyUW home", "icon": "mail", "href": "http://google.com" },
			{ "name": "Browse apps", "icon": "explore", "href":"http://google.com" },
			{ "name": "Notifications", "icon": "notifications", "href":"http://google.com" },
			{ "name": "About", "icon": "info", "href":"http://google.com" },
			{ "name": "Version infomation", "icon": "help_outline", "href":"http://google.com" }
		],
		"support": [
			{ "name": "Help", "href": "http://google.com" },
			{ "name": "Feedback", "href": "http://google.com" }
		]
	}'></myuw-drawer>
```
* Add the `open` attribute to default the drawer to open. Remove attribute to hide.
