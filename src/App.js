import React from "react";
import "./App.css";
import { ContainerIssues } from "./Github/ContainerIssues";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const url = new URL(window.location.href);
  const page = url.searchParams.get("page");
  return (
    <div>
      <Router>
        <Route exact path="/issue">
          <ContainerIssues page={page} />
        </Route>
      </Router>
    </div>
  );
}

export default App;
