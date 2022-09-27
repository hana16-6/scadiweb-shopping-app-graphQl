import React, { Component } from "react";
import { connect } from "react-redux";
class CalcTotalCost extends Component {
  exchangePrice(prices) {
    const selectedPrice = prices.find(
      (value) => value.currency.label === this.props.currency.label
    );
    return selectedPrice.amount;
  }
  CalcTotalPrice = () => {
    return this.props.cartProds
      .reduce(
        (prev, curr) => prev + curr.itemCount * this.exchangePrice(curr.prices),
        0
      )
      .toFixed(2);
  };
  render() {
    return (
      <p>
        <span> {this.props.currency.symbol}</span>
        <this.CalcTotalPrice />
      </p>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    cartProds: state.AddToCart.cartList,
    currency: state.Changecurrency.currentCurrency,
  };
};
export default connect(mapStateToProps)(CalcTotalCost);
