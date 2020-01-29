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
      page: props.page ? props.page : 1
    };
  }

  componentDidMount() {
    getData(this.state.page).then(response =>
      this.setState({ data: response.data })
    );
    getInfoAboutRepo().then(response =>
      this.setState({ infoRepository: response.data })
    );
  }

  setNewUrl(n) {
    let url = new URL(window.location.href);
    url.searchParams.set("page", n);
    document.location.href = url;
  }

  render() {
    return (
      <div>
        <div className="box-container">
          <div>
            <IssuesInPage data={this.state.data} />
          </div>
          <div>
            <Pages
              currentPage={this.state.page}
              count={this.state.infoRepository.open_issues_count}
              handleClick={n => this.setNewUrl(n)}
            />
          </div>
        </div>
      </div>
    );
  }
}
