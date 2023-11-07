import React from 'react';
import '../assets/css/myBike.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SideNav from "./SideNav.js";

const MyBike = () => {
  return (
    <>
    <SideNav />
    <Container fluid className="mybike-container">
      
      <Row className="justify-content-center align-items-center h-100">
        <Col xs={12} sm={8} md={6} lg={4}>
          <div className="mybike-content">
            <h1>My Bike Profile</h1>
            <ul>
              <li>Type :</li>
              <li>Top Speed :</li>
              <li>Frame :</li>
              <li>Size :</li>
            </ul>
            
          </div>
        </Col>
      </Row>
    </Container>
    </>
  );
};

export default MyBike;
