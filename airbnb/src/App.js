import React from "react";
import { Link, Route, Switch } from "react-router";
import LoginForm from "./components/LoginForm";
import Navigation from "./components/Navigation";
import ProtectedRoute from "./components/ProtectedRoute";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route exact path="/" render={() => <LoginForm />} />
        <Route exact path="/about" render={() => <h1>about</h1>} />
        <ProtectedRoute
          exact
          path="/listings"
          render={() => <h1>Listings</h1>}
        />
      </Switch>
    </div>
  );
}

export default App;
