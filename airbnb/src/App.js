import React, { useState } from "react";
import { Route, Switch, useLocation } from "react-router";
import { LegitContext } from "./contexts/LegitContext";
import LoginForm from "./components/LoginForm";
import ListingForm from "./components/ListingForm";
import Navigation from "./components/Navigation";
import ProtectedRoute from "./components/ProtectedRoute";
import "./App.scss";
import { AuthProvider } from "./utils/AuthenticationPractice";

function App() {
  let location = useLocation();
  const [auth, setAuth] = useState("false");
  return (
    <LegitContext.Provider value={{ auth, setAuth }}>
      <div className="App">
        <Navigation location={location} />
        <Switch>
          <Route exact path="/" component={LoginForm} />
          <ProtectedRoute exact path="/listings" component={ListingForm} />
        </Switch>
      </div>
    </LegitContext.Provider>
  );
}

export default App;
