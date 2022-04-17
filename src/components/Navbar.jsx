import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
      Navbar
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  )
}

export default Navbar