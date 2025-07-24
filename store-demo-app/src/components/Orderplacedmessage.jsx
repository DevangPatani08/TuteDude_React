import React from 'react';
import { Link } from 'react-router-dom';

const OrderPlacedMessage = () => {
    return (
        <div className="container mt-5 text-center">
            <div className="alert alert-success" role="alert">
                <h4 className="alert-heading">Order Placed Successfully!</h4>
                <p>Thank you for your purchase. Your order has been placed and will be processed shortly.</p>
                <hr />
                <p className="mb-0">You will receive an email confirmation with your order details.</p>
            </div>
            <Link to="/" className="btn btn-primary mt-3">Continue Shopping</Link>
        </div>
    );
};

export default OrderPlacedMessage;