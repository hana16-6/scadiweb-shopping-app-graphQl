import React, { Component } from "react";
import styles from "../css/category.module.css";
class Alert extends Component {
  render() {
    return (
      <div className={styles.alert} role="alert">
        <div className={this.props.outerClass}>
          {this.props.children || <>A simple alert</>}
        </div>
      </div>
    );
  }
}

export default Alert;
