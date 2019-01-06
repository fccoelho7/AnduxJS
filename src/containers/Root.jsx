import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { LocaleProvider } from "antd";
import enUS from "antd/lib/locale-provider/en_US";
import Dashboard from "./Dashboard";
import Posts from "./Posts";
import NotFound from "./NotFound";

const Root = ({ store }) => (
  <Provider store={store}>
    <LocaleProvider locale={enUS}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/posts" component={Posts} />
          <Route path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
    </LocaleProvider>
  </Provider>
);

export default Root;
