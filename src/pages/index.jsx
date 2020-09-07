import React from "react"
import { Link } from 'gatsby'

function Homepage() {
  return (
    <div className="center">
      <h1 className="placeholder-header">Welcome to Hauora!</h1>
      <Link to="/planner/"><button className="nav-button">Sign In</button></Link>
    </div>
  )
}

export default Homepage
