import React, { useContext } from "react";
import { Route, Redirect } from "react-router";
import { LegitContext } from "../contexts/LegitContext";

const ProtectedRoute = ({ component: Component, ...stuff }) => {
  const { auth } = useContext(LegitContext);
  return (
    <Route
      {...stuff}
      render={props =>
        auth ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default ProtectedRoute;
