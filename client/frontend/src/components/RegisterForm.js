import React, { useState } from 'react';
import axios from '../axiosConfig.js';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import '../assets/css/registerForm.css'
import { showFlashMessage, flashMessage, flashMessageType } from '../assets/scripts/flashMessage.js';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/register', { name, email, password, role });
      console.log('User registered successfully');
      showFlashMessage('Success message', 'success');

      navigate('/login');

    } catch (error) {
      console.error(error.response.data.error);
      showFlashMessage('Error message', 'error');
    }
  };
  return (
    <>
    <Row className="register-container">
      {flashMessage && <div className={flashMessageType}>{flashMessage}</div>}
      <Col md={6} className="form-container">
        <h2>Register</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="name">
            <Form.Control
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control"
            />
          </Form.Group>

          <Form.Group controlId="email">
            <Form.Control
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
            />
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
            />
          </Form.Group>

          <Form.Group controlId="role">
            <Form.Control
              as="select"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="form-control"
            >
              <option value="">Select Role</option>
              <option value="cyclist">Cyclist</option>
              <option value="business">Business</option>
              <option value="admin">Admin</option>
            </Form.Control>
          </Form.Group>

          <Button variant="primary" type="submit" className="btn-primary">
            Register
          </Button>
        </Form>

        <Link to="/login" className="form-link">
          Already have an account? Login here
        </Link>
      </Col>
    </Row>
    </>
  );
};

export default RegisterForm;
