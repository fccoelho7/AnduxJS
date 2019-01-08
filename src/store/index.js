import { createStore } from "redux";
import { combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import posts from "../pages/Posts/reducer";

const reducers = combineReducers({
  posts
});

export default createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);
