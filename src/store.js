import { createStore } from "redux";
import { combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import getAllReducers from "./utils/getAllReducers";
import * as pagesIndex from "./pages/index";

const reducers = getAllReducers(pagesIndex);

export default createStore(
  combineReducers(reducers),
  composeWithDevTools(applyMiddleware(thunk))
);
