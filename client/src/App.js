import React from "react";
import "./App.css";
import { NavigationBar } from "./components/NavigationBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AboutUs } from "./components/AboutUs";
import { Github } from "./components/Github";
import { HomePage } from "./components/HomePage";
import { LogIn } from "./components/LogIn";
import { SignUp } from "./components/SignUp";
import { Checkout } from "./components/Checkout";

function App() {
  return (
    <Router>
      <div className="App">
        <NavigationBar />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/about-us" component={AboutUs} />
          <Route path="/github" component={Github} />
          <Route path="/login" component={LogIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/checkout" component={Checkout} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
