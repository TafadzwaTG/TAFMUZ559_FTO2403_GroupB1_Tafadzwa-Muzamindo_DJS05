import { ADD, SUBTRACT, RESET } from "./actions.js";

// Initial state of the store
const intialState = {
  value: 0,
};

// Reducer function to handle state changes based on actions
export function reducer(state = intialState, action) {
  switch (action.type) {
    // Handle the ADD action
    case ADD:
      return { ...state, value: state.value + 1 };
    // Handle the SUBTRACT action
    case SUBTRACT:
      return { ...state, value: state.value - 1 };
    //Handle the RESET action
    case RESET:
      return { ...state, value: 0 };
    default:
      return state;
  }
}
