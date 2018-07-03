class VanillaJSWebComponent extends HTMLElement {
    constructor() {
      super();
      this.innerHTML = `<button type="button">I am a web component written in Vanilla JS</button>`;
    }
  }
  window.customElements.define('wc-vanilla', VanillaJSWebComponent);