import React from 'react';
import Cart from './Cart';
import ProductList from './ProductList';

const Home = () => {
    return (
        <div className="container mt-4">
            <div className="row">
                <ProductList />
                <Cart />
            </div>
        </div>
    );
};

export default Home;