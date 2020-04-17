import React from "react"
import { Link } from 'gatsby'

function Homepage() {
  return (
    <div className="center">
      <h1>This is the Homepage!</h1>
      <Link to="/planner/"><button>Click Me!</button></Link>
    </div>
  )
}

export default Homepage
