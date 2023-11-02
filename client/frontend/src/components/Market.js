import React from 'react'
import { Link } from 'react-router-dom';

const Market = () => {
  return (
    <div>
      <h1>Cyclist Open Market</h1>
      <p>
        Our Team is working To bring You a Cyclist Related items ONLY<br />
        <strong>Ecommerce!</strong>
      </p>
      <Link to="/">Go to Home page? Click here</Link>
    </div>
  )
}

export default Market
