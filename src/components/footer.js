import React from "react"
import { Link } from "gatsby"

const Footer = () => {
  // footer holds all footer related contents
  return (
    <>
      <footer className={"footer"}>
        <div className={"container"}>
          <div className="tw-flex tw-flex-wrap">
            <div
              className={
                "tw-w-full sm:tw-w-1/2 md:tw-w-full lg:tw-w-1/4 tw-mb-4"
              }
            >
              <h4 className={"footer__heading footer__heading--about"}>
                OCS Ghana
              </h4>
              <p>Subtitle goes here.</p>
              <a href={"mailto:contact@oscghana.com"}>contact@oscghana.com</a>
            </div>
            <div
              className={
                "tw-w-full sm:tw-w-1/2 md:tw-w-1/3 lg:tw-w-1/4 tw-mb-4"
              }
            >
              <h4 className={"footer__heading"}>Quick Links</h4>
              <ul className={"footer__list"}>
                <li className={"footer__item"}>
                  <Link className={"footer__link"} to={"/about/"}>
                    About Community
                  </Link>
                </li>
                <li className={"footer__item"}>
                  <Link className={"footer__link"} to={"/projects/"}>
                    Projects & Resources
                  </Link>
                </li>
                <li className={"footer__item"}>
                  <Link className={"footer__link"} to={"/events/"}>
                    Events
                  </Link>
                </li>
                <li className={"footer__item"}>
                  <Link className={"footer__link"} to={"/join/"}>
                    Join Community
                  </Link>
                </li>
              </ul>
            </div>
            <div
              className={
                "tw-w-full sm:tw-w-1/2 md:tw-w-1/3 lg:tw-w-1/4 tw-mb-4"
              }
            >
              <h4 className={"footer__heading"}>Products & Resources</h4>
              <ul className={"footer__list"}>
                <li className={"footer__item"}>
                  <Link className={"footer__link"} to={"/#c-plus-plus"}>
                    C++ to Java
                  </Link>
                </li>
                <li className={"footer__item"}>
                  <Link className={"footer__link"} to={"/#img-converter"}>
                    Image Converter
                  </Link>
                </li>
                <li className={"footer__item"}>
                  <Link
                    className={"footer__link"}
                    to={"/#smart-home-energy-app"}
                  >
                    Smart Home Energy App
                  </Link>
                </li>
                <li className={"footer__item"}>
                  <Link
                    className={"footer__link"}
                    to={"/#air-pollution-sensor"}
                  >
                    Air Pollution Sensor
                  </Link>
                </li>
              </ul>
            </div>
            <div
              className={
                "tw-w-full sm:tw-w-1/2 md:tw-w-1/3 lg:tw-w-1/4 tw-mb-4"
              }
            >
              <h4 className={"footer__heading"}>Contact</h4>
              <ul className={"footer__list"}>
                <li className={"footer__item"}>
                  <a
                    className={"footer__link"}
                    href={"#GitHub"}
                    target={"_blank"}
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </li>
                <li className={"footer__item"}>
                  <a
                    className={"footer__link"}
                    href={"#Twitter"}
                    target={"_blank"}
                    rel="noopener noreferrer"
                  >
                    Twitter
                  </a>
                </li>
                <li className={"footer__item"}>
                  <a
                    className={"footer__link"}
                    href={"#LinkedIn"}
                    target={"_blank"}
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </li>
                <li className={"footer__item"}>
                  <a
                    className={"footer__link"}
                    href={"#Facebook"}
                    target={"_blank"}
                    rel="noopener noreferrer"
                  >
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
