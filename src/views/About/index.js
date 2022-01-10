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
          <h1 className="m-0 mb-3 pb-3 border-bottom ">Michael Small</h1>
          <p className="mt-4 fs-6">
            Creative artist who mainly works with mixed media. By emphasising
            aesthetics, tries to approach a wide scale of subjects in a
            multi-layered way, likes to involve the viewer in a way that is
            sometimes physical and believes in the idea of function following
            form in a work.
          </p>
          <p className="mt-4 fs-6">
            His mixed media artworks directly respond to the surrounding
            environment and uses everyday experiences from the artist as a
            starting point.
          </p>
          <p className="mt-4 fs-6">Likes to involve the viewer in a way.</p>
          <div className="signature my-3 py-3 ">Signature Here</div>
        </div>
      </div>
    </div>
  </div>
)

export default About
