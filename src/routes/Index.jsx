import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "../layout/NavBar";
import NotFound from "../components/NotFound.js";
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
            <Route path="/" component={NotFound} exact />
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
            <Route path="*" component={NotFound} />
          </Switch>
        </React.Suspense>
      </Router>
    );
  }
}

export default Index;
