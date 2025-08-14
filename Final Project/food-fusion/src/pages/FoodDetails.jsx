import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col, Button, Badge, Stack, Image } from 'react-bootstrap';
import { fetchMealById } from '../services/api';
import Loading from '../components/Loading';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../store/cartSlice';

function FoodDetails() {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  // Find the item in the cart to check its quantity
  const cartItem = useSelector(state =>
    state.cart.items.find(item => item.id === id)
  );
  const quantity = cartItem ? cartItem.quantity : 0;

  useEffect(() => {
    const loadMeal = async () => {
      try {
        const data = await fetchMealById(id);
        setMeal(data);
        setLoading(false);
      } catch (error) {
        console.error('Error loading meal:', error);
        setLoading(false);
      }
    };
    loadMeal();
  }, [id]);

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

  if (loading) {
    return <Loading />;
  }

  if (!meal) {
    return (
      <Container className="text-center py-5">
        <h2 className="mb-3">Meal Not Found</h2>
        <Button as={Link} to="/menu" variant="primary">
          Back to Menu
        </Button>
      </Container>
    );
  }

  // Prepare ingredients list
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    if (meal[`strIngredient${i}`]) {
      ingredients.push({
        ingredient: meal[`strIngredient${i}`],
        measure: meal[`strMeasure${i}`]
      });
    }
  }

  return (
    <Container className="py-3 pb-6"> {/* Extra padding at bottom */}
      {/* Content Area */}
      <Button 
        as={Link} 
        to="/menu" 
        variant="outline-secondary" 
        size="sm"
        className="mb-3"
      >
        ← Back to Menu
      </Button>

      <Row className="g-4">
        <Col md={7}>
          <Image
            src={meal.strMealThumb}
            alt={meal.strMeal}
            fluid
            rounded
            className="shadow-sm w-100"
            style={{ 
              maxHeight: '640px', 
              objectFit: 'cover',
              border: '1px solid #f0f0f0'
            }}
          />
        </Col>

        <Col md={5}>
          <Stack gap={3}>
            <div>
              <h1 className="h3 fw-bold mb-2">{meal.strMeal}</h1>
              <div>
                <Badge bg="secondary" className="me-2">{meal.strCategory}</Badge>
                <Badge bg="info">{meal.strArea}</Badge>
              </div>
            </div>

            <div className="d-flex align-items-center gap-2">
              <span className="fs-4 fw-bold text-danger">$9.99</span>
              <span className="text-muted">|</span>
              <span className="text-muted">{ingredients.length} ingredients</span>
            </div>

            <div>
              <h5 className="fw-bold mb-2">Ingredients</h5>
              <div className="d-flex flex-wrap gap-2">
                {ingredients.map((item, index) => (
                  <Badge key={index} bg="light" text="dark" className="border px-3 py-2">
                    {item.ingredient} <span className="text-muted">({item.measure})</span>
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h5 className="fw-bold mb-2">Instructions</h5>
              <div className="text-muted" style={{ whiteSpace: 'pre-line' }}>
                {meal.strInstructions}
              </div>
            </div>
          </Stack>
        </Col>
      </Row>

      {/* Sticky Add-to-Cart Bar (positioned above footer) */}
      <div className="bg-white sticky-bottom-above-footer p-3 border-top shadow-sm">
        <Container>
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h4 className="mb-0">{meal.strMeal}</h4>
              <span className="text-danger fw-bold fs-5">$9.99</span>
            </div>

            {/* Conditional rendering based on quantity */}
            {quantity === 0 ? (
              <Button 
                variant="danger" 
                size="lg" 
                onClick={addToCart}
                className="px-4 py-2 fw-bold"
              >
                Add to Cart
              </Button>
            ) : (
              <div className="d-flex align-items-center gap-2">
                <Button
                  variant="outline-danger"
                  size="lg"
                  onClick={decrementQuantity}
                  className="px-4 py-2 fw-bold"
                >
                  <i className="bi bi-dash"></i>
                </Button>
                <span className="fw-bold px-4 fs-5">{quantity}</span>
                <Button
                  variant="danger"
                  size="lg"
                  onClick={incrementQuantity}
                  className="px-4 py-2 fw-bold"
                >
                  <i className="bi bi-plus"></i>
                </Button>
              </div>
            )}
          </div>
        </Container>
      </div>
    </Container>
  );
}

export default FoodDetails;