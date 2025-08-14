import { useSelector } from "react-redux";
import { Badge, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import logo from '../assets/logo.png';

const Header = () => {
  const totalUniqueItems = useSelector(state => state.cart.totalUniqueItems);

  return (
    <Navbar bg='light' expand='lg' sticky="top" style={{ position: 'sticky', top: 0, zIndex: 1050, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}>
      <Container>
        <Navbar.Brand as={Link} to='/'>
          <img src={logo} alt="Food Fusion" height={40} className="hover-effect" style={{ transition: 'transform 0.3s ease' }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/' className="fw-medium nav-link">Home</Nav.Link>
            <Nav.Link as={Link} to='/menu' className="fw-medium nav-link">Menu</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to='/cart' className="position-relative px-3" onClick={() => { window.scrollTo(0, 0); }}>
              <FaShoppingCart size={20} />
              {totalUniqueItems > 0 && (
                <Badge pill bg='danger' className="position-absolute top-0 start-100 translate-middle" style={{ fontSize: '0.65rem', minWidth: '1.25rem', textAlign: 'center' }} onClick={() => { window.scrollTo(0, 0); }}>{totalUniqueItems}</Badge>
              )}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header;