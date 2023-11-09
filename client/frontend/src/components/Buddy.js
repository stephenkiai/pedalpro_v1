import React from 'react';
import '../assets/css/buddy.css';
import { Container, Row, Col } from 'react-bootstrap';
//import { Link } from 'react-router-dom';
import SideNav from "./SideNav.js";
import TopBar from "./TopBar.js";

const Buddy = () => {
  return (
    <div className='cover_image'>
    <TopBar />
    <SideNav />
    <Container fluid className="buddy-container">
      <Row className="justify-content-center align-items-center h-100">
        <Col xs={12} sm={8} md={6} lg={4}>
          <div className="buddy-content">
            <h1>Your Cyclist Friends.<br /></h1>
            <p>
             Friend List Loading...<br />
             Cycling Friends are The Best!
            </p>
           
          </div>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default Buddy;
