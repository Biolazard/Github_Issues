import React from "react";
import "./Issue.css";
import { StatusIssues } from "./StatusIssue";
import { InfoIssue } from "./InfoIssue";
import { DescriptionIssue } from "./DescriptionIssue";

export function Issue(props) {
  let date = new Date(props.data.created_at);
  const day = date.getDate().toString();
  const month = date.toLocaleString("default", {
    month: "long"
  });
  const year = date.getFullYear();
  date = String(`${day} ${month} ${year}`);

  return (
    <div className="flex-all-items">
      <StatusIssues state={props.data.state} />
      <div>
        <DescriptionIssue
          link={props.data.html_url}
          description={props.data.title}
          labels={props.data.labels}
          data={props.data}
          onClick={n => props.handleClick(n)}
        />
        <InfoIssue
          number={props.data.number}
          date={date}
          user={props.data.user.login}
        />
      </div>
    </div>
  );
}
