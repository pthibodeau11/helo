import React from "react";
import { Switch, Route } from "react-router-dom";
import Profile from "./components/Profile/profile";

export default (
  <Switch>
    <Route component={Profile} path="/profile" />

    <Route render={() => <h1>404 - Not Found</h1>} />
  </Switch>
);
