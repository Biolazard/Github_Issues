import React from "react";
import "./ContainerIssues.css";
import { Pages } from "./Pages";
import { IssuesInPage } from "./IssuesInPage";
import { getData, getInfoAboutRepo } from "./HttpRequest";

export class ContainerIssues extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      infoRepository: {},
      currentPage: 1
    };
  }

  componentDidMount() {
    getData().then(response => this.setState({ data: response.data }));
    getInfoAboutRepo().then(response =>
      this.setState({ infoRepository: response.data })
    );
  }

  getNewPage(n) {
    console.log("ENTRATO");
    getData(n).then(response => this.setState({ data: response.data }));
  }

  render() {
    console.log(this.state.data);
    return (
      <div>
        <div className="box-container">
          <div>
            <IssuesInPage data={this.state.data} />
          </div>
          <div>
            <Pages
              count={this.state.infoRepository.open_issues_count}
              handleClick={n => this.getNewPage(n)}
            />
          </div>
        </div>
      </div>
    );
  }
}
