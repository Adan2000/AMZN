import data from "./data";
import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const initialState = {};
const reducer = (state, action) => {
  return { products: data.products };
};
const composeEhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  reducer,
  initialState,
  composeEhancer(applyMiddleware(thunk))
);

export default store;
