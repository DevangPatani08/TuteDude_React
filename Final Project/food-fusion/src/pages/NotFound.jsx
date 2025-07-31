import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <Container className="text-center my-5 py-5">
      <h1 className="display-1">404</h1>
      <h2 className="mb-4">Page Not Found</h2>
      <p>The page you're looking for doesn't exist or has been moved.</p>
      <Button as={Link} to="/" variant="primary" size="lg">
        Go Back Home
      </Button>
    </Container>
  );
}

export default NotFound;