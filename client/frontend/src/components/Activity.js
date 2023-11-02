import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Activity = () => {
    const rides = [
      // to replace with axios 
      { id: 1, name: 'Ride 1', description: 'Description of Ride 1' },
      { id: 2, name: 'Ride 2', description: 'Description of Ride 2' },
      
    ];
  
    return (
      <Container>
        <h2>Activity</h2>
        <Row>
          {rides.map((ride) => (
            <Col key={ride.id} xs={12} sm={6} md={4} lg={3}>
              <Card className="mb-3">
                <Card.Body>
                  <Card.Title>{ride.name}</Card.Title>
                  <Card.Text>{ride.description}</Card.Text>
                  <Button variant="primary" className="mr-2">
                    Join
                  </Button>
                  <Button variant="success">Create</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <Link to="/">Go to Home page? Click here</Link>
      </Container>
    );
  };
  
  export default Activity;
  