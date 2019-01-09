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
            pathname: "/login",
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
      <ProtectedRoute key={i} {...route} />
    ) : (
      <Route key={i} {...route} />
    )
  );

export default Routes;
