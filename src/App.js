import React from "react";
import "./App.css";
import { ContainerIssues } from "./Github/ContainerIssues";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { OpenIssue } from "./Github/Issue/OpenIssue";

function App() {
  const url = new URL(window.location.href);
  const page = url.searchParams.get("page");
  const number = url.searchParams.get("number");
  let issue = {};

  function getDataIssue(data) {
    issue = data;
    issue.isAvailable = true;
  }

  if (!issue.number) {
    issue.number = number;
    issue.isAvailable = false;
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/issue"
          component={props => (
            <ContainerIssues
              page={page}
              {...props}
              handleClick={n => getDataIssue(n)}
            />
          )}
        />
        <Route
          path={`/issue/get-issue`}
          component={props => <OpenIssue data={issue} {...props} />}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
