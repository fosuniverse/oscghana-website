import React from "react"
import { Link } from "gatsby"

const Navigation = () => (
  // nav holds all navigation related contents
  <nav>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About Community</Link></li>
      <li><Link to="/projects">Projects & Resources</Link></li>
      <li><Link to="/events">Events</Link></li>
      <li><Link to="/join">Join Community</Link></li>
    </ul>
  </nav>
)

export default Navigation
