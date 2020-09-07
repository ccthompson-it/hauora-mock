import React from "react"
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'

function Homepage() {
  return (
    <React.Fragment>
      <Helmet>
        <title>Hauora</title>
      </Helmet>
      <div className="center">
        <h1 className="placeholder-header">Welcome to Hauora!</h1>
        <Link to="/planner/"><button className="nav-button">Sign In</button></Link>
      </div>
    </React.Fragment>
  )
}

export default Homepage
