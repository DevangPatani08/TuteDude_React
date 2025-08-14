import { Container, Navbar, Nav, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import logo from '../assets/logo.png';

function Header() {
  const totalUniqueItems = useSelector(state => state.cart.totalUniqueItems);
  
  return (
    <Navbar bg="light" expand="lg" sticky="top" style={{ position: 'sticky', top: 0, zIndex: 1050, boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={logo} alt="Food Fusion" height="40" style={{ transition: 'transform 0.3s ease' }} className="hover-effect" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" className="fw-medium">Home</Nav.Link>
            <Nav.Link as={Link} to="/menu" className="fw-medium">Menu</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/cart" className="position-relative px-3">
              <FaShoppingCart size={20} />
              {totalUniqueItems > 0 && (
                <Badge pill bg="danger" className="position-absolute top-0 start-100 translate-middle" style={{ fontSize: '0.65rem', minWidth: '1.25rem' }}>
                  {totalUniqueItems}
                </Badge>
              )}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;