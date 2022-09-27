import React, { Component } from "react";
import CartList from "../layout/CartList";

export default class CartListDropdown extends Component {
  render() {
    return (
      <div>
        <CartList toggle={this.props.toggle} />
      </div>
    );
  }
}
