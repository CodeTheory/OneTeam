import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../Home";
import Users from "../Users/Users";
import NavBar from "../NavBar";
import AuthProp from "../AuthProp";

const Routes = () => {
  return (
    <Router>
      <NavBar />
      <Route exact path="/">
        <Home />
      </Route>
      <AuthProp>
        <Route exact path="/Users">
          <Users />
        </Route>
      </AuthProp>
      <div className="app-tings">OneTeam</div>
    </Router>
  );
};

export default Routes;
