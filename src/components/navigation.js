import React from "react"
import { Link } from "gatsby"

import Logo from "./logo"
import "../assets/css/index.css"

export default class Navigation extends React.Component {
  constructor(props) {
    super(props)
    this.state = { addClass: false }
    this.collapsible = React.createRef()
  }

  toggleMenu() {
    this.setState({ addClass: !this.state.addClass })
  }

  render() {
    let menuToggleClass = ["menu__list"]
    let collapsible = this.collapsible.current

    if (this.state.addClass) {
      collapsible.style.height = collapsible.scrollHeight + "px"
      menuToggleClass.push("menu__list--show")
    } else {
      if (collapsible) {
        collapsible.style.height = "0"
      }
    }

    return (
      <>
        <nav className={"menu"}>
          <div className={"container"}>
            <div className={"tw-block tw-clearfix"}>
              <Link to="/" className={"menu__logo"}>
                <Logo />
              </Link>
              <button
                className={"menu__toggler"}
                onClick={this.toggleMenu.bind(this)}
              >
                <i className={"fas fa-ellipsis-v"}> </i>
              </button>
              <ul ref={this.collapsible} className={menuToggleClass.join(" ")}>
                <li className={"menu__item"}>
                  <Link to="/" className={"menu__link"}>
                    Home
                  </Link>
                </li>
                <li className={"menu__item"}>
                  <Link to="/about/" className={"menu__link"}>
                    About Community
                  </Link>
                </li>
                <li className={"menu__item"}>
                  <Link to="/projects/" className={"menu__link"}>
                    Projects & Resources
                  </Link>
                </li>
                <li className={"menu__item"}>
                  <Link to="/events/" className={"menu__link"}>
                    Events
                  </Link>
                </li>
                <li className={"menu__item"}>
                  <Link to="/join/" className={"menu__link"}>
                    Join Community
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    )
  }
}
