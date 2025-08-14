import { useState } from 'react';
import { Button, Card, Col, Container, Form, ListGroup, Modal, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { cartActions } from '../store/cartSlice';
import { Link } from 'react-router-dom';

const Checkout = () => {
  const cartItems = useSelector(state => state.cart.items);
  const totalAmount = useSelector(state => state.cart.totalAmount);
  const dispatch = useDispatch();
  const [paymentMethod, setPaymentMethod] = useState('');
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [cardDetails, setCardDetails] = useState({
    number: '',
    name: '',
    expiry: '',
    cvv: '',
  });
  const [paypalEmail, setPaypalEmail] = useState('');
  const [bankDetails, setBankDetails] = useState({
    accountNumber: '',
    accountName: '',
    bankName: ''
  });
  const [isValid, setIsValid] = useState(false);
  const [errors, setError] = useState({});
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setError(prev => ({ ...prev, [name]: '' }));

    if (name === 'number') {
      const digitOnly = value.replace(/\D/g, '');
      const formattedValue = digitOnly.replace(/(.{4})/g, '$1 ').trim();
      setCardDetails(prev => ({ ...prev, [name]: formattedValue }));
    } else if (name === 'expiry') {
      let formattedValue = value.replace(/\D/g, '');
      if (formattedValue.length > 2) {
        formattedValue = `${formattedValue.slice(0, 2)}/${formattedValue.slice(2, 4)}`;
      }
      setCardDetails(prev => ({ ...prev, [name]: formattedValue }));
    } else if (name === 'cvv') {
      let formattedValue = value.replace(/\D/g, '').slice(0, 3);
      setCardDetails(prev => ({ ...prev, [name]: formattedValue }));
    } else if (name === 'name') {
      setCardDetails(prev => ({ ...prev, [name]: value }));
    } else if (name === 'paypalEmail') {
      setPaypalEmail(value)
    } else {
      setBankDetails(prev => ({ ...prev, [name]: value }));
    }
  };

  const renderPaymentInputs = (errors) => {
    switch (paymentMethod) {
      case 'credit-card':
        return (
          <div className='mt-3 p-3 border rounded'>
            <h6>Credit Card Details</h6>
            <Form.Group className='mb-3  mt-3'>
              <Form.Label>Card Number</Form.Label>
              <Form.Control type='text' placeholder='1234 5678 9102 3456' name='number' value={cardDetails.number} maxLength='19' onChange={handleChange} isInvalid={!!errors.number} required />
              <Form.Control.Feedback type='invalid'>{errors.number}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label>Card Holder Name</Form.Label>
              <Form.Control type='text' placeholder='Jhon Doe' name='name' value={cardDetails.name} onChange={handleChange} isInvalid={!!errors.name} required />
              <Form.Control.Feedback type='invalid'>{errors.name}</Form.Control.Feedback>
            </Form.Group>
            <Row>
              <Col md={6}>
                <Form.Group className='mb-3'>
                  <Form.Label>Expiry Date</Form.Label>
                  <Form.Control type='text' placeholder='MM/YY' name='expiry' value={cardDetails.expiry} maxLength='5' onChange={handleChange} isInvalid={!!errors.expiry} required />
                  <Form.Control.Feedback type='invalid'>{errors.expiry}</Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className='mb-3'>
                  <Form.Label>CVV</Form.Label>
                  <Form.Control type='text' placeholder='123' name='cvv' value={cardDetails.cvv} maxLength='3' onChange={handleChange} isInvalid={!!errors.cvv} required />
                  <Form.Control.Feedback type='invalid'>{errors.cvv}</Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>
          </div>
        );
      case 'paypal':
        return (
          <div className='mt-3 p-3 border rounded'>
            <h6>PayPal Details</h6>
            <Form.Group className='mb-3 mt-3'>
              <Form.Label>PayPal Email</Form.Label>
              <Form.Control type='email' placeholder='your@email.com' value={paypalEmail} onChange={(e) => setPaypalEmail(e.target.value)} isInvalid={!!errors.paypalEmail} required />
              <Form.Control.Feedback type='invalid'>{errors.paypalEmail}</Form.Control.Feedback>
            </Form.Group>
          </div>
        );
      case 'bank-transfer':
        return (
          <div className='mt-3 p-3 border rounded'>
            <h6>Bank Transfer Details</h6>
            <Form.Group className='mb-3 mt-3'>
              <Form.Label>Bank Name</Form.Label>
              <Form.Select name='bankName' value={bankDetails.bankName} onChange={handleChange} isInvalid={!!errors.bankName} required>
                <option value=''>Select a bank</option>
                <option value='Chase Bank'>Chase Bank</option>
                <option value='Bank of America'>Bank of America</option>
                <option value='Wells Fargo'>Wells Fargo</option>
                <option value='Citibank'>Citibank</option>
                <option value='HSBC'>HSBC</option>
                <option value='Other'>Other</option>
              </Form.Select>
              <Form.Control.Feedback type='invalid'>{errors.bankName}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label>Account Number</Form.Label>
              <Form.Control type='text' placeholder='1234567890' name='accountNumber' value={bankDetails.accountNumber} maxLength="10" onChange={handleChange} isInvalid={!!errors.accountNumber} required />
              <Form.Control.Feedback type="invalid">{errors.accountNumber}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label>Account Holder Name</Form.Label>
              <Form.Control type='text' placeholder='Jhon Doe' name='accountName' value={bankDetails.accountName} onChange={handleChange} isInvalid={!!errors.accountName} required />
              <Form.Control.Feedback type="invalid">{errors.accountName}</Form.Control.Feedback>
            </Form.Group>
            
          </div>
        );
      case 'cash-on-delivery':
        return (
          <div className='mt-3 p-3 border rounded'>
            <h6>Cash on Delivery</h6>
            <p className='mt-3'>Pay with cash when your order is delivered.</p>
          </div>
        );
      default:
        return null;
    }
  };

  const isExpiryValid = (expiry) => {
    const [m, y] = expiry.split('/');
    if (!m || !y || m.length !== 2 || y.length !== 2) return false;

    const cY = parseInt(new Date().getFullYear().toString().slice(2), 10);
    const cM = parseInt(new Date().getMonth().toString() + 1, 10);
    const mInt = parseInt(m, 10);
    const yInt = parseInt(y, 10);

    if (mInt < 1 || mInt > 12) return false;
    if (yInt < cY) return false;
    if (yInt === cY && mInt < cM) return false;

    return true;
  };

  const validateForm = () => {
    const newErr = {};
    let formIsValid = true;

    switch (paymentMethod) {
      case 'credit-card':
        if (cardDetails.number.replace(/\s/g, '').length !== 16) {
          newErr.number = 'Please enter a valid 16-digit card number.';
          formIsValid = false;
        }

        if (cardDetails.name.trim().split(/\s+/).length < 2) {
          newErr.name = 'Please enter a first and last name.';
          formIsValid = false;
        }
        
        if (!isExpiryValid(cardDetails.expiry)) {
          newErr.expiry = 'Please enter a valid expiry date (MM/YY) that is not in the past.';
          formIsValid = false;
        }
        
        if (cardDetails.cvv.length !== 3) {
          newErr.cvv = 'CVV must be exactly 3 digits.';
          formIsValid = false;
        }

        break;
      case 'paypal':
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(paypalEmail)) {
          newErr.paypalEmail = 'Please enter a valid email address.';
          formIsValid = false;
        }
        break;
      case 'bank-transfer':
        if (!bankDetails.bankName.trim()) {
          newErr.bankName = 'Please select a bank from the list.';
          formIsValid = false;
        }
        if (bankDetails.accountNumber.length !== 10) { 
          newErr.accountNumber = 'Account number must be exactly 10 digits.';
          formIsValid = false;
        }
        if (bankDetails.accountName.trim().split(/\s+/).length < 2) {
          newErr.accountName = 'Please enter a first and last name.';
          formIsValid = false;
        }
        break;
      case 'cash-on-delivery':
        break;
      default:
        newErr.paymentMethod = 'Please select a payment method.';
        formIsValid = false;
    }

    setError(newErr);
    return (formIsValid);
  };

  const handlePayment = (e) => {
    e.preventDefault();
    setIsValid(true);

    if (cartItems.length === 0) {
      alert('Your cart is empty! Please add items before checking out.');
      return;
    }

    if (validateForm()) {
      setShowSuccessModal(true);
    }
  };

  const handleCloseModal = () => {
    setShowSuccessModal(false);
  };

  const handleCompletePayment = () => {
    dispatch(cartActions.clearCart());
    setShowSuccessModal(false);
  };


  return (
    <Container className='my-5'>
      <h1 className='mb-4'>Checkout</h1>

      <Row>
        <Col lg={8} className='mb-4'>
          <Card className='mb-4'>
            <Card.Header as='h5'>Order Summary</Card.Header>
            <Card.Body>
              <ListGroup variant='flush'>
                {cartItems.map(item => (
                  <ListGroup.Item key={item.id} className='d-flex justify-content-between align-items-center'>
                    <div>
                      <span className="fw-bold">{item.name}</span>
                      <span className='text-muted ms-2'>x{item.quantity}</span>
                    </div>
                    <span>${item.totalPrice.toFixed(2)}</span>
                  </ListGroup.Item>
                ))}

                <ListGroup.Item className='d-flex justify-content-between fw-bold'>
                  <span>Total</span>
                  <span>${totalAmount.toFixed(2)}</span>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={4}>
          <Card>
            <Card.Header as='h5'>Payment Method</Card.Header>
            <Card.Body>
              <Form noValidate validated={isValid} onSubmit={handlePayment}>
                <Form.Group className='mb-3'>
                  <Form.Label>Select Payment Method</Form.Label>
                  <div className="mt-2">
                    
                    <Form.Check type='radio' id='credit-card' label='Credit Card' name='paymentMethod' value='credit-card' checked={paymentMethod === 'credit-card'} onChange={(e) => { setPaymentMethod(e.target.value); setError({}); }} className='mb-2'></Form.Check>
                    
                    <Form.Check type='radio' id='paypal' label='Paypal' name='paymentMethod' value='paypal' checked={paymentMethod === 'paypal'} onChange={(e) => { setPaymentMethod(e.target.value); setError({}); }} className='mb-2'></Form.Check>
                    
                    <Form.Check type='radio' id='bank-transfer' label='Bank Transfer' name='paymentMethod' value='bank-transfer' checked={paymentMethod === 'bank-transfer'} onChange={(e) => { setPaymentMethod(e.target.value); setError({}); }} className='mb-2'></Form.Check>
                    
                    <Form.Check type='radio' id='cash-on-delivery' label='Cash On Delivery' name='paymentMethod' value='cash-on-delivery' checked={paymentMethod === 'cash-on-delivery'} onChange={(e) => { setPaymentMethod(e.target.value); setError({}); }} className='mb-2'></Form.Check>
                  </div>
                </Form.Group>

                {renderPaymentInputs(errors)}

                <Button type='submit' variant='danger' size='lg' className='w-100 mt-3'>Complete Payment</Button>
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
          <ListGroup variant='flush'>
            {cartItems.map(item => (
              <ListGroup.Item key={item.id}>
                {item.name} x {item.quantity} - ${item.totalPrice.toFixed(2)}
              </ListGroup.Item>
            ))}
            <ListGroup.Item className='fw-bold'>
              Total: ${totalAmount.toFixed(2)}
            </ListGroup.Item>
          </ListGroup>
          <p className='mt-3'>
            Payment Method: {paymentMethod.replace(/-/g, ' ')}
          </p>
        </Modal.Body>
        <Modal.Footer className='justify-content-center'>
          <Button variant='success' as={Link} to='/' onClick={handleCompletePayment}>Back to Home</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Checkout;