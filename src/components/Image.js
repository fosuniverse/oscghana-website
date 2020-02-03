import React from "react"
import "../styles/global.css"

const Image = ({ imageItem, alt }) => (
  <img className="header__osc-logo" src={imageItem} alt={alt} />
)

export default Image
