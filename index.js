import "./model/counter-component";

import { createStore} from "./model/store";
import { add, subtract, reset } from "./model/actions";
import { reducer } from "./model/reducers";
const testScenarios = () => {
  console.log("Scenario 1 - Initial State: ", store.getState());

  store.dispatch(add());
  store.dispatch(add());
  console.log("Scenario 2 - After 2 ADD actions: ", store.getState());

  store.dispatch(subtract());
  console.log("Scenario 3 - After SUBTRACT action : ", store.getState());

  store.dispatch(reset());
  console.log("Scenario 4 - After RESET action: ", store.getState());
};
testScenarios();
