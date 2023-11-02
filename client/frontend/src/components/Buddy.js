import React from 'react'
import { Link } from 'react-router-dom';

const Buddy = () => {
  return (
    <div>
      <p>
        Here is a List of Your Cyclist Friends.<br />
        List Loading...
      </p>
      <Link to="/">Go to Home page? Click here</Link>
    </div>
  )
}

export default Buddy
