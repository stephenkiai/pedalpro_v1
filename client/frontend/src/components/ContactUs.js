import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import '../assets/css/contactUs.css'
import { Link } from 'react-router-dom';

const ContactUs = () => {
    return (
      <Container>
        <h2>Contact Us</h2>
        <Form>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Your Name" />
          </Form.Group>
  
          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Your Email" />
          </Form.Group>
  
          <Form.Group controlId="message">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={4} placeholder="Your Message" />
          </Form.Group>
  
          <Button variant="primary" type="submit" style={{ marginRight: '20px' }}>
            Send Message
          </Button>
          <Link to="/">Go to Home page? Click here</Link>
        </Form>
      </Container>
    );
  };
  
  export default ContactUs;
  