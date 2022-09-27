import React, { Component } from "react";
import styles from "../css/category.module.css";
export default class ImgsGallery extends Component {
  state = {
    showImg: this.props.product.gallery[0],
    currentImg: 0,
  };
  swapNextImg = () => {
    this.setState({ currentImg: this.state.currentImg + 1 });
    this.setState({
      showImg: this.props.product.gallery[this.state.currentImg],
    });
    if (this.state.currentImg >= this.props.product.gallery.length - 1) {
      this.setState({ currentImg: 0 });
    }
  };
  swapPrevImg = () => {
    this.setState({ currentImg: this.state.currentImg - 1 });
    this.setState({
      showImg: this.props.product.gallery[this.state.currentImg],
    });
    if (this.state.currentImg <= 0) {
      this.setState({ currentImg: this.props.product.gallery.length - 1 });
    }
  };
  render() {
    return (
      <div className={styles.cartList_img}>
        <img src={this.props.product.gallery[this.state.currentImg]} alt="" />
        <div className={styles.img_controls}>
          <span className={styles.prevBtn} onClick={this.swapPrevImg}>
            &lt;
          </span>
          <span className={styles.nextBtn} onClick={this.swapNextImg}>
            &gt;
          </span>
        </div>
      </div>
    );
  }
}
