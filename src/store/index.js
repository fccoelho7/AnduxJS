import { createStore } from "redux";
import { combineReducers } from "redux";
import todos from "../containers/Home/todos";

export default createStore(
  combineReducers({
    todos
  })
);
