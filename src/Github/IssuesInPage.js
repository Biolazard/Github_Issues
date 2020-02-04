import React from "react";
import { Issue } from "./Issue/Issue";
import "./IssuesInPage.css";

export function IssuesInPage(props) {
  return (
    <div className="box-issues">
      {props.data.map((data, indexData) => (
        <Issue
          key={indexData}
          data={data}
          handleClick={n => props.handleClick(n)}
        />
      ))}
    </div>
  );
}
