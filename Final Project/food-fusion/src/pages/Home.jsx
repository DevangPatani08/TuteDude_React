import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getRandomMeal, fetchCategories } from '../services/api';
import Loading from '../components/Loading';

const HomePage = () => {
  // State management
  const [featuredMeal, setFeaturedMeal] = React.useState(null);
  const [categories, setCategories] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  // Data loading effect
  useEffect(() => {
    const loadAllData = async () => {
      setIsLoading(true);
      try {
        // Fetch both data sources at once
        const [randomMealData, allCategories] = await Promise.all([
          getRandomMeal(),
          fetchCategories()
        ]);

        setFeaturedMeal(randomMealData);
        
        // Move miscellaneous to end if it exists
        let organizedCategories = [...allCategories];
        const miscIndex = organizedCategories.findIndex(c => c.strCategory === 'Miscellaneous');
        if (miscIndex > -1) {
          const [miscItem] = organizedCategories.splice(miscIndex, 1);
          organizedCategories.push(miscItem);
        }
        
        // Alphabetical sort for the rest
        organizedCategories.sort((a, b) => 
          a.strCategory.localeCompare(b.strCategory)
        );
        
        setCategories(organizedCategories);
      } catch (err) {
        console.log('Problem loading data:', err);
      } finally {
        setIsLoading(false);
      }
    };

    loadAllData();
  }, []);

  // Show loading state if needed
  if (isLoading) {
    return <Loading />;
  }

  // Main render
  return (
    <div className="page-wrapper">
      {/* Hero banner section */}
      <section className="hero-banner" style={{ 
        padding: '3rem 0',
        background: 'linear-gradient(135deg, #ff6b6b 0%, #ff8e53 100%)'
      }}>
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-4 mb-lg-0">
              <h1 style={{
                fontSize: 'calc(1.5rem + 2vw)',
                fontWeight: 800,
                color: 'white',
                marginBottom: '1.5rem'
              }}>
                Discover Culinary Delights
              </h1>
              <p className="text-light" style={{ 
                fontSize: '1.25rem',
                marginBottom: '2rem'
              }}>
                Explore our handcrafted menu featuring the finest dishes from around the world, 
                delivered straight to your doorstep.
              </p>
              <div className="d-flex gap-3">
                <Button 
                  as={Link} 
                  to="/menu" 
                  variant="light" 
                  size="lg"
                  style={{
                    padding: '0.5rem 1.5rem',
                    fontWeight: 700,
                    color: '#dc3545'
                  }}
                >
                  Order Now
                </Button>
                <Button 
                  as={Link} 
                  to="#categories" 
                  variant="outline-light" 
                  size="lg"
                  style={{
                    padding: '0.5rem 1.5rem',
                    fontWeight: 700
                  }}
                >
                  View Categories
                </Button>
              </div>
            </Col>
            <Col lg={6}>
              {featuredMeal && (
                <div style={{ position: 'relative' }}>
                  <img 
                    src={featuredMeal.strMealThumb} 
                    alt={featuredMeal.strMeal}
                    className="img-fluid rounded-4 shadow"
                    style={{
                      maxHeight: '400px',
                      width: '100%',
                      objectFit: 'cover'
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    backgroundColor: '#dc3545',
                    color: 'white',
                    padding: '0.25rem 1rem',
                    borderRadius: '50rem',
                    fontSize: '0.875rem',
                    fontWeight: 600
                  }}>
                    Chef's Special
                  </div>
                </div>
              )}
            </Col>
          </Row>
        </Container>
      </section>

      {/* Food categories section */}
      <section id="categories" style={{ 
        padding: '3rem 0',
        backgroundColor: '#f8f9fa'
      }}>
        <Container>
          <div className="text-center mb-5">
            <h2 style={{
              fontSize: 'calc(1.3rem + 1.5vw)',
              fontWeight: 700,
              marginBottom: '1rem'
            }}>
              All Food Categories
            </h2>
            <p className="text-muted" style={{ 
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Browse our complete collection of culinary categories
            </p>
          </div>
          
          <Row xs={2} md={3} lg={4} style={{ margin: '-1rem' }}>
            {categories.map((cat) => (
              <Col key={cat.idCategory} style={{ padding: '1rem' }}>
                <Card 
                  as={Link} 
                  to={`/menu?category=${cat.strCategory}`}
                  style={{
                    height: '100%',
                    textDecoration: 'none',
                    border: 'none',
                    boxShadow: '0 0.125rem 0.25rem rgba(0,0,0,0.075)',
                    overflow: 'hidden',
                    transition: 'transform 0.2s'
                  }}
                  className="hover-effect"
                >
                  <div style={{ position: 'relative', height: '180px' }}>
                    <Card.Img 
                      variant="top" 
                      src={cat.strCategoryThumb} 
                      style={{
                        height: '100%',
                        width: '100%',
                        objectFit: 'cover'
                      }}
                      alt={cat.strCategory}
                    />
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      backgroundColor: 'rgba(0,0,0,0.5)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontWeight: 600,
                      fontSize: '1.25rem'
                    }}>
                      {cat.strCategory}
                    </div>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Promo banner */}
      <section style={{ 
        padding: '1.5rem 0',
        backgroundColor: '#dc3545',
        color: 'white'
      }}>
        <Container>
          <Row className="align-items-center" style={{ minHeight: '8rem' }}>
            <Col md={8}>
              <h3 style={{ 
                fontWeight: 700,
                marginBottom: '0.5rem'
              }}>
                Free Delivery on First Order!
              </h3>
            </Col>
            <Col md={4} className="text-md-end">
              <Button 
                variant="light" 
                size="sm" 
                style={{
                  fontWeight: 700,
                  color: '#dc3545'
                }}
                as={Link}
                to="/menu"
              >
                Order Now
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default HomePage;