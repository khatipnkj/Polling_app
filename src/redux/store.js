import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./saga/rootSaga";
import rootReducer from "./reducers/rootreducer";
const initialState = {};

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(rootSaga);
export default store;