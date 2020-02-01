import React from "react"

import Layout from "../components"

const NotFoundPage = () => {
  return (
    <Layout
      main={
        <div style={{ textAlign: `center` }}>Page not found (404 error)</div>
      }
    />
  )
}

export default NotFoundPage
