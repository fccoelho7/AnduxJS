import React from "react";
import { Route, Redirect } from "react-router-dom";
import authService from "../services/auth";

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      authService.isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/auth/login",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

const Routes = ({ routes }) =>
  routes.map((route, i) =>
    route.protected ? (
      <ProtectedRoute key={i} exact {...route} />
    ) : (
      <Route key={i} exact {...route} />
    )
  );

export default Routes;
