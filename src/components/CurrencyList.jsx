import React, { Component } from "react";
import styles from "../css/category.module.css";
import arrowUp from "../assets/arrowUp.svg";
import arrowDown from "../assets/arrowDown.svg";
import { CURRENCY } from "../constants/currency";
import { connect } from "react-redux";
class CurrencyList extends Component {
  constructor() {
    super();
    this.state = {
      openMenu: false,
    };
    this.dropdownRef = React.createRef(null);
  }

  componentDidMount() {
    document.addEventListener("click", this.onClickOutside);
  }
  componentWillUnmount() {
    document.removeEventListener("click", this.onClickOutside);
  }
  openPricesMenu = () => {
    this.setState({ openMenu: !this.state.openMenu });
  };
  ToggleArrow = () => {
    return (
      <span className={styles.arrowDropDown}>
        {this.state.openMenu ? (
          <img src={arrowUp} alt="" />
        ) : (
          <img src={arrowDown} alt="" />
        )}
      </span>
    );
  };
  selectCurrency = (curr) => {
    this.props.Changecurrency(curr);
  };
  onClickOutside = (evt) => {
    const path = evt.path || (evt.composedPath && evt.composedPath());
    if (!path.includes(this.dropdownRef.current)) {
      this.setState({ openMenu: false });
    }
  };
  render() {
    return (
      <div
        className={styles.select_wrapper}
        ref={this.dropdownRef}
        onClick={this.openPricesMenu}
      >
        <div>
          <span className={styles.selected_curr}>
            {this.props.currentCurr.symbol}
            {this.props.currentCurr.label}
          </span>
          <this.ToggleArrow />
        </div>
        {this.state.openMenu ? (
          <ul className={styles.selectList}>
            {CURRENCY.map((curr, index) => (
              <li key={index} onClick={() => this.selectCurrency(curr)}>
                {curr.symbol}
                {curr.label}
              </li>
            ))}
          </ul>
        ) : (
          ""
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    currentCurr: state.Changecurrency.currentCurrency,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    Changecurrency: (currency) =>
      dispatch({
        type: "CHANGE_CURRENCY",
        payload: { currentCurrency: currency },
      }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CurrencyList);
