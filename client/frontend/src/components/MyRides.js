import React from 'react';
import '../assets/css/myRides.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SideNav from "./SideNav.js";
import TopBar from "./TopBar.js";

const MyRides = () => {
  return (
    <div>
      <TopBar />
      <SideNav />
    <Container fluid className="myrides-container">
      <Row className="justify-content-center align-items-center h-100">
        <Col xs={12} sm={8} md={6} lg={4}>
          <div className="myrides-content myrides-box">
            <h1 className="myrides-title">Rides That Am Going</h1>
            <p className="myrides-message">Loading....<br />
            In a Moment
            </p>
            
          </div>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default MyRides;
