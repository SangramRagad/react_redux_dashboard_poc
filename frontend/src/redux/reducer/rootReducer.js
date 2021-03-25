import { combineReducers } from "redux";
import { serviceReducer } from "./serviceReducer";

const rootReducer = combineReducers({
  service: serviceReducer,
});

export default rootReducer;
