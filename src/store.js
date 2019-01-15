import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import reducer from "./reducers/index";
import thunk from "redux-thunk";

const middleware = [thunk];

const store = createStore(
  reducer,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
