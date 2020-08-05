import React from "react";
import "./App.css";
import { NavigationBar } from "./components/NavigationBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AboutUs } from "./components/AboutUs";
import { Github } from "./components/Github";
import { HomePage } from "./components/HomePage";

function App() {
  return (
    <Router>
      <div className="App">
        <NavigationBar />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/about-us" component={AboutUs} />
          <Route path="/github" component={Github} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
