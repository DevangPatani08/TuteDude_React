import React from 'react';
import PaymentDetails from './Paymentdetails';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CartItem from './CartItem'; // Re-use CartItem to display cart on payment page

const Payments = () => {
    const cartItems = useSelector((state) => state.cart.items);
    const totalAmount = useSelector((state) => state.cart.totalAmount);

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-7">
                    <PaymentDetails />
                </div>
                <div className="col-md-5">
                    <div className="card">
                        <div className="card-header bg-info text-white">
                            <h4>Your Cart Summary</h4>
                        </div>
                        <div className="card-body">
                            {cartItems.length === 0 ? (
                                <p>Your cart is empty.</p>
                            ) : (
                                <>
                                    {cartItems.map((item) => (
                                        <div key={item.id} className="d-flex align-items-center mb-3">
                                            <img src={item.image} alt={item.name} style={{ width: '60px', height: '60px', marginRight: '10px', objectFit: 'cover' }} />
                                            <div>
                                                <h6>{item.name}</h6>
                                                <small>Quantity: {item.quantity} x ${item.price.toFixed(2)}</small>
                                            </div>
                                        </div>
                                    ))}
                                    <hr />
                                    <h5 className="text-end">Total: ${totalAmount.toFixed(2)}</h5>
                                </>
                            )}
                            <Link to="/" className="btn btn-outline-primary mt-3 w-100">
                                Return to Shopping Cart
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payments;