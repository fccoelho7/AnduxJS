import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Posts from "./Posts";
import NotFound from "./NotFound";

const Root = ({ store }) => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/posts" component={Posts} />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  </Provider>
);

export default Root;
