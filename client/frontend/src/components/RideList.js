import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import JoinRide from './JoinRide';
import "../assets/css/rideList.css"
import SideNav from "./SideNav.js";

const RideList = () => {
  const [rides, setRides] = useState([]);

  useEffect(() => {
    // Fetch rides from the backend
    axios.get('http://localhost:5000/ride/all')
      .then((response) => {
        setRides(response.data);
      })
      .catch((error) => {
        // Handle errors
      });
  }, []);

  return (
    <div>
      <SideNav />
    <div className="ride-list-outer-container">
      <h1>RideList</h1>
      <div className="ride-list-container">
        {rides.map((ride) => (
          <Card key={ride.id} className="ride-card">
            <Card.Body>
              <Card.Title>{ride.name}</Card.Title>
              <Card.Text>{ride.description}</Card.Text>
              <JoinRide rideId={ride.id} />
              <Link to={`/ride/${ride.id}`} className="btn btn-primary">View</Link>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
    </div>
  );
};

export default RideList;
