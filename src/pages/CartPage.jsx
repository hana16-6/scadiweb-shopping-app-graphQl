import React, { Component } from "react";
import CartItems from "../components/CartItems";
import styles from "../css/category.module.css";
import { connect } from "react-redux";
import CalcTotalCost from "../components/CalcTotalCost";
class CartPage extends Component {
  render() {
    return (
      <div className={`${styles.cartPage_details} container`}>
        <h3>CART</h3>
        <div>
          <CartItems cartPage={true} />
        </div>
        {this.props.cartProds.length > 0 ? (
          <div className={styles.cartPage_tax}>
            <p>
              <span>Tax 21% :</span> $42.00
            </p>
            <p>
              <span>Quantity :</span> {this.props.ctr}
            </p>
            <div className={styles.total_cart_page}>
              <span>Total :</span>
              <CalcTotalCost />
            </div>
            <button className={styles.add_to_cart_btn}>ORDER</button>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    ctr: state.IncrementCartCount.cartCounter,
    cartProds: state.AddToCart.cartList,
  };
};
export default connect(mapStateToProps)(CartPage);
