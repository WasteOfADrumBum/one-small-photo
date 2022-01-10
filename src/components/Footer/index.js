import React from 'react'
import './_footer.scss'

const Footer = () => {
  return (
    <footer className="text-center text-lg-start text-muted">
      {/* Section: Social media */}
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with me on social networks:</span>
        </div>
        <div>
          <a
            href="https://www.facebook.com/WasteOfADrumBum"
            className="me-4 text-reset"
          >
            <i className="bi bi-facebook"></i>
          </a>
          <a
            href="https://www.instagram.com/one_small_family/"
            className="me-4 text-reset"
          >
            <i className="bi bi-instagram"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/joshuamsmall/"
            className="me-4 text-reset"
          >
            <i className="bi bi-linkedin"></i>
          </a>
          <a
            href="https://github.com/WasteOfADrumBum"
            className="me-4 text-reset"
          >
            <i className="bi bi-github"></i>
          </a>
        </div>
      </section>

      {/* Section: Links  */}
      <section className="">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto">
              <h6 className="text-uppercase fw-bold mb-4">
                Joshua M. Small
                <div>Professional Photographer</div>
                <div>Full Stack Developer</div>
              </h6>
              <p>
                You can check out my MERN Stack Crud Application{' '}
                <a
                  href="https://jms-r0b.herokuapp.com/"
                  alt="R0B"
                  className="fontConsolas text-info"
                >
                  ⇜R⥽0⥼B⇝
                </a>{' '}
                where I'm hosting an assortment of animations.
              </p>
            </div>
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Galleries</h6>
              <p>
                <a href="/" className="text-reset">
                  Studio
                </a>
              </p>
              <p>
                <a href="/" className="text-reset">
                  Lifestyle
                </a>
              </p>
              <p>
                <a href="/" className="text-reset">
                  Modeling
                </a>
              </p>
              <p>
                <a href="/" className="text-reset">
                  Wedding
                </a>
              </p>
              <p>
                <a href="/" className="text-reset">
                  Landscapes
                </a>
              </p>
            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <a href="/" className="text-reset">
                  Home
                </a>
              </p>
              <p>
                <a href="/about" className="text-reset">
                  About
                </a>
              </p>
            </div>
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <i className="bi bi-house me-3"></i> Trinity NC USA
              </p>
              <p>
                <i className="bi bi-envelope me-3"></i>
                jmsmall89@gmail.com
              </p>
              <p>
                <i className="bi bi-phone me-3"></i> 828.333.8983
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Copyright */}
      <div className="text-center p-4">
        © 2022 Copyright:{' '}
        <a
          className="text-reset fw-bold"
          href="https://github.com/WasteOfADrumBum"
        >
          Joshua M. Small
        </a>{' '}
        All Rights Reserved
      </div>
    </footer>
  )
}

export default Footer
