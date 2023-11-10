import React from 'react';
import '../assets/css/liveRide.css';
import { Container, Row, Col } from 'react-bootstrap';
//import { Link } from 'react-router-dom';
import SideNav from "./SideNav.js";
import TopBar from "./TopBar.js";

const LiveRide = () => {
  return (    
    <>
    <TopBar />
    <SideNav />
    <Container fluid className="liveride-container">
    
      <Row className="justify-content-center align-items-center h-100">
        <Col xs={12} sm={8} md={6} lg={4}>
          <div className="liveride-content liveride-box">
            <h1 className="liveride-title">Ongoing Rides!</h1>
            <h3 className="liveride-subtitle">Join one?</h3>
            <p className="liveride-message">Loading....</p>
            
          </div>
        </Col>
      </Row>
    </Container>
    </>
  );
};

export default LiveRide;
