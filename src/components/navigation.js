import React from "react"
import { Link } from "gatsby"

import Logo from "./logo"

const Navigation = () => (
  // nav holds all navigation related contents
  <nav>
    <div style={{ maxWidth: `50px` }}>
      <Link to="/">
        <Logo />
      </Link>
    </div>
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
