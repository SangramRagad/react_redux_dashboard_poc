import { combineReducers } from "redux";
import { serviceReducer } from "./serviceReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
  service: serviceReducer,
  auth: authReducer,
});

export default rootReducer;
