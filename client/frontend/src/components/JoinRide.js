import React, { useState } from 'react';
import axios from 'axios';

const JoinRide = ({ rideId }) => {
  const [message, setMessage] = useState('');
  
  const handleJoin = async () => {
    try {
      // Make an HTTP POST request to join the ride
      const response = await axios.post(`http://localhost:5000/ride/join/${rideId}`);

      // Check the response for success
      if (response.status === 201) {
        // The ride was successfully joined
        setMessage('Successfully joined the ride!');
      } else {
        // Handle any other success cases as needed
      }
    } catch (error) {
      // Handle any errors, such as if the user is already a participant
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
