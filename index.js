import { createStore } from "./model/store.js";
import { reducer } from "./model/reducers.js";
import { CounterComponent } from "./components/counter-component.js";
import { add, subtract, reset } from "./model/actions.js";

// Create a new store with the provided reducer
const store = createStore(reducer);

// Wait untill the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Initialize the CounterComponent with store
  document.querySelectorAll("counter-component").forEach((component) => {
    if (component instanceof CounterComponent) {
      component.setStore(store);
    }
  });
  //Run the test scenarios
  testScenarios();
});

//Fuction to test various scenarios and log the results
function testScenarios() {
  // Log the initial sate of the storw
  console.log("Scenario 1 - Initial State: ", store.getState());
  // Dispatch ADD action and log the sate
  store.dispatch(add());
  store.dispatch(add());
  console.log("Scenario 2 - After 2 ADD actions: ", store.getState());
  // Dispatch SUBTRACT action and log the sate
  store.dispatch(subtract());
  console.log("Scenario 3 - After SUBTRACT action : ", store.getState());
  // Dispatch RESET actions and log the sate
  store.dispatch(reset());
  console.log("Scenario 4 - After RESET action: ", store.getState());
}
