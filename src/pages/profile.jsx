import React, { Component, Fragment } from "react"
import { Link } from 'gatsby'
import Header from '../components/Header'

function Profile() {
  return (
    <Fragment>
      <Header />
      <div className="center">
        <h1>This is the Profile!</h1>
        <Link to="/"><button>Sign Out!</button></Link>
      </div>
    </Fragment>
  )
}

export default Profile