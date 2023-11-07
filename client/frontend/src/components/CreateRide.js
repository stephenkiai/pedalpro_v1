import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom'; 
import "../assets/css/createRide.css";
import SideNav from "./SideNav.js";

const CreateRide = () => {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    distance: '',
    start_date: '', // Date input
    start_time: '', // Time input
  });

  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const formatTime = (time) => {
    // Ensure that the time input is in the correct format (hh:mm)
    const timeParts = time.split(':');
    if (timeParts.length === 2) {
      const hours = timeParts[0];
      const minutes = timeParts[1];
  
      // Validate that hours and minutes are within valid ranges
      if (hours >= 0 && hours <= 23 && minutes >= 0 && minutes <= 59) {
        return `${hours}:${minutes}:00`;
      }
    }
  
    // If input is not the expected format, return null/error message
    return null;
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Format the date and time
    const formattedDate = new Date(formData.start_date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    });
  
    const formattedTime = formatTime(formData.start_time);
  
    if (formattedTime) {
      const formattedStartDatetime = `${formattedDate} ${formattedTime}`;
  
      try {
        const response = await axios.post('http://localhost:5000/ride/create', {
          name: formData.name,
          location: formData.location,
          distance: formData.distance,
          start_datetime: formattedStartDatetime,
        });
        console.log(response.data.message);

        history.push(`/ride/${response.data.ride_id}`);

      } catch (error) {
        console.error(error.response.data.error);
      }
    } else {
      console.error('Invalid time format');
    }
  };
  

  return (
    <div>
      <SideNav />
      <div className="form-container">
        <h2>Create a New Ride</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Location:</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Distance:</label>
            <input
              type="text"
              name="distance"
              value={formData.distance}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Start Date:</label>
            <input
              type="date"
              name="start_date"
              value={formData.start_date}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Start Time:</label>
            <input
              type="time"
              name="start_time"
              value={formData.start_time}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="submit-button">Create Ride</button>
        </form>
      </div>
    </div>
  );
};

export default CreateRide;
