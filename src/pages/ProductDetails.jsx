import React, { Component } from "react";
import { GetProduct } from "../utils/Category";
import styles from "../css/category.module.css";
import { connect } from "react-redux";
import ATTRIBUTES from "../constants/attributes";
import Alert from "../components/Alert";
export class ProductDetails extends Component {
  constructor(props) {
    super();
    this.state = {
      id: props.match.params.id,
      product: {},
      showImg: null,
    };
  }
  getProductDetails(id) {
    this.props.client
      .query({
        query: GetProduct(id),
      })
      .then((result) => {
        this.setState({
          ...this.state,
          product: {
            ...result.data.product,
            attributes: result.data.product.attributes.map((attr, i) =>
              attr
                ? {
                    ...attr,
                    selected:
                      attr.items[0].id ||
                      attr.items.map((i) => i.id === attr.selected),
                  }
                : attr
            ),
            itemCount: 0,
          },
          showImg: result.data.product.gallery[0],
        });
        console.log(this.state.product, "state prod");
      });
  }
  openImg(e) {
    this.setState({ showImg: e.target.src });
  }

  updateSizeAttr = (itemId, attrId) => {
    this.setState({
      ...this.state,
      product: {
        ...this.state.product,
        attributes: this.state.product.attributes.map((attr, i) =>
          attr && attr.id === attrId ? { ...attr, selected: itemId } : attr
        ),
      },
    });
  };
  addToCartList() {
    const filteredProducts = this.props.cartProds.filter(
      (el) =>
        el.id === this.state.product.id &&
        el.attributes.every((selec, i) => {
          return selec.selected === this.state.product.attributes[i].selected;
        })
    );
    if (filteredProducts.length === 0) {
      this.props.IncrementCartCount();
      this.props.AddToCart({ ...this.state.product, itemCount: 1 });
    }
  }
  componentDidMount() {
    this.getProductDetails(this.props.match.params.id);
  }
  render() {
    return (
      <div className={`${styles.product_details} container`}>
        <div className={styles.gallery}>
          <div className={styles.gallery_imgs}>
            {this.state.product?.gallery?.map(
              (img, index) =>
                index > 0 && (
                  <div key={index} className={styles.gallery_singale_img}>
                    <img src={img} alt="" onClick={this.openImg.bind(this)} />
                  </div>
                )
            )}
          </div>

          <div className={styles.product_details_img}>
            <img src={this.state.showImg} alt="" />
          </div>
        </div>

        <div className={styles.product_details_info}>
          <p className={styles.product_name}>{this.state.product.name}</p>
          <p className={styles.product_brand}>{this.state.product.brand}</p>
          <div>
            {this.state.product.attributes?.map((attr, index) => (
              <div key={index} className={styles.product_details_sizes}>
                {attr.id === ATTRIBUTES.Size ? (
                  <div className={styles.sizes_box}>
                    <h4>SIZES:</h4>
                    {attr.items?.map((size, index) => (
                      <React.Fragment key={index}>
                        <label
                          className={`${styles.sizes_button}
                      ${size.id === attr?.selected ? styles.active_size : ""}
                      `}
                          htmlFor={size.id}
                        >
                          {size.value}
                        </label>
                        <input
                          type="radio"
                          value={size.value}
                          id={size.id}
                          name="SizeSelector"
                          onChange={(e) => {
                            this.updateSizeAttr(size.id, attr.id);
                          }}
                          style={{ display: "none" }}
                        />
                      </React.Fragment>
                    ))}
                  </div>
                ) : attr.id === ATTRIBUTES.Color ? (
                  <div className={styles.colors_box}>
                    <h4>COLOR:</h4>
                    {attr.items?.map((color, index) => (
                      <React.Fragment key={index}>
                        <label
                          htmlFor={color.id}
                          className={`${styles.color_input}
                          ${
                            color.id === attr?.selected
                              ? styles.active_color
                              : ""
                          }
                          `}
                          key={index}
                          style={{ backgroundColor: `${color.value}` }}
                        ></label>
                        <input
                          type="radio"
                          value={color.value}
                          id={color.id}
                          name="colorSelector"
                          onChange={(e) => {
                            this.updateSizeAttr(color.id, attr.id);
                          }}
                          style={{ display: "none" }}
                        />
                      </React.Fragment>
                    ))}
                  </div>
                ) : attr.id === ATTRIBUTES.Capacity ? (
                  <div className={styles.capacity_box}>
                    <h4>Capacity:</h4>
                    {attr.items?.map((capacity, index) => (
                      <React.Fragment key={index}>
                        <label
                          className={`${styles.capacity_button}
                      ${
                        capacity.id === attr?.selected ? styles.active_size : ""
                      }
                      `}
                          htmlFor={capacity.id}
                        >
                          {capacity.value}
                        </label>
                        <input
                          type="radio"
                          value={capacity.value}
                          id={capacity.id}
                          name="capacitySelector"
                          onChange={(e) => {
                            this.updateSizeAttr(capacity.id, attr.id);
                          }}
                          style={{ display: "none" }}
                        />
                      </React.Fragment>
                    ))}
                  </div>
                ) : attr.id === ATTRIBUTES.WithPorts ? (
                  <div className={styles.ports_box}>
                    <h4>Ports:</h4>
                    {attr.items?.map((ports, index) => (
                      <React.Fragment key={index}>
                        <label
                          className={`${styles.ports_button}
                          ${
                            ports.id === attr?.selected
                              ? styles.active_size
                              : ""
                          }
                          `}
                          htmlFor={`ports_${ports.id}`}
                        >
                          {ports.value}
                        </label>
                        <input
                          type="radio"
                          value={ports.value}
                          id={`ports_${ports.id}`}
                          name="portsSelector"
                          onChange={(e) => {
                            this.updateSizeAttr(ports.id, attr.id);
                          }}
                          style={{ display: "none" }}
                        />
                      </React.Fragment>
                    ))}
                  </div>
                ) : attr.id === ATTRIBUTES.TouchKeyboard ? (
                  <div className={styles.keyboard_box}>
                    <h4>Touch keyboard:</h4>
                    {attr.items?.map((keyboard, index) => (
                      <React.Fragment key={index}>
                        <label
                          className={`${styles.capacity_button}
                          ${
                            keyboard.id === attr?.selected
                              ? styles.active_size
                              : ""
                          }
                          `}
                          htmlFor={`keyboard_${keyboard.id}`}
                        >
                          {keyboard.value}
                        </label>
                        <input
                          type="radio"
                          value={keyboard.value}
                          id={`keyboard_${keyboard.id}`}
                          name="keyboardSelector"
                          onChange={(e) => {
                            this.updateSizeAttr(keyboard.id, attr.id);
                          }}
                          style={{ display: "none" }}
                        />
                      </React.Fragment>
                    ))}
                  </div>
                ) : (
                  ""
                )}
              </div>
            ))}
          </div>
          <h4>PRICE:</h4>
          <p>
            {this.state.product.prices?.map((curr, index) =>
              curr.currency.label === this.props.currency.label ? (
                <span key={index}>
                  {curr.currency.symbol}
                  {curr.amount}
                </span>
              ) : (
                ""
              )
            )}
          </p>
          {this.state.product.inStock ? (
            <button
              className={styles.add_to_cart_btn}
              onClick={this.addToCartList.bind(this)}
            >
              ADD TO CART
            </button>
          ) : (
            <Alert>Out Of Stock</Alert>
          )}

          <div
            className={styles.product_details_des}
            dangerouslySetInnerHTML={{ __html: this.state.product.description }}
          ></div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    ctr: state.IncrementCartCount.cartCounter,
    cartProds: state.AddToCart.cartList,
    currency: state.Changecurrency.currentCurrency,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    IncrementCartCount: () => dispatch({ type: "INCREMENT_CART_COUNTER" }),
    AddToCart: (cartProd) =>
      dispatch({ type: "ADD_TO_CART", payload: { cartList: cartProd } }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
