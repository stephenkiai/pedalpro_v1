import React from 'react';
import '../assets/css/messages.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SideNav from "./SideNav.js";

const Messages = () => {
  return (
    <>
    <SideNav />
    <Container fluid className="messages-container">
      <Row className="justify-content-center align-items-center h-100">
        <Col xs={12} sm={8} md={6} lg={4}>
          <div className="messages-content">
            <h1>Messages Section</h1>
            <p>Messages Loading...<br />
            Did You Know That Cycling is a Full Body Workout!? Now You Know.

            </p>
            
          </div>
        </Col>
      </Row>
    </Container>
    </>
  );
};

export default Messages;
