import React from 'react'
import './_about.scss'

// https://undsgn.com/uncode/pages/about-minimal/

const About = () => (
  <div className="about">
    <div className="row">
      <div className="col-lg-6 background">
        <div className="background-wrapper">
          <div className="background-inner srcset-bg srcset-bg-async" />
        </div>
      </div>
      <div className="col-lg-6 d-flex bio">
        <div className="align-self-center mx-auto wrapper text-start p-5">
          <h1 className="m-0">Joshua</h1>
          <h1 className="m-0">Michael Small</h1>
          <p className="text-uppercase my-3 py-3 border-bottom border-top">
            Photographer / Web Developer
          </p>
          <p className="mt-4 fs-6">
            Hi, I am a North Carolina-based photographer/developer who pushes
            the boundaries of photography through unique perspectives and
            creative editing techniques.
          </p>
          <p className="mt-4 fs-6">
            Specializing in portraits, fashion, and editorial photography. I
            love to show people how amazing they can be and show the rest of the
            world the incredible people in it.{' '}
          </p>
          <p className="mt-4 fs-6">Yours truly,</p>
          <div className="signature my-3 py-3 mx-auto w-75">
            <img
              src="./assets/images/signature.svg"
              alt="signature"
              className="text-warning"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default About
