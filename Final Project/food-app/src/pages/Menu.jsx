import React, { useEffect, useRef } from 'react'
import { useState } from 'react';
import { Button, Col, Container, Nav, Row, Spinner } from 'react-bootstrap';
import { fetchCategories, fetchMealByCategory } from '../services/api';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import FoodCard from '../components/FoodCard';
import { Link, useLocation } from 'react-router-dom';

const Menu = () => {
  const [categories, setCategories] = useState([]);
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('');
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const navRef = useRef(null);
  const contentRef = useRef(null);

  const loaction = useLocation();

  // Check scroll position and toggle arrow visibility
  const checkScroll = () => {
    if (navRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = navRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  // Scroll navigation horizontally
  const scroll = (d) => {
    if (navRef.current) {
      navRef.current.scrollBy({
        left: d === 'left' ? -200 : 200,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const loadCategories = async () => {
      const data = await fetchCategories();
      
      const misCategory = data.find(c => c.strCategory === 'Miscellaneous');

      const otherCategory = data.filter(c => c.strCategory !== 'Miscellaneous').sort((a, b) => a.strCategory.localeCompare(b.strCategory));
      
      const sortedCategories = [...otherCategory];

      if (misCategory) {
        sortedCategories.push(misCategory);
      }

      setCategories(sortedCategories);
      const params = new URLSearchParams(loaction.search);
      const urlCategory = params.get('category');

      if (urlCategory && sortedCategories.some(c => c.strCategory === urlCategory)) {
        setActiveCategory(urlCategory);
      } else if (sortedCategories.length > 0) {
        setActiveCategory(sortedCategories[0].strCategory);
      }
    };

    loadCategories();
  }, [loaction.search]);

  useEffect(() => {
    const loadMeals = async () => {
      if (activeCategory) {
        setLoading(true);
        const data = await fetchMealByCategory(activeCategory);
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
        contentRef.current.style.minHeight = `${calculatedHeight}`;
      }
    }
  }, [meals]);



  return (
    <Container className='my-5 position-relative' style={{ minHeight: '100vh' }}>
      <Button as={Link} to='/' variant='outline-secondary' size='sm' className='mb-3 d-flex align-items-center gap-1 px-3' style={{width: 'fit-content'}}>
        <i className="bi bi-arrow-left-short" style={{fontSize: '1.5rem'}}></i>
        <span className="fw-bold">Back to Home</span>
      </Button>
      <div className="text-center mb-5">
        <h1 className='display-4 fw-bold mb-3'>Our Menu</h1>
        <p className='text-muted'>Discover delicious meals from every category</p>
      </div>

      {/* Category navigation */}
      <div className="position-relative">
        {showLeftArrow && (
          <button onClick={() => scroll('left')} aria-label='Scroll left' className='position-absolute start-0 top-50 translate-middle-y bg-white border-0 rounded-circle shadow-sm p-2 z-1' style={{ left: '-15px' }}>
            <BiChevronLeft size={24} />
          </button>
        )}

        <Nav ref={navRef} variant='pills' activeKey={activeCategory} onSelect={(k) => setActiveCategory(k)} className='flex-nowrap mb-5 pb-2 overflow-auto scroll-hidden' style={{ scrollbarWidth: 'none', scrollBehavior: 'smooth' }}>
          {categories.map(c => (
            <Nav.Item key={c.strCategory} className='flex-shrink-0 px-1'>
              <Nav.Link eventKey={c.strCategory} className='text-nowrap rounded-pill px-3 py-2' style={{ fontWeight: 500, color: activeCategory === c.strCategory ? 'white' : 'inherit', whiteSpace: 'nowrap' }} onClick={() => { window.scrollTo(0, 0); }}>
                {c.strCategory}
              </Nav.Link>
            </Nav.Item>
          ))}
        </Nav>

        {showRightArrow && (
          <button onClick={() => scroll('right')} className='position-absolute end-0 top-50 translate-middle-y bg-white border-0 rounded-circle shadow-sm p-2 z-1' style={{ right: '-15px' }} aria-label='Scroll right'>
            <BiChevronRight size={24} />
          </button>
        )}
      </div>

      {/* Content Area */}
      <div ref={contentRef} className='position-relative'>
        {loading ? (
          <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-white" style={{ zIndex: 1 }}>
            <div className="text-center">
              <Spinner animation='border' variant='danger' role='status'>
                <span className='visually-hidden'>Loading...</span>
              </Spinner>
              <p className="mt-3 text-muted">Loading delicious meals...</p>
            </div>
          </div>
        ) : (null)}

        <div className={`transition-opacity ${loading ? 'opacity-50' : 'opacity-100'}`}>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 className="mb-0">{activeCategory}</h2>
            <small className='text-muted'>{meals.length} items</small>
          </div>

          <Row xs={1} md={2} lg={3} xxl={4} className='g-4'>
            {meals.map(meal => (
              <Col key={meal.idMeal} className='food-card'>
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
  )
}

export default Menu;