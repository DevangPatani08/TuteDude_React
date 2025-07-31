import { Container, Button, Row, Col, Card, Image } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { cartActions } from '../store/cartSlice';
import CartItem from '../components/CartItem';
import { Link } from 'react-router-dom';
import emptyCart from '../assets/empty-cart.png';

function Cart() {
  const cartItems = useSelector(state => state.cart.items);
  const totalAmount = useSelector(state => state.cart.totalAmount);
  const totalQuantity = useSelector(state => state.cart.totalQuantity);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(cartActions.clearCart());
  };

  if (cartItems.length === 0) {
    return (
      <Container className="empty-cart-container">
        <Image src={emptyCart} alt="Empty cart" className="empty-cart-img"/>
        <h2>Your cart is empty</h2>
        <p className="text-muted">Looks like you haven't added any delicious food yet</p>
        <Button as={Link} to="/menu" variant="primary" size="lg">
          Browse Menu
        </Button>
      </Container>
    );
  }

  return (
    <div className="cart-page-container">
      {/* Fixed Header */}
      <div className="cart-header">
        <Container>
          <div className="header-content">
            <h1>Your Cart</h1>
            <Button variant="outline-danger" onClick={handleClearCart}>
              Clear All
            </Button>
          </div>
        </Container>
      </div>

      {/* Content Container */}
      <Container className="cart-content-container">
        <Row>
          {/* Scrollable Items Column */}
          <Col lg={8} className="items-column">
            <div className="items-list">
              {cartItems.map(item => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>
          </Col>

          {/* Sticky Summary Column */}
          <Col lg={4} className="summary-column">
            <Card className="summary-card">
              <Card.Body>
                <h5>Order Summary</h5>
                <div className="summary-row">
                  <span>Items ({totalQuantity}):</span>
                  <span>${totalAmount.toFixed(2)}</span>
                </div>
                <div className="summary-row">
                  <span>Delivery:</span>
                  <span className="text-success">FREE</span>
                </div>
                <hr />
                <div className="summary-row total-row">
                  <span>Total:</span>
                  <span>${totalAmount.toFixed(2)}</span>
                </div>
                <Button 
                  variant="success" 
                  size="lg" 
                  className="checkout-btn"
                  as={Link}
                  to="/checkout"
                >
                  Proceed to Checkout
                </Button>
                <Button 
                  variant="outline-primary" 
                  className="continue-btn"
                  as={Link}
                  to="/menu"
                >
                  Continue Shopping
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Cart;