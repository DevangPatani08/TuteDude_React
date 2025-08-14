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
  const [validated, setValidated] = useState(false);

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
  
  // New state to hold validation errors
  const [errors, setErrors] = useState({});

  // Helper function to validate expiry date
  const isExpiryValid = (expiry) => {
    const [month, year] = expiry.split('/');
    if (!month || !year || month.length !== 2 || year.length !== 2) return false;
    
    const currentYear = new Date().getFullYear().toString().slice(2);
    const currentMonth = new Date().getMonth() + 1;
    const monthInt = parseInt(month, 10);
    const yearInt = parseInt(year, 10);

    if (monthInt < 1 || monthInt > 12) return false;
    if (yearInt < parseInt(currentYear, 10)) return false;
    if (yearInt === parseInt(currentYear, 10) && monthInt < currentMonth) return false;
    
    return true;
  };

  // Main validation function for the entire form
  const validateForm = () => {
    const newErrors = {};
    let formIsValid = true;

    // Validate based on the selected payment method
    switch (paymentMethod) {
      case 'credit-card':
        if (cardDetails.number.replace(/\s/g, '').length !== 16) {
          newErrors.number = 'Please enter a valid 16-digit card number.';
          formIsValid = false;
        }
        if (cardDetails.name.trim().split(/\s+/).length < 2) {
          newErrors.name = 'Please enter a first and last name.';
          formIsValid = false;
        }
        if (!isExpiryValid(cardDetails.expiry)) {
          newErrors.expiry = 'Please enter a valid expiry date (MM/YY) that is not in the past.';
          formIsValid = false;
        }
        if (cardDetails.cvv.length !== 3) {
          newErrors.cvv = 'CVV must be exactly 3 digits.';
          formIsValid = false;
        }
        break;
      case 'paypal':
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(paypalEmail)) {
          newErrors.paypalEmail = 'Please enter a valid email address.';
          formIsValid = false;
        }
        break;
      case 'bank-transfer':
        if (!bankDetails.bankName.trim()) {
          newErrors.bankName = 'Please select a bank from the list.';
          formIsValid = false;
        }
        if (bankDetails.accountNumber.length !== 10) {
          newErrors.accountNumber = 'Account number must be exactly 10 digits.';
          formIsValid = false;
        }
        if (bankDetails.accountName.trim().split(/\s+/).length < 2) {
          newErrors.accountName = 'Please enter a first and last name.';
          formIsValid = false;
        }
        break;
      case 'cash-on-delivery':
        // No validation needed for this method
        break;
      default:
        newErrors.paymentMethod = 'Please select a payment method.';
        formIsValid = false;
    }

    setErrors(newErrors);
    return formIsValid;
  };

  // Handler for all input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    // Clear the error for the field being changed
    setErrors(prev => ({ ...prev, [name]: '' }));
    
    // Input-specific formatting logic
    if (name === 'number') {
      const digitsOnly = value.replace(/\D/g, '');
      const formattedValue = digitsOnly.replace(/(.{4})/g, '$1 ').trim();
      setCardDetails(prev => ({ ...prev, [name]: formattedValue }));
    } else if (name === 'expiry') {
      let formattedValue = value.replace(/\D/g, '');
      if (formattedValue.length > 2) {
        formattedValue = `${formattedValue.slice(0, 2)}/${formattedValue.slice(2, 4)}`;
      }
      setCardDetails(prev => ({ ...prev, [name]: formattedValue }));
    } else if (name === 'cvv') {
      setCardDetails(prev => ({ ...prev, [name]: value.replace(/\D/g, '').slice(0, 3) }));
    } else if (name === 'name') {
      setCardDetails(prev => ({ ...prev, [name]: value }));
    } else if (name === 'paypalEmail') {
      setPaypalEmail(value);
    } else {
      setBankDetails(prev => ({ ...prev, [name]: value }));
    }
  };

  const handlePayment = (event) => {
    event.preventDefault();
    setValidated(true);

    if (cartItems.length === 0) {
      alert('Your cart is empty! Please add items before checking out.');
      return;
    }
    
    // Check if the form is valid before proceeding
    if (validateForm()) {
      setShowSuccessModal(true);
    }
  };

  const handleCloseModal = () => {
    setShowSuccessModal(false);
  };

  const handleCompleteOrder = () => {
    dispatch(cartActions.clearCart());
    setShowSuccessModal(false);
  };

  const renderPaymentInputs = (errors) => {
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
                onChange={handleChange}
                isInvalid={!!errors.number}
                maxLength="19"
                required
              />
              <Form.Control.Feedback type="invalid">
                {errors.number}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Cardholder Name</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="John Doe" 
                name="name"
                value={cardDetails.name}
                onChange={handleChange}
                isInvalid={!!errors.name}
                required
              />
              <Form.Control.Feedback type="invalid">
                {errors.name}
              </Form.Control.Feedback>
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
                    onChange={handleChange}
                    isInvalid={!!errors.expiry}
                    maxLength="5"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.expiry}
                  </Form.Control.Feedback>
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
                    onChange={handleChange}
                    isInvalid={!!errors.cvv}
                    maxLength="3"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.cvv}
                  </Form.Control.Feedback>
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
                name="paypalEmail"
                value={paypalEmail}
                onChange={handleChange}
                isInvalid={!!errors.paypalEmail}
                required
              />
              <Form.Control.Feedback type="invalid">
                {errors.paypalEmail}
              </Form.Control.Feedback>
            </Form.Group>
          </div>
        );
      case 'bank-transfer':
        return (
          <div className="mt-3 p-3 border rounded">
            <h6>Bank Transfer Details</h6>
            <Form.Group className="mb-3">
              <Form.Label>Bank Name</Form.Label>
              <Form.Select
                name="bankName"
                value={bankDetails.bankName}
                onChange={handleChange}
                isInvalid={!!errors.bankName}
                required
              >
                <option value="">Select a bank</option>
                <option value="Chase Bank">Chase Bank</option>
                <option value="Bank of America">Bank of America</option>
                <option value="Wells Fargo">Wells Fargo</option>
                <option value="Citibank">Citibank</option>
                <option value="HSBC">HSBC</option>
                <option value="Other">Other</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                {errors.bankName}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Account Number</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="1234567890" 
                name="accountNumber"
                value={bankDetails.accountNumber}
                onChange={handleChange}
                isInvalid={!!errors.accountNumber}
                maxLength="10"
                required
              />
              <Form.Control.Feedback type="invalid">
                {errors.accountNumber}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Account Name</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="John Doe" 
                name="accountName"
                value={bankDetails.accountName}
                onChange={handleChange}
                isInvalid={!!errors.accountName}
                required
              />
              <Form.Control.Feedback type="invalid">
                {errors.accountName}
              </Form.Control.Feedback>
            </Form.Group>
          </div>
        );
      case 'cash-on-delivery':
        return (
          <div className="mt-3 p-3 border rounded">
            <h6>Cash on Delivery</h6>
            <p className="mb-0">Pay with cash when your order is delivered.</p>
          </div>
        );
      default:
        return null;
    }
  };

  const isPaymentValid = () => {
    if (cartItems.length === 0) return false;
    
    switch (paymentMethod) {
      case 'credit-card':
        return (
          cardDetails.number.replace(/\s/g, '').length === 16 &&
          cardDetails.name.trim().split(/\s+/).length >= 2 &&
          isExpiryValid(cardDetails.expiry) &&
          cardDetails.cvv.length === 3
        );
      case 'paypal':
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(paypalEmail);
      case 'bank-transfer':
        return (
          bankDetails.bankName.trim() &&
          bankDetails.accountNumber.length === 10 &&
          bankDetails.accountName.trim().split(/\s+/).length >= 2
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
              <Form noValidate validated={validated} onSubmit={handlePayment}>
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
                      onChange={(e) => {
                        setPaymentMethod(e.target.value);
                        setErrors({}); // Clear errors when payment method changes
                      }}
                      className="mb-2"
                      required
                    />
                    <Form.Check
                      type="radio"
                      id="paypal"
                      label="PayPal"
                      name="paymentMethod"
                      value="paypal"
                      checked={paymentMethod === 'paypal'}
                      onChange={(e) => {
                        setPaymentMethod(e.target.value);
                        setErrors({}); // Clear errors when payment method changes
                      }}
                      className="mb-2"
                      required
                    />
                    <Form.Check
                      type="radio"
                      id="bank-transfer"
                      label="Bank Transfer"
                      name="paymentMethod"
                      value="bank-transfer"
                      checked={paymentMethod === 'bank-transfer'}
                      onChange={(e) => {
                        setPaymentMethod(e.target.value);
                        setErrors({}); // Clear errors when payment method changes
                      }}
                      className="mb-2"
                      required
                    />
                    <Form.Check
                      type="radio"
                      id="cash-on-delivery"
                      label="Cash on Delivery"
                      name="paymentMethod"
                      value="cash-on-delivery"
                      checked={paymentMethod === 'cash-on-delivery'}
                      onChange={(e) => {
                        setPaymentMethod(e.target.value);
                        setErrors({}); // Clear errors when payment method changes
                      }}
                      required
                    />
                    <div className={`text-danger mt-2 ${!paymentMethod && validated ? 'd-block' : 'd-none'}`}>
                        Please select a payment method.
                    </div>
                  </div>
                </Form.Group>

                {renderPaymentInputs(errors)}

                <Button
                  variant="primary"
                  size="lg"
                  className="w-100 mt-3"
                  type="submit"
                >
                  Complete Payment
                </Button>
              </Form>
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