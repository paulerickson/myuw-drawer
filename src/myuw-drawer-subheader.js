import tpl from './myuw-drawer-subheader.html';

export class MyUWDrawerSubheader extends HTMLElement {
  constructor() {
    super();

    // Create a shadow-root for this element.
    this.attachShadow({ mode: 'open' });

    // Append the custom HTML template to the shadow-root.
    this.shadowRoot.appendChild(MyUWDrawerSubheader.template.content.cloneNode(true));
  }

  static get observedAttributes() {
    return [
      'name',
      'divider'
    ];
  }

  connectedCallback() {
    // Get attributes and assign elements
    this['name']    = this.getAttribute('name') || '';
    this['divider'] = this.getAttribute('divider') == 'true' ? true : false;

    this.$label   = this.shadowRoot.getElementById('label');
    this.$divider = this.shadowRoot.getElementById('divider');

    if (this.$label != null 
      && this['name'].length > 0) {
      this.updateComponent();
    }
  }

  attributeChangedCallback(name, oldValue, newValue) {
    // Update the attribute internally
    this[name] = newValue;
    // Update the component
    if (this.$label) {
      this.updateComponent();
    }
  }

  updateComponent() {
    // Set subheader label
    this.$label.innerHTML = `<span>${this['name']}</span>`;

    // Display divider
    if (this['divider'] === true) {
      this.$divider.style.display = 'block';
    }
  }
}

MyUWDrawerSubheader.template = (function template(src) {
  const template = (document.createElement('template'));
  template.innerHTML = src;
  return template;
})(tpl);

window.customElements.define('myuw-drawer-subheader', MyUWDrawerSubheader);
