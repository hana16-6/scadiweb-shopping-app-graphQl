import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "../layout/NavBar";
import HomePage from "../components/HomePage";
import Loading from "../components/loading";
import CartPage from "../pages/CartPage";

const TechCategory = React.lazy(() => import("../pages/TechCategory"));
const ProductDetails = React.lazy(() => import("../pages/ProductDetails"));
class Index extends Component {
  render() {
    return (
      <Router>
        <NavBar />
        <React.Suspense fallback={<Loading />}>
          <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/CartPage" component={CartPage} exact />
            <Route
              path="/tech/:id"
              exact
              render={(props) => (
                <ProductDetails client={this.props.client} {...props} />
              )}
            />
            <Route
              path="/clothes/:id"
              exact
              render={(props) => (
                <ProductDetails client={this.props.client} {...props} />
              )}
            />
            <Route
              path="/all/:id"
              exact
              render={(props) => (
                <ProductDetails client={this.props.client} {...props} />
              )}
            />
            <Route
              exact
              path="/:id"
              render={(props) => (
                <TechCategory client={this.props.client} {...props} />
              )}
            />
            <Route path="*" component={HomePage} />
          </Switch>
        </React.Suspense>
      </Router>
    );
  }
}

export default Index;
