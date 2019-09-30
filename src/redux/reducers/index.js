import displayReducer from "./display";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  display: displayReducer
});

export default allReducers;
