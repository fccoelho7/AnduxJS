import { createStore } from "redux";
import { combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import posts from "../containers/Posts/reducer";

const reducers = combineReducers({
  posts
});

export default createStore(reducers, applyMiddleware(thunk));
