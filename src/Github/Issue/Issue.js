import React from "react";
import "./Issue.css";
import { StatusIssues } from "./StatusIssue";
import { InfoIssue } from "./InfoIssue";
import { DescriptionIssue } from "./DescriptionIssue";

export function Issue(props) {
  const day = new Date(props.data.created_at).getDate().toString();
  const month = new Date(props.data.created_at).toLocaleString("default", {
    month: "long"
  });
  const year = new Date(props.data.created_at).getFullYear();
  const date = `${day} ${month} ${year}`;

  return (
    <div className="flex-all-items">
      <StatusIssues />
      <div>
        <DescriptionIssue
          link={props.data.html_url}
          description={props.data.title}
          labels={props.data.labels}
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

