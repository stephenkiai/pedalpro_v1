import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import JoinRide from './JoinRide';

const RideList = () => {
  const [rides, setRides] = useState([]);

  useEffect(() => {
    // Fetch rides from the backend when the component mounts
    axios.get('http://localhost:5000/ride/all')
      .then((response) => {
        setRides(response.data);
      })
      .catch((error) => {
        // Handle errors
      });
  }, []); // Empty dependency array to fetch data once when the component mounts

  return (
    <Container>
      <h2>RideList</h2>
      <Row>
        {rides.map((ride) => (
          <Col key={ride.id} xs={12} sm={6} md={4} lg={3}>
            <Card className="mb-3">
              <Card.Body>
                <Card.Title>{ride.name}</Card.Title>
                <Card.Text>{ride.description}</Card.Text>
                <JoinRide rideId={ride.id} />
                <Link to={`/ride/${ride.id}`} className="btn btn-primary">View</Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Link to="/">Go to Home page? Click here</Link>
    </Container>
  );
};

export default RideList;
