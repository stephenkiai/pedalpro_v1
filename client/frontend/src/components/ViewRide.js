import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ViewRide = ({ match }) => {
  const [ride, setRide] = useState(null);

  useEffect(() => {
    // Fetch ride details by ID from the backend when the component mounts
    const rideId = match.params.rideId;
    axios.get(`http://localhost:5000/ride/view/${rideId}`)
      .then((response) => {
        setRide(response.data);
      })
      .catch((error) => {
        // Handle errors, e.g., ride not found
      });
  }, [match.params.rideId]); // Dependency on rideId to fetch data when it changes

  return (
    <Container>
      <h2>Ride Details</h2>
      {ride ? (
        <Card className="mb-3">
          <Card.Body>
            <Card.Title>{ride.name}</Card.Title>
            <Card.Text>
              <strong>Location:</strong> {ride.location}<br />
              <strong>Distance:</strong> {ride.distance}<br />
              <strong>Start Date and Time:</strong> {ride.start_datetime}
            </Card.Text>
          </Card.Body>
        </Card>
      ) : (
        <p>Ride details not found.</p>
      )}
      <Link to="/rides">Back to Ride List</Link>
    </Container>
  );
};

export default ViewRide;
