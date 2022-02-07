import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import { LogoutButton } from '../../components'
import './_navbar.scss'

// Here, we display our Navbar
const Navbar = () => {
  const { user, isAuthenticated } = useAuth0()

  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark">
      <div className="container-fluid">
        <a
          className="navbar-brand d-flex justify-content-center align-items-center"
          href="/"
        >
          <span className="oneSmall">
            <span className="text-warning">1</span>S
          </span>
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
              <NavLink className="nav-link" to="/portfolio">
                Portfolio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/achievements">
                Achievements
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/legacy">
                Legacy
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/rates">
                Rates
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>
            {isAuthenticated &&
              (user.email === 'jmsmall89@gmail.com' ||
                user.email === 'onesmallphoto@gmail.com') && (
                <>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/inbox">
                      Inbox
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/cms">
                      Admin CMS
                    </NavLink>
                  </li>
                </>
              )}
          </ul>
        </div>
        <div className="iconLinksInNavbarWrapper">
          {isAuthenticated && <LogoutButton />}
          <span className="iconLinksInNavbar">
            <a
              href="https://www.instagram.com/onesmallphoto/"
              className=" socialButtonLink me-4 text-reset"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-instagram"></i>
            </a>
            <a
              href="https://www.modelmayhem.com/OneSmallPhoto"
              className="me-4 text-reset"
            >
              <i className="bi bi-camera2" />
            </a>
            <a
              href="https://www.linkedin.com/in/joshuamsmall/"
              className=" socialButtonLink me-4 text-reset"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-linkedin"></i>
            </a>
            <a
              href="https://github.com/WasteOfADrumBum"
              className=" socialButtonLink me-4 text-reset"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-github"></i>
            </a>
          </span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
