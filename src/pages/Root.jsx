import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { LocaleProvider } from "antd";
import enUS from "antd/lib/locale-provider/en_US";
import routes from "./routes";

const Routes = () => routes.map(route => <Route exact {...route} />);

const Root = ({ store }) => (
  <Provider store={store}>
    <LocaleProvider locale={enUS}>
      <BrowserRouter>
        <Switch>
          <Routes />
        </Switch>
      </BrowserRouter>
    </LocaleProvider>
  </Provider>
);

export default Root;
