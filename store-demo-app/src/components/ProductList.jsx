import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from './ProductCard';

const ProductList = () => {
    const products = useSelector((state) => state.products.products);
    const searchTerm = useSelector((state) => state.products.searchTerm);

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="col-md-8">
            <div className="row">
                {filteredProducts.length === 0 ? (
                    <p className="text-center mt-4">No products found for "{searchTerm}"</p>
                ) : (
                    filteredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))
                )}
            </div>
        </div>
    );
};

export default ProductList;