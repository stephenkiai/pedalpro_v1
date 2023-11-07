import React from 'react';
import '../assets/css/market.css';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import SideNav from "./SideNav.js";

const Market = () => {
  return (
    <>
    <SideNav />
    <Container fluid className="market-container">
      <Row className="justify-content-center align-items-center h-100">
        <Col xs={12} sm={8} md={6} lg={4}>
          <div className="market-content">
            <h1>Cyclist Open Market</h1>
            <p>
              Our Team is working to bring you a Cyclist <br />
              <strong>Ecommerce!</strong>
            </p>
            <Link to="/dashboard" className="btn btn-primary">Go to Dashboard page? Click here</Link>
          </div>
        </Col>
      </Row>
    </Container>
    </>
  );
};

export default Market;
