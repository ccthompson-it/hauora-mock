import React, { Fragment } from "react"
import { Link } from 'gatsby'
import Header from '../components/Header'

function Profile() {
  return (
    <Fragment>
      <Header />
      <div className="center">
        <h1>This is the Profile!</h1>
      </div>
    </Fragment>
  )
}

export default Profile