import React from "react";
import "./InfoIssue.css";

export function InfoIssue(props) {
  return (
    <div>
      <span className="info">
        #{props.number} opened on {props.date} by {props.user}
      </span>
    </div>
  );
}
