import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Button, Form, Modal, Spinner, Alert, Card, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    email: '',
    username: ''
  });
  const [isEditing, setIsEditing] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);
  const [formErrors, setFormErrors] = useState({});

  const API_URL = 'https://jsonplaceholder.typicode.com/users';

  const validateUniqueUser = (newUser) => {
    const emailExists = users.some(user => 
      user.email.toLowerCase() === newUser.email.toLowerCase() &&
      user.id !== newUser.id); // Exclude current user when editing
    
    const usernameExists = users.some(user => 
      user.username.toLowerCase() === newUser.username.toLowerCase() &&
      user.id !== newUser.id); // Exclude current user when editing

    const errors = {};
      if (emailExists) errors.email = 'Email already exists';
      if (usernameExists) errors.username = 'Username already exists';
  
    return {
      isValid: Object.keys(errors).length === 0,
      errors
    };
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await axios.get(API_URL);
      setUsers(response.data);
      setLoading(false);
      setError(null);
    } catch (err) {
      setError('Failed to fetch users. Please try again later.');
      setLoading(false);
    }
  };

  const validateForm = () => {
    const errors = {};
    
    if (!formData.name.trim()) errors.name = 'Name is required';
    
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }

    if (!formData.username.trim()) {
      errors.username = 'Username is required';
    } else if (formData.username.includes(' ')) {
      errors.username = 'Username cannot contain spaces';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    const { isValid, errors } = validateUniqueUser(formData);
      if (!isValid) {
        setFormErrors({ ...formErrors, ...errors });
        return;
    }

    try {
      setLoading(true);
      if (isEditing) {
        await axios.put(`${API_URL}/${formData.id}`, formData);
        setUsers(users.map(user => user.id === formData.id ? formData : user));
      } else {
        const response = await axios.post(API_URL, formData);
        setUsers([...users, response.data]);
      }
      setShowModal(false);
      resetForm();
      setError(null);
    } catch (err) {
      setError(`Failed to ${isEditing ? 'update' : 'add'} user. Please try again.`);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (user) => {
    setFormData({
      id: user.id,
      name: user.name,
      email: user.email,
      username: user.username
    });
    setIsEditing(true);
    setShowModal(true);
  };

  const handleDelete = async () => {
    try {
      setLoading(true);
      await axios.delete(`${API_URL}/${userToDelete}`);
      setUsers(users.filter(user => user.id !== userToDelete));
      setShowDeleteConfirm(false);
      setError(null);
    } catch (err) {
      setError('Failed to delete user. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setFormData({
      id: '',
      name: '',
      email: '',
      username: ''
    });
    setIsEditing(false);
    setFormErrors({});
  };

  const renderUserCards = () => (
    <Row className="g-3">
      {users.map(user => (
        <Col key={user.id} xs={12} md={6} lg={4} xl={3}>
          <Card className="h-100">
            <Card.Body className="d-flex flex-column">
              <div className="d-md-flex align-items-md-center mb-2 mb-md-0">
                <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '40px', height: '40px', fontSize: '18px' }}>
                  {user.name.charAt(0)}
                </div>
                <div>
                  <Card.Title className="mb-0">{user.name}</Card.Title>
                  <Card.Text className="text-muted small mb-0">@{user.username}</Card.Text>
                </div>
              </div>
              
              <div className="mt-2">
                <div className="d-flex align-items-center mb-1">
                  <i className="bi bi-envelope me-2"></i>
                  <span className="text-truncate">{user.email}</span>
                </div>
              </div>
              
              <div className="mt-auto pt-2 d-flex justify-content-end">
                <Button variant="outline-info" size="sm" className="me-2" onClick={() => handleEdit(user)}>
                  <i className="bi bi-pencil"></i>
                </Button>
                <Button variant="outline-danger" size="sm" onClick={() => {
                  setUserToDelete(user.id);
                  setShowDeleteConfirm(true);
                }}>
                  <i className="bi bi-trash"></i>
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );

  return (
    <Container className="py-4" style={{ maxWidth: '95%' }}>
      <h1 className="text-center mb-4">User Management</h1>
      
      {error && <Alert variant="danger" onClose={() => setError(null)} dismissible>{error}</Alert>}
      
      <div className="d-flex justify-content-between mb-3">
        <Button variant="primary" onClick={() => setShowModal(true)}>
          <i className="bi bi-plus-circle me-1"></i> Add User
        </Button>
        {loading && <Spinner animation="border" variant="primary" />}
      </div>
      
      {users.length > 0 ? (
        renderUserCards()
      ) : (
        !loading && <p className="text-center">No users found.</p>
      )}
      
      <Modal show={showModal} onHide={() => {
        setShowModal(false);
        resetForm();
      }}>
        <Modal.Header closeButton>
          <Modal.Title>{isEditing ? 'Edit User' : 'Add User'}</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name="name" value={formData.name} onChange={handleInputChange} isInvalid={!!formErrors.name} />
              <Form.Control.Feedback type="invalid">
                {formErrors.name}
              </Form.Control.Feedback>
            </Form.Group>
            
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" name="email" value={formData.email} onChange={handleInputChange} isInvalid={!!formErrors.email} />
              <Form.Control.Feedback type="invalid">
                {formErrors.email}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" name="username" value={formData.username} onChange={handleInputChange} isInvalid={!!formErrors.username} />
              <Form.Control.Feedback type="invalid">
                {formErrors.username}
              </Form.Control.Feedback>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => {
              setShowModal(false);
              resetForm();
            }}>
              Close
            </Button>
            <Button variant="primary" type="submit" disabled={loading}>
              {loading ? (
                <>
                  <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
                  <span className="visually-hidden">Loading...</span>
                </>
              ) : isEditing ? 'Update' : 'Save'}
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>

      <Modal show={showDeleteConfirm} onHide={() => setShowDeleteConfirm(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete this user? This action cannot be undone.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDeleteConfirm(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDelete} disabled={loading}>
            {loading ? (
              <>
                <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
                <span className="visually-hidden">Loading...</span>
              </>
            ) : 'Delete'}
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default App;