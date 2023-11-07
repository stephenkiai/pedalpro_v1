import React, { useState } from 'react';
import axios from '../axiosConfig.js';
import { Form, Button, Container, Row, Col} from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { showFlashMessage, flashMessage, flashMessageType } from '../assets/scripts/flashMessage.js';
import '../assets/css/flashMessage.css'
import '../assets/css/loginForm.css'

const LoginForm = () => {
  const [loginIdentifier, setLoginIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/login', { login_identifier: loginIdentifier, password });
      console.log(`Authentication successful. Role: ${response.data.role}`);
      //to remove console.log when deploying
      
      navigate('/dashboard');  //redirect to dashboard
      showFlashMessage('Success message', 'success');
      

    } catch (error) {
      console.error(error.response.data.error);
      showFlashMessage('Error message', 'error');
    }
  };

  return (
    <>
      {flashMessage && <div className={flashMessageType}>{flashMessage}</div>}
      <Row className="login-container">
        <Col md={6} className="form-container">
          <h2>Login</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="loginIdentifier">
              <Form.Control
                className="form-control"
                type="text"
                placeholder="Email or Username"
                value={loginIdentifier}
                onChange={(e) => setLoginIdentifier(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Control
                className="form-control"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Button className="btn-primary" type="submit">
              Login
            </Button>
          </Form>

          <div className="login-links">
            <Link to="/register">Don't have an account? Register here</Link>
            <Link to="/forgot-password">Forgot Password? Click here</Link>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default LoginForm;
