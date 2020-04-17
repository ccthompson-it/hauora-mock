import React from "react"
import { Link } from 'gatsby'

function Homepage() {
  return (
    <div className="center">
      <h1>This is the Planning (?) Page</h1>
      <Link to="/"><button>Back!</button></Link>
    </div>
  )
}

export default Homepage