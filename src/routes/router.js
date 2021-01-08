import React from "react";
import { Switch, Route } from "react-router-dom";

import Navigation from "../components/Navigation";
import About from "../pages/About";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Footer from "../components/Footer";
import Register from "../pages/Register";

export default function Router() {
	return (
		<>
			<Navigation />
			<Switch className="body">
				<Route path="/" exact component={Home} />
				<Route path="/register" component={Register} />
				<Route path="/login" exact component={Login} />
				<Route path="/about" component={About} />
				<Route path="/dashboard" component={Dashboard} />
			</Switch>
			<Footer />
		</>
	);
}
