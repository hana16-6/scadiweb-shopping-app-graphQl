import React, { Component } from "react";
import { connect } from "react-redux";
import ProductAttributes from "../components/productAttributes";
import styles from "../css/category.module.css";
import ImgsGallery from "./ImgsGallery";
class CartItems extends Component {
  constructor(props) {
    super(props);

    this.state = {
      test: 0,
    };
  }
  IncrementCart = (prod) => {
    this.props.IncrementItemCount(prod);
    this.props.IncrementCartCount();
  };
  decrementCart = (prod) => {
    console.log(prod.itemCount, "itemCount");

    if (this.props.ctr > 1 && prod.itemCount > 1) {
      this.props.decrementItemCount(prod);
      this.props.decrementCartCount();
    }
  };
  deleteProduct = (prod) => {
    console.log(prod);
    const filteredProducts = this.props.cartProducts.filter(
      (el) =>
        (el.id === prod.id &&
          !el.attributes.every((selec, i) => {
            return selec.selected === prod.attributes[i].selected;
          })) ||
        el.id !== prod.id
    );
    this.props.deleteProd(filteredProducts);
    // this.props.decrementCartCount();
    this.props.decrementCartCounter(prod.itemCount);
    console.log(prod.itemCount, "plplp");
  };
  render() {
    return (
      <div className={styles.cartList_page}>
        {this.props.cartProducts.map((prod, i) => (
          <div key={i} className={styles.cartListItem}>
            <div className={styles.cartList_info}>
              <h5>{prod.name}</h5>
              <p>{prod.brand}</p>
              <p>
                {prod.prices.map((curr, index) =>
                  curr.currency.label === this.props.currency.label ? (
                    <span key={index}>
                      {curr.currency.symbol}
                      {curr.amount * prod.itemCount}
                    </span>
                  ) : (
                    ""
                  )
                )}
              </p>
              <ProductAttributes product={prod} />
              {this.props.cartPage ? (
                <button
                  className={styles.deleteBtn}
                  onClick={() => this.deleteProduct(prod)}
                >
                  DELETE
                </button>
              ) : (
                ""
              )}
            </div>
            <div className={styles.cartList_img_info}>
              <div className={styles.cartList_items_count}>
                <span
                  className={styles.plus_icon}
                  onClick={() => this.IncrementCart(prod)}
                >
                  +
                </span>
                <span>{prod.itemCount}</span>
                <span
                  className={styles.minus_icon}
                  onClick={() => this.decrementCart(prod)}
                >
                  -
                </span>
              </div>
              {this.props.cartPage && prod.gallery.length > 1 ? (
                <ImgsGallery product={prod} />
              ) : (
                <div className={styles.cartList_img}>
                  <img src={prod.gallery[0]} alt="" />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    ctr: state.IncrementCartCount.cartCounter,
    cartProducts: state.AddToCart.cartList,
    currency: state.Changecurrency.currentCurrency,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    decrementCartCount: () => dispatch({ type: "DECREMENT_CART_COUNTER" }),
    IncrementCartCount: () => dispatch({ type: "INCREMENT_CART_COUNTER" }),
    IncrementItemCount: (product) =>
      dispatch({
        type: "INCREMENT_ITEM_COUNT",
        payload: { cartProd: product },
      }),
    decrementItemCount: (product) =>
      dispatch({
        type: "DECREMENT_ITEM_COUNT",
        payload: { cartProd: product },
      }),
    deleteProd: (arr) =>
      dispatch({
        type: "DELETE_FROM_CART",
        payload: { filterdProducts: arr },
      }),
    decrementCartCounter: (count) =>
      dispatch({
        type: "INCREMENT_COUNTER_FROM_CART",
        payload: { itemCounter: count },
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartItems);
