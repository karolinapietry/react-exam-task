import React from 'react';
import ProductsService from '../productsService/products.service';
import ProductList from './ProductList'

const products = ProductsService.getProducts();

const Catalog = () => {

    return (
        <div className="catalog">
            <div className="column-left">

                <form className="filter">
                    <input type="text" />
                    <button className="search-button" type="submit">Search</button>

                    <li type="circle">Apple</li>
                    <li type="circle">Asus</li>
                    <li type="circle">Dell</li>
                    <li type="circle">Lenovo</li>
                    <li type="circle">Samsung</li>
                    <li type="circle">Xiomi</li>
                    <li type="circle">Microsoft</li>
                    <button>Clear</button>
                </form>
            </div>

            <div className="column-right">
                <ProductList productList={products} />
            </div>
        </div>
    );
};

export default Catalog;