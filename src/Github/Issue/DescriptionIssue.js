import React from "react";
import { Label } from "./Label";

export function DescriptionIssue(props) {
  return (
    <div className="flex-row">
      <div className="text-row">
        <a href={props.link}> {props.description}</a>
      </div>
      <span className="label-flex-row">
        {props.labels.map(label => (
          <Label key={label.id} data={label} />
        ))}
      </span>
    </div>
  );
}
