import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem, removeItem } from '../features/cart/cartSlice';

const CartItem = ({ item }) => {
    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch(addItem(item)); // Re-add the item to increment quantity
    };

    const handleDecrement = () => {
        dispatch(removeItem(item.id));
    };

    return (
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={item.image} className="img-fluid rounded-start" alt={item.name} />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <p className="card-text">Price: ${item.price.toFixed(2)}</p>
                        <div className="d-flex align-items-center">
                            <button className="btn btn-outline-secondary btn-sm" onClick={handleDecrement}>-</button>
                            <span className="mx-2">Quantity: {item.quantity}</span>
                            <button className="btn btn-outline-secondary btn-sm" onClick={handleIncrement}>+</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;