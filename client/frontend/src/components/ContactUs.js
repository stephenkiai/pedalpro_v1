import React from 'react';
import '../assets/css/contactUs.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SideNav from "./SideNav.js";
import TopBar from "./TopBar.js";

const ContactUs = () => {
  return (
    <>
    <TopBar />
    <SideNav />
    <Container fluid className="contact-us-container">
      <Row className="justify-content-center align-items-center h-100">
        <Col xs={12} sm={8} md={6} lg={4}>
          <div className="contact-us-content">
            <h1>Contact The Developer..</h1>
            <h3>Find My Other Works On These Links</h3>
            <ul>
              <li>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://www.x.com" target="_blank" rel="noopener noreferrer">
                  X.com
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </li>
            </ul>
            
          </div>
          
        </Col>
      </Row>
    </Container>
    </>
  );
};

export default ContactUs;
