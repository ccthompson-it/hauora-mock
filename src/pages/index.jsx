import React from "react"
import { Link } from 'gatsby'

function Homepage() {
  return (
    <div className="center">
      <h1>This is the Landing Page!</h1>
      <Link to="/planner/"><button>Sign In!</button></Link>
    </div>
  )
}

export default Homepage
