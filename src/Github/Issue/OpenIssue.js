import React from "react";
import { getIssueComments, getBodyIssue } from "../HttpRequest";

export class OpenIssue extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      comments: []
    };

    if (props.data.isAvailable) {
      getIssueComments(props.data.number).then(data => {
        console.log(data);
        this.setState({
          title: props.data.body,
          comments: data
        });
      });
    } else {
      getBodyIssue(props.data.number).then(data =>
        this.setState({ title: data.body })
      );
      getIssueComments(props.data.number).then(data =>
        this.setState({ comments: data })
      );
    }
  }

  render() {
    return (
      <div>
        <p>{this.state.title}</p>
        <ul>
          {this.state.comments.map(comment => (
            <li key={comment.id}> {comment.body}</li>
          ))}
        </ul>

        <button onClick={() => this.props.history.push("/issue")}> Back</button>
      </div>
    );
  }
}
