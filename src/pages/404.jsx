import React from "react"
import { Link } from 'gatsby'

function Homepage() {
  return (
    <div className="center">
      <h1 className="placeholder-header">There was an Error!</h1>
      <Link to="/"><button className="nav-button">Return Home</button></Link>
    </div>
  )
}

export default Homepage