import React, { Component } from "react";
import { GetCategory } from "../utils/Category";
import styles from '../css/category.module.css'
import cart_icon from '../images/Circle Icon.svg'
import { connect } from "react-redux";



class TechCategory extends Component {
    constructor(props) {
        super();
        this.state = {
            id: props.match.params.id,
            products: [],
            name: ""
        }
    }
    getData(id) {
        this.setState({
            id: id,
        });
        this.props.client.query({
            query: GetCategory(id),
        }).then((result) => {

            if (result) {
                this.setState({
                    name: result.data.category.name,
                    products: result.data.category.products
                });
                this.props.GetAllProducts(result.data.category.products)
            }
        });
    }
    AddToCart(product) {
        if (product.attributes.length === 0) {
            this.props.IncrementCartCount()
            this.props.AddToCart({ ...product, itemCount: 1 })
        }

    }
    componentDidMount() {
        this.getData(this.props.match.params.id)

    }
    componentDidUpdate() {
        if (this.state.id !== this.props.match.params.id) {
            this.getData(this.props.match.params.id);
        }
    }
    getProductDetails(id, category) {
        this.props.history.push(`/${category}/${id}`);
    }
    render() {
        return (
            <div className={`container ${styles.mt_5}`}>
                <h2 className={styles.category_name}>{this.props.match.params.id}</h2>
                <div className={styles.products}>
                    {this.props.prod?.map((product) => {
                        return (
                            <div key={product.id} className={styles.card_Box}>
                                <div className={styles.img_container}>
                                    <img style={product.inStock ? { opacity: " 1" } : { opacity: " .5" }} src={product.gallery[0]} alt="" onClick={() => this.getProductDetails(product.id, this.state.name)} />
                                    <h2 className={product.inStock ? styles.in_stock : styles.out_of_stock}>out of stock</h2>
                                    <img className={styles.cart_icon} src={cart_icon} alt="cart_icon" onClick={this.AddToCart.bind(this, product)} />
                                </div>
                                <p className={`${styles.card_Box_title} ${product.inStock ? styles.inStock_color : styles.out_of_stock_color}`}>{product.name}</p>
                                <p className={`${styles.card_Box_price} ${product.inStock ? styles.inStock_color : styles.out_of_stock_color}`}>{product.prices.map((curr, index) => curr.currency.label === this.props.currency.label ? <span key={index}>{curr.currency.symbol}{curr.amount}</span> : "")}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        ctr: state.IncrementCartCount.cartCounter,
        prod: state.GetAllProducts.products,
        cartProds: state.AddToCart.cartList,
        currency: state.Changecurrency.currentCurrency
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        IncrementCartCount: () => dispatch({ type: "INCREMENT_CART_COUNTER" }),
        GetAllProducts: (products) => dispatch({ type: 'All_CART_PRODUCTS', payload: { products: products } }),
        AddToCart: (cartProd) => dispatch({ type: 'ADD_TO_CART', payload: { cartList: cartProd } })
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TechCategory);
