import { ADD, SUBTRACT, RESET } from "./actions";

const intialState = {
  value: 0,
};

export function reducer(state = intialState, action) {
  switch (action.type) {
    case ADD:
      return { ...state, value: state.value + 1 };
    case SUBTRACT:
      return { ...state, value: state.value - 1 };
    case RESET:
      return { ...state, value: 0 };
    default:
      return state;
  }
}
