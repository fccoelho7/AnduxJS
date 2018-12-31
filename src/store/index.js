import { createStore } from "redux";
import { combineReducers } from "redux";
import posts from "../containers/Posts/posts";

export default createStore(
  combineReducers({
    posts
  })
);
