import { Card, Button, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../store/cartSlice';
import { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

function FoodCard({ meal }) {
  const dispatch = useDispatch();
  const [isHovered, setIsHovered] = useState(false);
  
  const cartItem = useSelector(state => 
    state.cart.items.find(item => item.id === meal.idMeal)
  );
  
  const quantity = cartItem ? cartItem.quantity : 0;
  
  const addToCart = () => {
    dispatch(cartActions.addItem({
      id: meal.idMeal,
      name: meal.strMeal,
      price: 9.99,
      image: meal.strMealThumb,
      category: meal.strCategory
    }));
  };

  const incrementQuantity = () => {
    dispatch(cartActions.addItem({ id: meal.idMeal }));
  };

  const decrementQuantity = () => {
    dispatch(cartActions.removeItem(meal.idMeal));
  };

  return (
    <Card  className="h-100 border-0 overflow-hidden" style={{  transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)', transform: isHovered ? 'translateY(-8px)' : 'none', boxShadow: isHovered ? '0 12px 24px rgba(0,0,0,0.1)' : '0 4px 12px rgba(0,0,0,0.05)'}} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <div className="position-relative overflow-hidden" style={{ height: '200px' }}>
        <Card.Img variant="top" src={meal.strMealThumb} alt={meal.strMeal} style={{  height: '100%', width: '100%', objectFit: 'cover', transform: isHovered ? 'scale(1.05)' : 'scale(1)', transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)' }} />
        <Badge bg="light" text="dark" className="position-absolute top-0 end-0 m-2 px-2 py-1 rounded-pill" style={{ transition: 'all 0.3s ease', opacity: isHovered ? 1 : 0.8, transform: isHovered ? 'translateY(0)' : 'translateY(-10px)'}}>{meal.strCategory}</Badge>
      </div>

      <Card.Body className="d-flex flex-column p-3">
        <Card.Title className="mb-2 fw-bold" style={{ minHeight: '48px', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{meal.strMeal}</Card.Title>
        
        <div className="mt-auto">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <span className="fs-4 fw-bold text-danger">$9.99</span>
            
            <div className="d-flex gap-2">
              <Button  as={Link} to={`/food/${meal.idMeal}`} variant="outline-secondary" size="sm" className="d-flex align-items-center gap-1 px-3" style={{ transform: isHovered ? 'translateY(-2px)' : 'none', transition: 'all 0.2s ease' }}>
                <i className="bi bi-eye-fill"></i>
                <span>Details</span>
              </Button>

              {quantity === 0 ? (
                <Button  variant="danger" size="sm" className="d-flex align-items-center gap-1 px-3" onClick={addToCart} style={{ transform: isHovered ? 'translateY(-2px)' : 'none', transition: 'all 0.2s ease' }}>
                  <i className="bi bi-cart-plus-fill"></i>
                  <span>Add</span>
                </Button>
              ) : (
                <div className="d-flex align-items-center gap-2">
                  <Button variant="outline-danger" size="sm" onClick={decrementQuantity} style={{ transform: isHovered ? 'translateY(-2px)' : 'none', transition: 'all 0.2s ease' }}>
                    <i className="bi bi-dash"></i>
                  </Button>
                  <span className="fw-bold px-1">{quantity}</span>
                  <Button variant="danger" size="sm" onClick={incrementQuantity} style={{ transform: isHovered ? 'translateY(-2px)' : 'none', transition: 'all 0.2s ease' }}>
                    <i className="bi bi-plus"></i>
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default FoodCard;