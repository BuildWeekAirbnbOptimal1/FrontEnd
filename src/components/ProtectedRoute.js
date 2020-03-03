import React, { useContext } from "react";
import { Route, Redirect } from "react-router";
import { LegitContext } from "../contexts/LegitContext";

const ProtectedRoute = ({ component: Component, ...stuff }) => {
  const { auth } = useContext(LegitContext);
  return (
    <Route
      {...stuff}
      render={props =>
        localStorage.getItem("token") ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};

export default ProtectedRoute;
