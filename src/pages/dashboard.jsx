import React, { Fragment } from "react"
import Header from '../components/Header'

function Dashboard() {
  return (
    <Fragment>
      <Header />
      <div className="center">
        <h1>This is the Dashboard!</h1>
      </div>
    </Fragment>
  )
}

export default Dashboard