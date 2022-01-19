import React from 'react'
import './_achievements.scss'

const Achievements = () => {
  return (
    <div className="achievements mt-5">
      <div className="container">
        <h1 className="text-start my-5 pt-5 pb-2 border-bottom">
          Publications & Achievements
        </h1>
        <div className="row d-flex align-items-center px-5">
          <div className="col-lg-4 my-5 text-end">
            <a
              href="https://photographersforummagazine.tumblr.com/"
              alt="photographers forum"
            >
              <h1 className="logo m-0 p-0">
                <span className="photographer text-white">photographer's</span>
                <span className="forum text-uppercase">forum</span>
              </h1>
              <sup className="subScript text-uppercase text-white">
                Magazine for the emerging professional
              </sup>
            </a>
          </div>
          <div className="col-lg-4">
            <img
              src="./assets/images/award-dusty.jpg"
              alt="34TH COLLEGE & HIGH SCHOOL PHOTOGRAPHY CONTEST"
              className="img-fluid rounded"
            />
          </div>
          <div className="col-lg-4 my-5">
            <sup className="text-uppercase border-bottom pb-1">
              34TH COLLEGE & HIGH SCHOOL PHOTOGRAPHY CONTEST
            </sup>
            <p>
              <span className="text-warning">Published</span> in Photographer's
              Forum Magazine June 2014 with a portrait of Dusty, a horse from
              Virginia.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Achievements
