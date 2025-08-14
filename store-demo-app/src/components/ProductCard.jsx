import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../features/cart/cartSlice';

const ProductCard = ({ product }) => {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addItem(product));
    };

    return (
        <div className="col-md-6 mb-4">
            <div className="card h-100">
                <img src={product.image} className="card-img-top" alt={product.name} />
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">${product.price.toFixed(2)}</p>
                    <button className="btn btn-primary mt-auto" onClick={handleAddToCart}>
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;