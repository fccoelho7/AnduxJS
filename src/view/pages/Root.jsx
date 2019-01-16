import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { LocaleProvider } from "antd";
import enUS from "antd/lib/locale-provider/en_US";
import ProtectedRoute from "../components/ProtectedRoute";
import Dashboard from "./Dashboard";
import Page404 from "./Page404";
import routes from "../routes";

const Root = ({ store }) => (
  <Provider store={store}>
    <LocaleProvider locale={enUS}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Dashboard} />
          {routes.map((route, i) =>
            route.protected ? (
              <ProtectedRoute key={i} {...route} />
            ) : (
              <Route key={i} {...route} />
            )
          )}
          <Route path="/404" exact component={Page404} />
          <Redirect to="/404" />
        </Switch>
      </BrowserRouter>
    </LocaleProvider>
  </Provider>
);

export default Root;
