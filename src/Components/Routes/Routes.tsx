import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../Home";
import Users from "../Users/Users";
import NavBar from "../NavBar";
import PrivateRoute from "../PrivateRoute";

const Routes = () => {
  return (
    <Router>
      <NavBar />
      <Route exact path="/">
        <Home />
      </Route>
      <PrivateRoute path="/users">
        <Users />
      </PrivateRoute>
      <div className="app-tings">OneTeam</div>
    </Router>
  );
};

export default Routes;
