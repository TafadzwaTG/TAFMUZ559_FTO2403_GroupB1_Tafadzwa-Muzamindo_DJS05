import { store, Store } from "./store";
import { add, subtract, reset } from "./actions";

class CounterComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.render();
  }
  render() {
    this.shadowRoot.innerHTML = `
        <div>
        <button id="add">Add</button>
        <button id="subtract">Subtract</button>
        <button id="reset">Reset</button>
        </div>
        <h2>Value: <span id="value">0</span></h2>
        `;
  }
  connectedCallback() {
    this.updateValue();
    this.addEventListeners();
  }
  disconnectedCallback() {
    this.unsubscribe && this.unsubscribe();
  }
  addEventListeners() {
    this.shadowRoot
      .getElementById("add")
      .addEventListener("click", () => store.dispatch(add()));
    this.shadowRoot
      .getElementById("subtract")
      .addEventListener("click", () => store.dispatch(subtract()));
    this.shadowRoot
      .getElementById("reset")
      .addEventListener("click", () => store.dispatch(reset()));

    this.unsubscribe = store.subscribe(() => this.updateValue());
  }
  updateValue() {
    const value = store.getState().value;
    this.shadowRoot.getElementById("value").textContent = value;
  }
}

customElements.define("counter-component", CounterComponent);
