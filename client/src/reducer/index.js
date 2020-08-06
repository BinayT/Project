import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import cartPopover from "./cartPopover";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  counterReducer,
  loggedReducer,
  cartPopover,
});

export default allReducers;
