import { useEffect, useState, useRef } from 'react';
import { Container, Row, Col, Spinner, Nav } from 'react-bootstrap';
import { useLocation } from 'react-router-dom'; // Import useLocation
import { fetchCategories, fetchMealsByCategory } from '../services/api';
import FoodCard from '../components/FoodCard';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';

function Menu() {
  const [categories, setCategories] = useState([]);
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('');
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const navRef = useRef(null);
  const contentRef = useRef(null);
  
  const location = useLocation(); // Get the location object

  // Check scroll position and toggle arrow visibility
  const checkScroll = () => {
    if (navRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = navRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  // Scroll navigation horizontally
  const scroll = (direction) => {
    if (navRef.current) {
      navRef.current.scrollBy({
        left: direction === 'left' ? -200 : 200,
        behavior: 'smooth'
      });
    }
  };

  // Effect to load categories and set initial active category from URL
  useEffect(() => {
    const loadCategories = async () => {
      const data = await fetchCategories();
      
      const miscCategory = data.find(c => c.strCategory === 'Miscellaneous');
      const otherCategories = data
        .filter(c => c.strCategory !== 'Miscellaneous')
        .sort((a, b) => a.strCategory.localeCompare(b.strCategory));
      
      const sortedCategories = [...otherCategories];
      if (miscCategory) {
        sortedCategories.push(miscCategory);
      }
      
      setCategories(sortedCategories);

      // Get category from URL search parameters
      const params = new URLSearchParams(location.search);
      const urlCategory = params.get('category');
      
      if (urlCategory && sortedCategories.some(c => c.strCategory === urlCategory)) {
        setActiveCategory(urlCategory);
      } else if (sortedCategories.length > 0) {
        setActiveCategory(sortedCategories[0].strCategory);
      }
    };
    loadCategories();
  }, [location.search]); // Depend on location.search to re-run when URL changes

  useEffect(() => {
    const loadMeals = async () => {
      if (activeCategory) {
        setLoading(true);
        const data = await fetchMealsByCategory(activeCategory);
        setMeals(data);
        setLoading(false);
      }
    };
    loadMeals();
  }, [activeCategory]);

  useEffect(() => {
    const navElement = navRef.current;
    if (navElement) {
      navElement.addEventListener('scroll', checkScroll);
      checkScroll();
    }
    return () => {
      if (navElement) {
        navElement.removeEventListener('scroll', checkScroll);
      }
    };
  }, [categories]);

  useEffect(() => {
    if (contentRef.current) {
      const cards = contentRef.current.querySelectorAll('.food-card');
      if (cards.length > 0) {
        const cardHeight = cards[0].offsetHeight;
        const rowGap = parseInt(getComputedStyle(contentRef.current).gap);
        const rows = Math.ceil(cards.length / 4);
        const calculatedHeight = (cardHeight * rows) + (rowGap * (rows - 1));
        contentRef.current.style.minHeight = `${calculatedHeight}px`;
      }
    }
  }, [meals]);

  return (
    <Container className="my-5 position-relative min-vh-100">
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold mb-3">Our Menu</h1>
        <p className="text-muted lead">Discover delicious meals from every category</p>
      </div>
      
      <div className="position-relative">
        {showLeftArrow && (
          <button 
            onClick={() => scroll('left')}
            className="position-absolute start-0 top-50 translate-middle-y bg-white border-0 rounded-circle shadow-sm p-2 z-1"
            style={{ left: '-15px' }}
            aria-label="Scroll left"
          >
            <BiChevronLeft size={24} />
          </button>
        )}
        
        <Nav 
          ref={navRef}
          variant="pills" 
          activeKey={activeCategory}
          onSelect={(k) => setActiveCategory(k)}
          className="flex-nowrap mb-5 pb-2 overflow-auto scroll-hidden"
          style={{ 
            scrollbarWidth: 'none',
            scrollBehavior: 'smooth'
          }}
        >
          {categories.map(category => (
            <Nav.Item key={category.strCategory} className="flex-shrink-0 px-1">
              <Nav.Link 
                eventKey={category.strCategory}
                className="text-nowrap rounded-pill px-3 py-2"
                style={{
                  fontWeight: 500,
                  color: activeCategory === category.strCategory ? 'white' : 'inherit',
                  whiteSpace: 'nowrap'
                }}
              >
                {category.strCategory}
              </Nav.Link>
            </Nav.Item>
          ))}
        </Nav>
        
        {showRightArrow && (
          <button 
            onClick={() => scroll('right')}
            className="position-absolute end-0 top-50 translate-middle-y bg-white border-0 rounded-circle shadow-sm p-2 z-1"
            style={{ right: '-15px' }}
            aria-label="Scroll right"
          >
            <BiChevronRight size={24} />
          </button>
        )}
      </div>
      
      <div ref={contentRef} className="position-relative">
        {loading ? (
          <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-white" style={{ zIndex: 1 }}>
            <div className="text-center">
              <Spinner animation="border" variant="danger" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
              <p className="mt-3 text-muted">Loading delicious meals...</p>
            </div>
          </div>
        ) : null}
        
        <div className={`transition-opacity ${loading ? 'opacity-50' : 'opacity-100'}`}>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 className="mb-0">{activeCategory}</h2>
            <small className="text-muted">{meals.length} items</small>
          </div>
          
          <Row xs={1} md={2} lg={3} xxl={4} className="g-4">
            {meals.map(meal => (
              <Col key={meal.idMeal} className="food-card">
                <FoodCard meal={meal} />
              </Col>
            ))}
          </Row>
          
          {meals.length === 0 && !loading && (
            <div className="text-center py-5 my-5">
              <h4 className="text-muted">No meals found in this category</h4>
              <p>Try selecting a different category</p>
            </div>
          )}
        </div>
      </div>
    </Container>
  );
}

export default Menu;