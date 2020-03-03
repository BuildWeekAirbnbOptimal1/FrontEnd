import React from "react";
import { Route, Redirect } from "react-router";

const ProtectedRoute = ({ component: Component, ...stuff }) => (
  <Route
    {...stuff}
    render={props =>
      localStorage.getItem("token") ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

export default ProtectedRoute;
