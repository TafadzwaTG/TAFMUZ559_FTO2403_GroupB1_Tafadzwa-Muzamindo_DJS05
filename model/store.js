import { reducer } from "./reducers.js";

// Store class to manage sate and handle actions
class Store {
  constructor(reducer) {
    this.state = undefined; // Initialize state as undefined
    this.listeners = []; // Initialize an arry to hold listeners
    this.reducer = reducer; // Set the reducer function
    this.dispatch({ type: "@@INIT" }); // Dispatch an initial action to set up the state
  }

  // Method to get the current state
  getState() {
    return this.state;
  }

  // Method to dispatch an action and update the state
  dispatch(action) {
    this.state = this.reducer(this.state, action);
    this.listeners.forEach((listener) => listener());
  }

  // Method to subscribe to state changes
  subscribe(listener) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter((l) => l !== listener);
    };
  }
}

// Function to create a new store with a given reducer
export function createStore(reducer) {
  return new Store(reducer);
}

//Create a store using the reducer and export it
export const store = createStore(reducer);
