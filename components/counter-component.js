import { add, subtract, reset } from "../model/actions.js";
import { store } from "../model/store.js";

//Define the CounterComponent class extending HTMLElement
class CounterComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.store = null;
    this.render();
  }
   //Method to set store and initialize event listeners and state
  setStore(store) {
    this.store = store;
    this.updateValue();
    this.addEventListeners();
  }
  // Method to render the componet's HTML structure
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
  // Method called whem the component is removed from the DOM
  disconnectedCallback() {
    this.unsubscribe && this.unsubscribe();
  }
  // Method to add event listeners to the buttons
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

  //Method to update the displayed value based on the store's state
  updateValue() {
    if (this.store) {
      const value = store.getState().value; //Get the current value from the store
      this.shadowRoot.getElementById("value").textContent = value; //Updated the displayed value
    }
  }
}

//Define the custom element
customElements.define("counter-component", CounterComponent);

export { CounterComponent };
