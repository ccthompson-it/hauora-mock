import React from "react"
import { Link } from 'gatsby'

function Header() {
  return (
    <div className="nav-bar">
      <h1 id="main-title">Hauora Planner</h1>
      <div className="nav-links">
        {/* <Link to="/profile/" activeClassName="active-link">User Profile</Link> */}
        {/* <Link to="/dashboard/" activeClassName="active-link">Dashboard</Link> */}
        {/* <Link to="/planner/" activeClassName="active-link">Weekly Planner</Link> */}
        {/* <Link to="/stats/" activeClassName="active-link">Stats/Progress</Link> */}
        <Link to="/"><button>Sign Out!</button></Link>
      </div>
    </div>
  )
}

export default Header