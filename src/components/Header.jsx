import React from "react"
import { Link } from 'gatsby'

function Header() {
  return (
    <React.Fragment>
      <div className="header">
        <h1 id="main-title">Hauora Planner</h1>
        <div className="nav-bar">
          <Link to="/profile/" className="nav-button" activeClassName="active-link">User Profile</Link>
          <Link to="/dashboard/" className="nav-button" activeClassName="active-link">Dashboard</Link>
          <Link to="/planner/" className="nav-button" activeClassName="active-link">Weekly Planner</Link>
          <Link to="/stats/" className="nav-button" activeClassName="active-link">Stats/Progress</Link>
          <Link to="/" className="nav-button">Sign Out</Link>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Header