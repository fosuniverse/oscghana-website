import React from "react"
import Navigation from "./navigation"

const Header = ({ children }) => {
  return (
    <>
      <header>
        <Navigation />
        {children}
      </header>
    </>
  )
}

export default Header
