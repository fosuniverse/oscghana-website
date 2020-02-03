import React from "react"
import "../styles/components.css"

const Button = ({ className, children }) => (
  <button className={className}>{children}</button>
)

export default Button
