import React from 'react';
import '../assets/css/market.css';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import SideNav from "./SideNav.js";
import TopBar from "./TopBar.js";

const Market = () => {
  return (
    <>
    <TopBar />
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
            
          </div>
        </Col>
      </Row>
    </Container>
    </>
  );
};

export default Market;
