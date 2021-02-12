import { combineReducers } from "redux";

const allReducers = combineReducers({
  counter: (state = 0, action) => {
    switch (action.type) {
      case "INCREMENT":
        return state + 1;
      case "DECREMENT":
        return state - 1;
      default:
        return state;
    }
  },
  isLogged: (state = 0, action) => {
    switch (action.type) {
      case "SIGN_IN":
        return !state;
      default:
        return state;
    }
  },
});

export default allReducers;
