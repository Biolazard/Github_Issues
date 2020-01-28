import React from "react";
import "./Label.css";
import classnames from "classnames";

export function Label(props) {
  const name = props.data.name;
  const css = classnames({
    orange: name === "issue: bug report",
    yellow: name === "issue: proposal",
    red: name === "needs triage" || name === "stale",
    violet: name === "issue: needs investigation",
    purple: name === "priority: low (ignored issue template)",
    green: name === "issue: question"
  });
  const classCss = css ? css : "default";

  return (
    <div key={props.data.id} className="label">
      <div className={classCss}>
        <a href={props.data.url}>{name}</a>
      </div>
    </div>
  );
}
