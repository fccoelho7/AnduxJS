import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { LocaleProvider } from "antd";
import enUS from "antd/lib/locale-provider/en_US";
import Routes from "../components/Routes";
import routes from "./routes";

const Root = ({ store }) => (
  <Provider store={store}>
    <LocaleProvider locale={enUS}>
      <Router>
        <Switch>
          <Routes routes={routes} />
        </Switch>
      </Router>
    </LocaleProvider>
  </Provider>
);

export default Root;
