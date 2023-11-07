import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom'; // Import useParams to access route parameters
import "../assets/css/viewRide.css";
import SideNav from "./SideNav.js";


const ViewRide = () => {
  const { rideId } = useParams(); // Use useParams to access the route parameter

  const [ride, setRide] = useState({});

  useEffect(() => {
    // Fetch ride details based on the route parameter (rideId)
    axios.get(`http://localhost:5000/ride/view/${rideId}`)
      .then((response) => {
        setRide(response.data);
      })
      .catch((error) => {
        // Handle errors
      });
  }, [rideId]);

  return (
    <>
    <SideNav />
    <Container fluid className="view-ride-container">
      <div className='view-ride-box'>
      <Row>
        <Col>
          <h2 className="view-ride-heading">Ride Details</h2>
          <div className="view-ride-details">
            <strong>Name:</strong> {ride.name}
          </div>
          <div className="view-ride-details">
            <strong>Location:</strong> {ride.location}
          </div>
          <div className="view-ride-details">
            <strong>Distance:</strong> {ride.distance}
          </div>
          <div className="view-ride-details">
            <strong>Start Date and Time:</strong> {ride.start_datetime}
          </div>
          <Link to="/rideList" className="view-ride-link">
            Go back to RideList page? Click here
          </Link>
        </Col>
      </Row>
      </div>
    </Container>
    </>
  );
};

export default ViewRide;