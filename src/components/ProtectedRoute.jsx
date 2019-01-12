import React from "react";
import { Route, Redirect } from "react-router-dom";
import authService from "../services/auth";

const ProtectedRoute = ({ component: Component, ...route }) => (
  <Route
    {...route}
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

export default ProtectedRoute;
