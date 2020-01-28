import React from "react";
import "./App.css";
import { ContainerIssues } from "./Github/ContainerIssues";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Route exact path="/">
          {/* <Home /> */}
        </Route>
        <Route path="/about">{/* <About /> */}</Route>
        <Route path="/dashboard">{/* <Dashboard /> */}</Route>
      </Router>
      <ContainerIssues />
    </div>
  );
}

export default App;
