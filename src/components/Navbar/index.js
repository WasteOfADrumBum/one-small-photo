import React from 'react'
import { NavLink } from 'react-router-dom'
import './_navbar.scss'

// Here, we display our Navbar
const Navbar = () => {
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark">
      <div className="container-fluid">
        <a
          className="navbar-brand d-flex justify-content-center align-items-center"
          href="/"
        >
          <span className="oneSmall">1S</span>
          <div className="polaroid">
            <div className="inner">P</div>
          </div>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavBar"
          data-toggle="collapse"
          data-target="#mainNavBar"
          aria-controls="mainNavBar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="mainNavBar">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/portfolio">
                Portfolio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="iconLinksInNavbarWrapper">
          <span className="iconLinksInNavbar">
            <a
              target="_blank"
              href="https://stills.mauer.co/"
              className="socialButtonLink"
            >
              <i className="bi bi-facebook" />
            </a>
            <a
              target="_blank"
              href="https://stills.mauer.co/"
              className="socialButtonLink"
            >
              <i className="bi bi-instagram" />
            </a>
          </span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
