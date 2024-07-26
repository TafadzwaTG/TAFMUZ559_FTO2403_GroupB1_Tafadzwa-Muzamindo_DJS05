// Define action types
export const ADD = "ADD";
export const SUBTRACT = "SUBTRACT";
export const RESET = "RESET";

// Define action creators
export const add = () => ({ type: ADD });
export const subtract = () => ({ type: SUBTRACT });
export const reset = () => ({ type: RESET });
