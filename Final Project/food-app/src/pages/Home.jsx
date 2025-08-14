import { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getRandomMeal, fetchCategories } from '../services/api';
import Loading from '../components/Loading';

const Home = () => {
  const [featuredMeal, setFeaturedMeal] = useState(null);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const [randomMeal, categoriesData] = await Promise.all([getRandomMeal(), fetchCategories()]);
        setFeaturedMeal(randomMeal);
        
        
        const sortedCategories = [...categoriesData].sort((a, b) => {
          if (a.strCategory === 'Miscellaneous') return 1;
          if (b.strCategory === 'Miscellaneous') return -1;
          return a.strCategory.localeCompare(b.strCategory)
        });

        setCategories(sortedCategories);
      } catch (e) {
        console.error('Error loading data:', e);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) return <Loading />

  return (
    <div className="home-page">
      <section className="hero-section py-5">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-4 mb-lg-0">
              <h1 className="display-4 fw-bold text-white mb-4fw-bold text-white mb-4">Discover Culinary Delights</h1>
              <p className="lead text-light mb-4">Explore our handcrafted menu featuring the finest dishes from around the world, delivered straight to your doorstep.</p>
              <div className="d-flex gap-3">
                <Button as={Link} to='/menu' variant="light" size="lg" className="px-4 py-2 fw-bold text-danger">Order Now</Button>
                <Button as={Link} to='#categories' variant="outline-light" size="lg" className="px-4 py-2 fw-bold">View Categories</Button>
              </div>
            </Col>
            <Col lg={6}>
              {featuredMeal && (
                <div className="featured-meal-container position-relative">
                  <img src={featuredMeal.strMealThumb} alt={featuredMeal.strMeal} className="img-fluid rounded-4 shadow-lg featured-image" />
                  <div className="featured-badge bg-danger text-white p-2 rounded-pill">Chef's Special</div>
                </div>
              )}
            </Col>
          </Row>
        </Container>
      </section>
      {/* All category section */}
      <section id="categories" className="py-5 bg-light">
        <Container>
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">All Categories</h2>
            <p className="text-muted mx-auto" style={{ maxWidth: '600px' }}>Browse our complete collection of culinary categories</p>
          </div>

          <Row xs={2} md={3} lg={4} className="g-4">
            {categories.map((c) => (
              <Col key={c.idCategory}>
                <Card as={Link} to={`/menu?category=${c.strCategory}`} className="category-card h-100 text-decoration-none border-0 shadow-sm overflow-hidden" onClick={() => { window.scrollTo(0, 0); }}>
                  <div className="category-image-container">
                    <Card.Img variant="top" src={c.strCategoryThumb} className="category-image" alt={c.strCategory} />
                    <div className="category-overlay d-flex align-items-center justify-content-center">
                      <span className="text-white fw-bold fs-5">{c.strCategory}</span>
                    </div>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Special Offer Banner */}
      <section className="py-4 bg-danger text-white">
        <Container>
          <Row className="align-items-center" style={{ height: '8rem' }}>
            <Col lg={8}>
              <h3 className="fw-bold mb-1 mb-md-0">Free Delivery on First Order!</h3>
            </Col>
            <Col lg={4} className="text-md-end mt-2 mt-md-0">
              <Button variant="light" size="lg" as={Link} to='/menu' className="fw-bold text-danger">Order Now</Button>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Home;