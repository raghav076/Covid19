import { combineReducers } from "redux";
import stateReducers from "./state.reducers";
import selectedDataReducers from "./selectedData";
import casesReducers from "./cases.reducers";

const rootReducer = combineReducers({
  states: stateReducers,
  selectedData: selectedDataReducers,
  cases: casesReducers,
});
export default rootReducer;
