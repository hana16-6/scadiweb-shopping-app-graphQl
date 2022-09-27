import React, { Component } from "react";
import navIcon from "../assets/a-logo.png";
import Cart from "../assets/Empty Cart.svg";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

import {
  Title,
  StyleUl,
  StyNav,
  ImgContainer,
  IconsDivParent,
  IconsDiv,
  CartIcon,
} from "../css/nav";
import styles from "../css/category.module.css";
import CartListDropdown from "../components/CartListDropdown";
import CurrencyList from "../components/CurrencyList";
class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      activeBtn: "",
      cartListToggle: false,
    };
    this.dropdownRef = React.createRef(null);
    this.cartBtn = React.createRef(null);
  }
  componentDidMount() {
    document.addEventListener("click", this.onClickOutside);
  }
  componentWillUnmount() {
    document.removeEventListener("click", this.onClickOutside);
  }
  toggleActiveBtn(e) {
    this.setState({ activeBtn: e.target.innerHTML });
  }
  openCartList() {
    this.setState({ cartListToggle: !this.state.cartListToggle });
  }
  onClickOutside = (evt) => {
    const path = evt.path || (evt.composedPath && evt.composedPath());
    if (
      !path.includes(this.dropdownRef.current) &&
      !path.includes(this.cartBtn.current)
    ) {
      this.setState({ cartListToggle: false });
    }
  };
  render() {
    return (
      <>
        <StyNav className="container">
          <StyleUl>
            <Title>
              <NavLink
                className="link"
                to="/all"
                onClick={this.toggleActiveBtn.bind(this)}
              >
                all
              </NavLink>
            </Title>
            <Title>
              <NavLink
                className="link"
                to="/clothes"
                onClick={this.toggleActiveBtn.bind(this)}
              >
                clothes
              </NavLink>
            </Title>
            <Title>
              <NavLink
                className="link"
                to="/tech"
                onClick={this.toggleActiveBtn.bind(this)}
              >
                tech
              </NavLink>
            </Title>
          </StyleUl>
          <ImgContainer>
            <img src={navIcon} alt="" />
          </ImgContainer>
          <IconsDivParent>
            <IconsDiv>
              <CurrencyList />
            </IconsDiv>
            <IconsDiv>
              <CartIcon>{this.props.ctr}</CartIcon>
              <img
                ref={this.cartBtn}
                src={Cart}
                alt=""
                onClick={this.openCartList.bind(this)}
              />
            </IconsDiv>
          </IconsDivParent>
        </StyNav>

        <div ref={this.dropdownRef} className={`${styles.cartList} container`}>
          <CartListDropdown toggle={this.state.cartListToggle} />
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    ctr: state.IncrementCartCount.cartCounter,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: () => dispatch({ type: "INCREMENT_CART_COUNTER" }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
