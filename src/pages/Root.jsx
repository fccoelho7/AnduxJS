import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { LocaleProvider } from "antd";
import enUS from "antd/lib/locale-provider/en_US";
import Dashboard from "./Dashboard";
import Page404 from "./Page404";
import CustomRoutes from "../components/Routes";
import routes from "./routes";

const Root = ({ store }) => (
  <Provider store={store}>
    <LocaleProvider locale={enUS}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <CustomRoutes routes={routes} />
          <Route component={Page404} />
        </Switch>
      </BrowserRouter>
    </LocaleProvider>
  </Provider>
);

export default Root;
