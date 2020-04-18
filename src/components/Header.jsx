import React from "react"
import { Link } from 'gatsby'

function Header() {
  return (
    <div className="navbar">
      <h1>Hauora</h1>
      <Link to="/profile/"><button>User Profile</button></Link>
      <Link to="/dashboard/"><button>Dashboard</button></Link>
      <Link to="/planner/"><button>Weekly Planner</button></Link>
      <Link to="/stats/"><button>Stats/Progress</button></Link>
    </div>
  )
}

export default Header