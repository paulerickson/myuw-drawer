import tpl from './myuw-drawer-element.html';

export class MyUWDrawer extends HTMLElement {
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
   * When the component is first attached to the DOM, get its defined
   * attributes and listen for scrolling.
   */
  connectedCallback() {

    this.$container   = this.shadowRoot.querySelector('div#drawer-container');
    this.$drawerSlot  = this.shadowRoot.querySelector('slot');
    this.$button      = this.shadowRoot.getElementById('drawer-button');
    this.$shadow      = this.shadowRoot.getElementById('shadow')

    // Check if initial drawer state is open by default
    if (this.hasAttribute('open')) {
      this.removeAttribute('open');
      this.$container.setAttribute('open', '');
      this.$drawerSlot.removeAttribute('tabindex');
      
    }

    this.$button.addEventListener('click', () => {
      this.setDrawerState();
    });

    this.$shadow.addEventListener('click', () => {
      this.setDrawerState(false);
    });
  }

  /**
   * Web component lifecycle hook to updated changed properties.
   */
  attributeChangedCallback(name, oldValue, newValue) {
    // ...
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

  setDrawerState(newState) {
    switch(newState) {
      case false:
        this.$container.removeAttribute('open');
        this.$drawerSlot.setAttribute('tabindex', '-1');
        break;

      case true:
        this.$container.setAttribute('open', '');
        this.$drawerSlot.removeAttribute('tabindex');
        break;

      default:
        if(this.$container.hasAttribute('open')) {
          this.$container.removeAttribute('open');
          this.$drawerSlot.setAttribute('tabindex', '-1');
        } else {
          this.$container.setAttribute('open', '');
          this.$drawerSlot.removeAttribute('tabindex');
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
