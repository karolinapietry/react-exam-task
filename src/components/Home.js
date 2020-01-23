import React from "react";
import '../App.css';
import ProductsService from '../productsService/products.service'
import ProductList from "components/ProductList";


const desktopFeatured = ProductsService.getProducts().filter(product =>
  product.featured === true && product.category === "desktop"
)


const fourDesktop = desktopFeatured.slice(0, 4)


const tabletsFeatured = ProductsService.getProducts().filter(product =>
  product.featured === true && product.category === "tablet"
)

const fourTablets = tabletsFeatured.slice(0, 4)

const Home = () => (
  <div className="container">
    <h1 className="header-big">Welcome to our store</h1>

    <div className="container">
      <div className="header-small">Desktop</div>
      <ProductList productList={desktopFeatured, fourDesktop} />
    </div>
    <div className="container">
      <div className="header-small">Tablets</div>
      <ProductList productList={tabletsFeatured, fourTablets} />
    </div>
  </div>
);

export default Home;