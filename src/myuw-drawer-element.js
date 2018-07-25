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
