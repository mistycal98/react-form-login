import React from "react";
import { Switch, Route } from "react-router-dom";

import Navigation from "../components/Navigation";
import About from "../pages/About";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import Login from "../pages/Login";

export default function Router() {
  return (
    <>
      <Navigation />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/about" component={About} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </>
  );
}
