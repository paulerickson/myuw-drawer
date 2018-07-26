import tpl from './myuw-drawer-subheader.html';

export class MyUWDrawerSubheader extends HTMLElement {
  constructor() {
    super();
    console.log('built')

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
})(tpl);

window.customElements.define('myuw-drawer-subheader', MyUWDrawerSubheader);
