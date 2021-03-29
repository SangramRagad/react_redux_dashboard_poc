import { createStore, applyMiddleware } from "redux";
// import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./redux/reducer/rootReducer";
// import rootSaga from "./sagas/rootSaga";
import thunk from "redux-thunk";

// const saga = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

// saga.run(rootSaga);

export default store;
