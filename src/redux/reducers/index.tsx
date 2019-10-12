import displayReducer from "./display";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  display: displayReducer
});

// this is to provide the type for useSelector
export type AppState = ReturnType<typeof allReducers>;

export default allReducers;
