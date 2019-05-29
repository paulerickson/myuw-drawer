import tpl from './myuw-drawer-link.html';

export class MyUWDrawerLink extends HTMLElement {
  constructor() {
    super();

    this.connected = false;

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
    // Safefly reference variables
    if (typeof this[name] !== null) {
      // Update if the attribute is different than before
      if(oldValue !== newValue){
        this[name] = newValue;
        this.updateComponent(name, newValue);
      }
    }
  }

  /**
   * When the component is first attached to the DOM, get its defined
   * attributes and listen for scrolling.
   */
  connectedCallback() {
    this.href = this.getAttribute('href') || null;
    this.icon = this.getAttribute('icon') || null;
    this.name = this.getAttribute('name') || null;

    this.$href = this.shadowRoot.querySelector('a#drawer-link');
    this.$icon = this.shadowRoot.querySelector('i#icon');
    this.$name = this.shadowRoot.querySelector('span#name');

    this.$href.setAttribute('href', this.href);
    this.$icon.innerText = this.icon;
    this.$name.innerText = this.name;

    this.connected = true;
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
    if( !this.connected ){ return; }
    switch(prop){
      case "href":
      this.$href.setAttribute('href', this.href);
        break;

      case "icon":
      this.$icon.innerText = this.icon;
        break;

        case "name":
        this.$name.innerText = this.name;
          break;
    }
  }
}

MyUWDrawerLink.template = (function template(src) {
  const template = (document.createElement('template'));
  template.innerHTML = src;
  return template;
})(tpl);

window.customElements.define('myuw-drawer-link', MyUWDrawerLink);
