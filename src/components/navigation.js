import React from "react"
import { Link } from "gatsby"

import Logo from "./logo"
import style from "../assets/css/index.css"

export default class Navigation extends React.Component {
  constructor(props) {
    super(props)
    this.state = { addClass: false }
  }

  toggleMenuAlt() {
    this.setState({ addClass: !this.state.addClass })
  }

  render() {
    let menuAltWrapClass = ["menu-alt__wrap"]
    let menuAltOverlayClass = ["menu-alt__overlay"]

    if (this.state.addClass) {
      menuAltOverlayClass.push("menu-alt__overlay--show")
      menuAltWrapClass.push("menu-alt__wrap--show")
    }

    return (
      <>
        <nav className={"menu"}>
          <div className={"container"}>
            <div
              className={
                "tw-hidden sm:tw-hidden md:tw-block lg:tw-block xl:tw-block tw-clearfix"
              }
            >
              <Link to="/" className={"menu__logo"}>
                <Logo />
              </Link>
              <ul className={"menu__list"}>
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
            <div
              className={
                "menu-alt tw-block sm:tw-block md:tw-hidden lg:tw-hidden xl:tw-hidden"
              }
            >
              <button
                className={"btn btn--menu-alt"}
                onClick={this.toggleMenuAlt.bind(this)}
              >
                {this.state.addClass ? "-" : "+"}
              </button>
              <div className={menuAltWrapClass.join(" ")}>
                <ul className={"menu-alt__list"}>
                  <li className={"menu-alt__item menu-alt__item--1"}>
                    <Link to="/about/" className={"menu-alt__link"}>
                      <i className={"menu-alt__icon fas fa-anchor"}> </i>
                    </Link>
                  </li>
                  <li className={"menu-alt__item menu-alt__item--2"}>
                    <Link to="/projects/" className={"menu-alt__link"}>
                      <i className={"menu-alt__icon fas fa-paint-roller"}> </i>
                    </Link>
                  </li>
                  <li className={"menu-alt__item menu-alt__item--3"}>
                    <Link to="/" className={"menu-alt__link"}>
                      <i className={"menu-alt__icon fas fa-home"}> </i>{" "}
                    </Link>
                  </li>
                  <li className={"menu-alt__item menu-alt__item--4"}>
                    <Link to="/events/" className={"menu-alt__link"}>
                      <i className={"menu-alt__icon fas fa-bullhorn"}> </i>
                    </Link>
                  </li>
                  <li className={"menu-alt__item menu-alt__item--5"}>
                    <Link to="/join/" className={"menu-alt__link"}>
                      <i className={"menu-alt__icon fas fa-user-plus"}> </i>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className={menuAltOverlayClass.join(" ")}> </div>
            </div>
          </div>
        </nav>
      </>
    )
  }
}
