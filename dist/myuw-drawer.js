var MyUWDrawer = (function (exports) {
  'use strict';

  var tpl = " <style> @import url(https://fonts.googleapis.com/icon?family=Material+Icons);\n\n  :host([open]) #drawer {\n    left: 0;\n  }\n\n  :host([open]) #shadow {\n    display: block;\n  }\n\n  #drawer {\n    width: 300px;\n    height: 100%;\n    display: block;\n    position: fixed;\n    left: -300px;\n    top: 64px;\n    bottom: 0;\n    z-index: 5;\n    background-color: white;\n    transition: left .4s cubic-bezier(.25, .8, .25, 1);\n  }\n\n  #drawer ul {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n  }\n\n  #shadow {\n    display: none;\n    position: fixed;\n    top: 64px;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background: rgba(33, 33, 33, .48);\n  }\n\n  #menu-icon {\n    user-select: none;\n    cursor: pointer;\n    padding: 7px;\n    border-radius: 100%;\n  }\n\n  #menu-icon:hover {\n    background-color: rgba(0,0,0,0.1);\n  } </style> <i id=\"menu-icon\" class=\"material-icons\">menu</i> <div id=\"drawer\"> <ul> <slot name=\"myuw-drawer-links\"></slot> </ul> </div> <div id=\"shadow\"></div> ";

  class MyUWDrawer extends HTMLElement {
    constructor() {
      super();

      // Create a shadow-root for this element.
      this.attachShadow({ mode: 'open' });

      // Append the custom HTML template to the shadow-root.
      this.shadowRoot.appendChild(MyUWDrawer.template.content.cloneNode(true));
    }

    static get observedAttributes() {
      return [
        'open',
      ];
    }

    /**
     * Web component lifecycle hook to updated changed properties.
     */
    attributeChangedCallback(name, oldValue, newValue) {
      // ...
    }

    /**
     * When the component is first attached to the DOM, get its defined
     * attributes and listen for scrolling.
     */
    connectedCallback() {

      this.shadowRoot.getElementById('menu-icon').addEventListener('click', () => {
        this.setDrawerState();
      });

      this.shadowRoot.getElementById('shadow').addEventListener('click', () => {
        this.setDrawerState(false);
      });

    }

    /**
     * Clean-up listeners if the component is removed from the DOM.
     */
    disconnectedCallback() {
      // ...
    }

    /**
     * Update the component state depending on changed properties and/or
     * font loading.
     */
    updateComponent(prop, value) {
      // ...
    }

    setDrawerState(newState){
      switch(newState){
        case false:
          this.removeAttribute('open');
          break;

        case true:
          this.setAttribute('open', '');
          break;

        default:
          if(this.hasAttribute('open')){
            this.removeAttribute('open');
          } else {
            this.setAttribute('open', '');
          }
      }
    }
  }

  MyUWDrawer.template = (function template(src) {
    const template = (document.createElement('template'));
    template.innerHTML = src;
    return template;
  })(tpl);

  window.customElements.define('myuw-drawer', MyUWDrawer);

  var tpl$1 = " <style> @import url(https://fonts.googleapis.com/icon?family=Material+Icons);\n\n  #href {\n    height: 38px;\n    padding: 8px 16px;\n    display: block;\n    line-height: 38px;\n    text-decoration: none;\n  }\n\n  #href:hover {\n    background: rgba(158, 158, 158, .2);\n  }\n\n  #icon {\n    width: 40px;\n    height: 38px;\n    display: inline-block;\n    vertical-align: top;\n    font-size: 28px;\n    line-height: 38px;\n    text-align: center;\n    color: rgba(0, 0, 0, .54);\n  }\n\n  #name {\n    height: 28px;\n    display: inline-block;\n    color: black;\n  } </style> <li> <a id=\"href\"> <i id=\"icon\" class=\"material-icons\"></i> <span id=\"name\"></span> </a> </li> ";

  class MyUWDrawerLink extends HTMLElement {
    constructor() {
      super();

      // Create a shadow-root for this element.
      this.attachShadow({ mode: 'open' });

      // Append the custom HTML template to the shadow-root.
      this.shadowRoot.appendChild(MyUWDrawerLink.template.content.cloneNode(true));
    }

    static get observedAttributes() {
      return [
        'name',
        'icon',
        'href',
      ];
    }

    /**
     * Web component lifecycle hook to updated changed properties.
     */
    attributeChangedCallback(name, oldValue, newValue) {
      // ...
    }

    /**
     * When the component is first attached to the DOM, get its defined
     * attributes and listen for scrolling.
     */
    connectedCallback() {
      this.href = this.getAttribute('href') || null;
      this.icon = this.getAttribute('icon') || null;
      this.name = this.getAttribute('name') || null;

      this.$href = this.shadowRoot.querySelector('a#href');
      this.$icon = this.shadowRoot.querySelector('i#icon');
      this.$name = this.shadowRoot.querySelector('span#name');

      this.$href.setAttribute('href', this.href);
      this.$icon.innerText = this.icon;
      this.$name.innerText = this.name;
    }

    /**
     * Clean-up listeners if the component is removed from the DOM.
     */
    disconnectedCallback() {
      // ...
    }

    /**
     * Update the component state depending on changed properties and/or
     * font loading.
     */
    updateComponent(prop, value) {
      // ...
    }
  }

  MyUWDrawerLink.template = (function template(src) {
    const template = (document.createElement('template'));
    template.innerHTML = src;
    return template;
  })(tpl$1);

  window.customElements.define('myuw-drawer-link', MyUWDrawerLink);

  var tpl$2 = " <style> #label {\n    padding: 16px 16px 4px 22px;\n    display: inline-block;\n    color: rgba(0, 0, 0, .54);;\n  } </style> <li> <slot id=\"label\" name=\"label\"></slot> </li> ";

  class MyUWDrawerSubheader extends HTMLElement {
    constructor() {
      super();
      console.log('built');

      // Create a shadow-root for this element.
      this.attachShadow({ mode: 'open' });

      // Append the custom HTML template to the shadow-root.
      this.shadowRoot.appendChild(MyUWDrawerSubheader.template.content.cloneNode(true));
    }
  }

  MyUWDrawerSubheader.template = (function template(src) {
    const template = (document.createElement('template'));
    template.innerHTML = src;
    return template;
  })(tpl$2);

  window.customElements.define('myuw-drawer-subheader', MyUWDrawerSubheader);

  exports.MyUWDrawer = MyUWDrawer;
  exports.MyUWDrawerLink = MyUWDrawerLink;
  exports.MyUWDrawerSubheader = MyUWDrawerSubheader;

  return exports;

}({}));
