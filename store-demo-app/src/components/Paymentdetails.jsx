import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearCart } from '../features/cart/cartSlice';

const PaymentDetails = () => {
    const totalAmount = useSelector((state) => state.cart.totalAmount);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [paymentMethod, setPaymentMethod] = useState('credit_debit_card');
    const [cardDetails, setCardDetails] = useState({
        cardNumber: '',
        cardExpiry: '',
        cardCVV: '',
    });

    const handlePaymentMethodChange = (e) => {
        setPaymentMethod(e.target.value);
    };

    const handleCardInputChange = (e) => {
        const { name, value } = e.target;
        setCardDetails(prevDetails => ({
            ...prevDetails,
            [name]: value,
        }));
    };

    const handleCompletePayment = (e) => {
        e.preventDefault();
        if (paymentMethod === 'credit_debit_card') {
            if (!cardDetails.cardNumber || !cardDetails.cardExpiry || !cardDetails.cardCVV) {
                alert('Please fill in all credit card details.');
                return;
            }
            // Simulate payment processing
            console.log('Processing Credit/Debit Card payment:', cardDetails);
        } else if (paymentMethod === 'cash_on_delivery') {
            console.log('Processing Cash on Delivery payment.');
        }
        // Simulate successful payment
        alert('Payment successful!');
        dispatch(clearCart()); // Clear cart after successful payment
        navigate('/order-placed');
    };

    return (
        <div className="container mt-4">
            <div className="card p-4">
                <h3 className="mb-4">Payment Details</h3>

                <form onSubmit={handleCompletePayment}>
                    <div className="mb-3">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="paymentMethod" id="cashOnDelivery" value="cash_on_delivery" checked={paymentMethod === 'cash_on_delivery'} onChange={handlePaymentMethodChange} />
                            <label className="form-check-label" htmlFor="cashOnDelivery">
                                Cash on Delivery
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="paymentMethod" id="creditDebitCard" value="credit_debit_card" checked={paymentMethod === 'credit_debit_card'} onChange={handlePaymentMethodChange} />
                            <label className="form-check-label" htmlFor="creditDebitCard">
                                Credit/Debit Card
                            </label>
                        </div>
                    </div>

                    {paymentMethod === 'credit_debit_card' && (
                        <>
                            <h5 className="mb-3">Credit/Debit Card Details</h5>
                            <div className="mb-3">
                                <label htmlFor="cardNumber" className="form-label">Card Number</label>
                                <input type="text" className="form-control" id="cardNumber" name="cardNumber" value={cardDetails.cardNumber} onChange={handleCardInputChange} placeholder="XXXX XXXX XXXX XXXX" required />
                            </div>
                            <div className="row mb-3">
                                <div className="col-md-6">
                                    <label htmlFor="cardExpiry" className="form-label">Card Expiry</label>
                                    <input type="text" className="form-control" id="cardExpiry" name="cardExpiry" value={cardDetails.cardExpiry} onChange={handleCardInputChange} placeholder="MM/YY" required />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="cardCVV" className="form-label">Card CVV</label>
                                    <input type="text" className="form-control" id="cardCVV" name="cardCVV" value={cardDetails.cardCVV} onChange={handleCardInputChange} placeholder="XXX" required />
                                </div>
                            </div>
                        </>
                    )}

                    <h4 className="mt-4">Total Payable Amount: ${totalAmount.toFixed(2)}</h4>

                    <button type="submit" className="btn btn-success mt-3 w-100">
                        Complete Payment
                    </button>
                </form>
            </div>
        </div>
    );
};

export default PaymentDetails;