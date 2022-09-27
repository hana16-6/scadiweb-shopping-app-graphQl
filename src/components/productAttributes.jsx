import React, { Component } from "react";
import styles from "../css/category.module.css";
import { connect } from "react-redux";
import ATTRIBUTES from "../constants/attributes";
class ProductAttributes extends Component {
  render() {
    return (
      <div>
        {this.props.product.attributes?.map((attr, index) => (
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
                      ${color.id === attr?.selected ? styles.active_color : ""}
                      `}
                      key={index}
                      style={{ backgroundColor: `${color.value}` }}
                    ></label>
                    <input
                      type="radio"
                      value={color.value}
                      id={color.id}
                      name="colorSelector"
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
                      style={{ display: "none" }}
                    />
                  </React.Fragment>
                ))}
              </div>
            ) : attr.id === ATTRIBUTES.TouchKeyboard ? (
              <div className={styles.keyboard_box}>
                <h4>Touch keyboard::</h4>
                {attr.items?.map((keyboard, index) => (
                  <React.Fragment key={index}>
                    <label
                      className={`${styles.ports_button}
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
    );
  }
}
const mapStateToProps = (state) => {
  return {
    cartProds: state.AddToCart.cartList,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductAttributes);
