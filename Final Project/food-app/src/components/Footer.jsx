import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <Container>
        <Row>
          <Col md={4}>
            <h5>Food Fusion</h5>
            <p>Delicious meals for every taste</p>
          </Col>
          <Col md={4}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-white">Home</a></li>
              <li><a href="/menu" className="text-white">Menu</a></li>
              <li><a href="/cart" className="text-white">Cart</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Contact Us</h5>
            <p>Email: info@foodfusion.com</p>
            <p>Phone: (123) 456-7890</p>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col className="text-center">
            <p>&copy; {new Date().getFullYear()} Food Fusion. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer;