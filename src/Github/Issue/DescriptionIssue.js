import React from "react";
import { Label } from "./Label";

export function DescriptionIssue(props) {
  return (
    <div className="flex-row">
      <div className="text-row" onClick={() => props.onClick(props.data)}>
        <span >{props.description}</span>
      </div>
      <span className="label-flex-row">
        {props.labels.map(label => (
          <Label key={label.id} data={label} />
        ))}
      </span>
    </div>
  );
}
