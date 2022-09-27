import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import CalcTotalCost from "../components/CalcTotalCost";
import CartItems from "../components/CartItems";
import styles from "../css/category.module.css";
class CartList extends Component {
  render() {
    return this.props.toggle ? (
      this.props.cartProds.length === 0 ? (
        <p>Empty cart</p>
      ) : (
        <div className={styles.cartList_dropdown}>
          <div>
            <h4 className={styles.cartList_title}>
              My Bag ,
              <span className={styles.cart_items_count}>
                {this.props.ctr} items
              </span>
            </h4>
          </div>
          <CartItems />
          <div className={styles.total_cost}>
            <h4>Total</h4>
            <CalcTotalCost />
          </div>

          <div className={styles.dropdwon_btns}>
            <Link
              to="/CartPage"
              className={`${styles.viewBag_btn} ${styles.bag_btn}`}
            >
              VIEW BAG
            </Link>
            <Link
              to="/CartPage"
              className={`${styles.checkout_btn} ${styles.bag_btn}`}
            >
              CHECKOUT
            </Link>
          </div>
        </div>
      )
    ) : (
      ""
    );
  }
}
const mapStateToProps = (state) => {
  return {
    cartProds: state.AddToCart.cartList,
    currency: state.Changecurrency.currentCurrency,
  };
};

export default connect(mapStateToProps)(CartList);
