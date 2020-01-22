import React from "react"

import Header from "./header"
import Navigation from "./navigation"
import Footer from "./footer"

const Layout = ({ children }) => {
  return (<>
    <Navigation />
    <Header />
    <main>{children}</main>
    <Footer />
  </>)
}

export default Layout
