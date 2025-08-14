import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CartItem from './CartItem';

const Cart = () => {
    const cartItems = useSelector((state) => state.cart.items);
    const totalAmount = useSelector((state) => state.cart.totalAmount);
    const navigate = useNavigate();

    const handleProceedToPayment = () => {
        navigate('/payment');
    };

    return (
        <div className="col-md-4">
            <div className="card">
                <div className="card-header bg-primary text-white">
                    <h4>Shopping Cart</h4>
                </div>
                <div className="card-body">
                    {cartItems.length === 0 ? (
                        <p>Your cart is empty.</p>
                    ) : (
                        <>
                            {cartItems.map((item) => (
                                <CartItem key={item.id} item={item} />
                            ))}
                            <hr />
                            <h5 className="text-end">Total: ${totalAmount.toFixed(2)}</h5>
                            <button className="btn btn-success w-100 mt-3" onClick={handleProceedToPayment} disabled={cartItems.length === 0} >
                                Proceed to Payment
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Cart;