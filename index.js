// import "./model/counter-component.js";

import { createStore} from "./model/store.js";
import { reducer } from "./model/reducers.js";
import{ CounterComponent} from"./model/counter-component.js";
import { add, subtract, reset } from "./model/actions.js";

const store = createStore(reducer);

document.addEventListener("DOMContentLoaded", () =>{
  document.querySelectorAll("counter-component").forEach((component) =>{
    if(component instanceof CounterComponent){
      component.setStore(store);
    }
    
  });
  testScenarios();
});
function testScenarios () {
  console.log("Scenario 1 - Initial State: ", store.getState());

  store.dispatch(add());
  store.dispatch(add());
  console.log("Scenario 2 - After 2 ADD actions: ", store.getState());

  store.dispatch(subtract());
  console.log("Scenario 3 - After SUBTRACT action : ", store.getState());

  store.dispatch(reset());
  console.log("Scenario 4 - After RESET action: ", store.getState());
};

