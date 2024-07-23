
import { reducer } from "./reducers.js";

 class Store{
    constructor(reducer) {
        this.state = undefined;
        this.listeners = [];
        this.reducer = reducer;
        this.dispatch({type: "@@INIT"});
    }
    getState() {
        return this.state
    }

    dispatch(action){
        this.state = this.reducer(this.state, action);
        this.listeners.forEach(listener => listener());
    }
    subscribe(listener){
        this.listeners.push(listener);
        return () => {
            this.listeners = this.listeners.filter(l => l !== listener);
        };
    }
}

export function createStore(reducer) {
   return new Store(reducer);
}
export const store = createStore(reducer);
