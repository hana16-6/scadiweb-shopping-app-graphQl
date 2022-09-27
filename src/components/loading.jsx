import React, { Component } from "react";

export default class Loading extends Component {
  componentDidMount() {
    document.body.classList.add("load");
  }
  componentWillUnmount() {
    document.body.classList.remove("load");
  }
  render() {
    return (
      <>
        <div className="loading-overlay"></div>
        <div className="loading-container" id="js-loading-container">
          <div className="loading-divider" aria-hidden="true"></div>
          <p className="loading-text" aria-label="Loading">
            <span className="letter" aria-hidden="true">
              L
            </span>
            <span className="letter" aria-hidden="true">
              o
            </span>
            <span className="letter" aria-hidden="true">
              a
            </span>
            <span className="letter" aria-hidden="true">
              d
            </span>
            <span className="letter" aria-hidden="true">
              i
            </span>
            <span className="letter" aria-hidden="true">
              n
            </span>
            <span className="letter" aria-hidden="true">
              g
            </span>
          </p>
        </div>
      </>
    );
  }
}
