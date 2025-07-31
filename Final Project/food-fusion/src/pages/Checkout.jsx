import { useState } from 'react';
import { Container, Row, Col, Card, Button, Modal, ListGroup, Form } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { cartActions } from '../store/cartSlice';

function Checkout() {
  const cartItems = useSelector(state => state.cart.items);
  const totalAmount = useSelector(state => state.cart.totalAmount);
  const dispatch = useDispatch();
  const [paymentMethod, setPaymentMethod] = useState('');
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [cardDetails, setCardDetails] = useState({
    number: '',
    name: '',
    expiry: '',
    cvv: ''
  });
  const [paypalEmail, setPaypalEmail] = useState('');
  const [bankDetails, setBankDetails] = useState({
    accountNumber: '',
    accountName: '',
    bankName: ''
  });

  const handlePayment = () => {
    setShowSuccessModal(true);
  };

  const handleCloseModal = () => {
    setShowSuccessModal(false);
  };

  const handleCompleteOrder = () => {
    dispatch(cartActions.clearCart());
    setShowSuccessModal(false);
  };

  const handleCardInputChange = (e) => {
    const { name, value } = e.target;
    setCardDetails(prev => ({ ...prev, [name]: value }));
  };

  const handleBankInputChange = (e) => {
    const { name, value } = e.target;
    setBankDetails(prev => ({ ...prev, [name]: value }));
  };

  const renderPaymentInputs = () => {
    switch (paymentMethod) {
      case 'credit-card':
        return (
          <div className="mt-3 p-3 border rounded">
            <h6>Credit Card Details</h6>
            <Form.Group className="mb-3">
              <Form.Label>Card Number</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="1234 5678 9012 3456" 
                name="number"
                value={cardDetails.number}
                onChange={handleCardInputChange}
                maxLength="16"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Cardholder Name</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="John Doe" 
                name="name"
                value={cardDetails.name}
                onChange={handleCardInputChange}
              />
            </Form.Group>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Expiry Date</Form.Label>
                  <Form.Control 
                    type="text" 
                    placeholder="MM/YY" 
                    name="expiry"
                    value={cardDetails.expiry}
                    onChange={handleCardInputChange}
                    maxLength="5"
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>CVV</Form.Label>
                  <Form.Control 
                    type="text" 
                    placeholder="123" 
                    name="cvv"
                    value={cardDetails.cvv}
                    onChange={handleCardInputChange}
                    maxLength="3"
                  />
                </Form.Group>
              </Col>
            </Row>
          </div>
        );
      case 'paypal':
        return (
          <div className="mt-3 p-3 border rounded">
            <h6>PayPal Details</h6>
            <Form.Group className="mb-3">
              <Form.Label>PayPal Email</Form.Label>
              <Form.Control 
                type="email" 
                placeholder="your@email.com" 
                value={paypalEmail}
                onChange={(e) => setPaypalEmail(e.target.value)}
              />
            </Form.Group>
          </div>
        );
      case 'bank-transfer':
        return (
          <div className="mt-3 p-3 border rounded">
            <h6>Bank Transfer Details</h6>
            <Form.Group className="mb-3">
              <Form.Label>Bank Name</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="e.g. Chase Bank" 
                name="bankName"
                value={bankDetails.bankName}
                onChange={handleBankInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Account Number</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="1234567890" 
                name="accountNumber"
                value={bankDetails.accountNumber}
                onChange={handleBankInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Account Name</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="John Doe" 
                name="accountName"
                value={bankDetails.accountName}
                onChange={handleBankInputChange}
              />
            </Form.Group>
          </div>
        );
      case 'cash-on-delivery':
        return (
          <div className="mt-3 p-3 border rounded">
            <h6>Cash on Delivery</h6>
            <p>Pay with cash when your order is delivered</p>
          </div>
        );
      default:
        return null;
    }
  };

  const isPaymentValid = () => {
    if (!paymentMethod || cartItems.length === 0) return false;
    
    switch (paymentMethod) {
      case 'credit-card':
        return (
          cardDetails.number.length === 16 &&
          cardDetails.name.trim() &&
          /^\d{2}\/\d{2}$/.test(cardDetails.expiry) &&
          cardDetails.cvv.length === 3
        );
      case 'paypal':
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(paypalEmail);
      case 'bank-transfer':
        return (
          bankDetails.bankName.trim() &&
          bankDetails.accountNumber.trim() &&
          bankDetails.accountName.trim()
        );
      case 'cash-on-delivery':
        return true;
      default:
        return false;
    }
  };

  return (
    <Container className="my-5">
      <h1 className="mb-4">Checkout</h1>
      
      <Row>
        <Col lg={8} className="mb-4">
          <Card className="mb-4">
            <Card.Header as="h5">Order Summary</Card.Header>
            <Card.Body>
              <ListGroup variant="flush">
                {cartItems.map(item => (
                  <ListGroup.Item key={item.id} className="d-flex justify-content-between align-items-center">
                    <div>
                      <span className="fw-bold">{item.name}</span>
                      <span className="text-muted ms-2">x{item.quantity}</span>
                    </div>
                    <span>${item.totalPrice.toFixed(2)}</span>
                  </ListGroup.Item>
                ))}
                <ListGroup.Item className="d-flex justify-content-between fw-bold">
                  <span>Total</span>
                  <span>${totalAmount.toFixed(2)}</span>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={4}>
          <Card>
            <Card.Header as="h5">Payment Method</Card.Header>
            <Card.Body>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Select Payment Method</Form.Label>
                  <div className="mt-2">
                    <Form.Check
                      type="radio"
                      id="credit-card"
                      label="Credit Card"
                      name="paymentMethod"
                      value="credit-card"
                      checked={paymentMethod === 'credit-card'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="mb-2"
                    />
                    <Form.Check
                      type="radio"
                      id="paypal"
                      label="PayPal"
                      name="paymentMethod"
                      value="paypal"
                      checked={paymentMethod === 'paypal'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="mb-2"
                    />
                    <Form.Check
                      type="radio"
                      id="bank-transfer"
                      label="Bank Transfer"
                      name="paymentMethod"
                      value="bank-transfer"
                      checked={paymentMethod === 'bank-transfer'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="mb-2"
                    />
                    <Form.Check
                      type="radio"
                      id="cash-on-delivery"
                      label="Cash on Delivery"
                      name="paymentMethod"
                      value="cash-on-delivery"
                      checked={paymentMethod === 'cash-on-delivery'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                  </div>
                </Form.Group>

                {renderPaymentInputs()}
              </Form>

              <Button
                variant="primary"
                size="lg"
                className="w-100 mt-3"
                onClick={handlePayment}
                disabled={!isPaymentValid()}
              >
                Complete Payment
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Modal show={showSuccessModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Order Confirmed!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Thank you for your purchase!</p>
          <p>Your order number is #{Math.floor(Math.random() * 1000000)}</p>
          <ListGroup variant="flush">
            {cartItems.map(item => (
              <ListGroup.Item key={item.id}>
                {item.name} x {item.quantity} - ${item.totalPrice.toFixed(2)}
              </ListGroup.Item>
            ))}
            <ListGroup.Item className="fw-bold">
              Total: ${totalAmount.toFixed(2)}
            </ListGroup.Item>
          </ListGroup>
          <p className="mt-3">
            Payment Method: {paymentMethod.replace(/-/g, ' ')}
          </p>
        </Modal.Body>
        <Modal.Footer className="justify-content-center">
          <Button 
            variant="success" 
            as={Link} 
            to="/" 
            onClick={handleCompleteOrder}
          >
            Back to Home
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default Checkout;