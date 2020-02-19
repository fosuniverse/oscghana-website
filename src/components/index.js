import React from "react"

import Header from "./header"
import Footer from "./footer"

const Layout = ({ header, main }) => {
  return (
    <>
      <Header>{header}</Header>
      <main>{main}</main>
      <Footer />
    </>
  )
}

export default Layout
