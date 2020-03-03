import React from "react";
import { Link, Route, Switch } from "react-router";
import LoginForm from "./components/LoginForm";
import Navigation from "./components/Navigation";
import ProtectedRoute from "./components/ProtectedRoute";
import "./App.scss";
import ListingForm from "./components/ListingForm"

function App() {
  return (
<div>
      <Navigation />
      <Switch>
        <Route exact path="/" render={() => <LoginForm />} />
        <Route exact path="/about" render={() => <h1>about</h1>} />
        <Route exact path="/listings" component={ListingForm} render={() =><h1>Listings</h1>} />
      </Switch>
    </div>
  );
}

export default App;
