import React, { useState } from 'react';
import axios from 'axios';

const JoinRide = ({ rideId, userId }) => {
  const [message, setMessage] = useState('');

  const handleJoin = async () => {
    try {
      // Make an HTTP POST request to join the ride
      const response = await axios.post(
        `http://localhost:5000/ride/join/${rideId}`,
        { user_id: userId }, // Include the user_id in the request body
      );

      // Check the response for success
      if (response.status === 200) {
        // The user successfully joined the ride
        setMessage('User joined the ride successfully.');
      } else {
        // Handle any other success cases as needed
        setMessage('Error: Unable to join the ride.');
      }
    } catch (error) {
      // Handle any errors, such as if the ride or user data is invalid
      setMessage('Error: Unable to join the ride.');
    }
  };

  return (
    <div>
      <button onClick={handleJoin}>Join Ride</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default JoinRide;
