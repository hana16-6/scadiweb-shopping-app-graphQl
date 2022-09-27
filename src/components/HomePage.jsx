import React, { Component } from "react";
import shopImg from "../assets/home.jpeg";
import styles from "../css/category.module.css";
import { Link } from "react-router-dom";
class HomePage extends Component {
  render() {
    return (
      <div className="container">
        <div className={styles.home_page_container}>
          <div className={styles.homeImg}>
            <img src={shopImg} alt="" />
          </div>
          <div className={styles.home_des}>
            <h2>ScandiWeb shop</h2>
            <p>Where you can find all your needs online</p>
            <div className={styles.shop_btn}>
              <Link
                className={`${styles.add_to_cart_btn} ${styles.home_link}`}
                to="/all"
              >
                GO TO SHOP
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default HomePage;
