import React from 'react'
import { Link } from 'react-router-dom';

const Messages = () => {
  return (
    <div>
      <p>
        Welcome To The Messages Section<br />
        Messages Loading......<br />
        Visit Home-Page For More!
      </p>
      <Link to="/">Go to Home page? Click here</Link>
    </div>
  )
}

export default Messages
