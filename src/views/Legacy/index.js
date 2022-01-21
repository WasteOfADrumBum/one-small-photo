import React from 'react'
import moment from 'moment'
import { gsap } from 'gsap'
import './_legacy.scss'

const Legacy = () => {
  const year = moment().year()

  React.useEffect(() => {
    var tl = gsap.timeline()

    tl.from('.d60', { duration: 2, x: -1280, opacity: 0 })
      .from('.d5000', { duration: 2, x: -1280, opacity: 0 })
      .from('.d300s', { duration: 2, x: -1280, opacity: 0 })
      .from('.d7500', { duration: 2, x: -1280, opacity: 0 })
      .from('.z7ii', { duration: 2, x: -1280, opacity: 0 })
  }, [])

  return (
    <div className="legacy mt-5">
      <div className="container">
        <h1 className="my-5 pt-5 pb-2 border-bottom">The Journey</h1>
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-md-6 mb-5">
            <div className="cameraGen d-grid p-2">
              <img src="./assets/images/d60.png" alt="d60" className="d60" />
              <img
                src="./assets/images/d5000.png"
                alt="d5000"
                className="d5000"
              />
              <img
                src="./assets/images/d300s.png"
                alt="d300s"
                className="d300s"
              />
              <img
                src="./assets/images/d7500.png"
                alt="d7500"
                className="d7500"
              />
              <img src="./assets/images/z7ii.png" alt="z7ii" className="z7ii" />
            </div>
          </div>
          <div className="col-md-4 text-center">
            <p>
              For the {year - 1989} years I've been on this planet I've been
              shooting photography for about {year - 2010} of them. That means
              I've spent {Math.floor((100 * (year - 2010)) / (year - 1989))}% of
              my life professionally practicing my craft. I've spent the early
              years shooting all over the state of North Carolina honing my
              skills and finding the style that suits me best. I've been
              traveling the east coast and plan to take photos globally. After
              being published I've been working hard to prove my worth amongst
              today's ever expanding talent.
            </p>
            <div className="mx-5 ">
              <div className="quote border-top border-bottom border-warning py-4 px-5 my-5">
                <p className="cedarville">
                  “Photography takes an instant out of time, altering life by
                  holding it still.”
                </p>
                <p className="mt-3">– Dorothea Lange</p>
              </div>
            </div>
          </div>
        </div>
        <h1 className="my-5 pt-5 pb-2 border-bottom">The Gear</h1>
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-md-4 text-center mb-5">
            <p>
              There are only legendary photographers who make legendary
              pictures. The equipment a photographer owns doesn't mean much.
              Steve McCurry shot his famous Afgan Girl picture with a Nikon FM2
              and 105mm f/2.5 AIS lens. Steve’s an amazing photographer. He
              could have made do with a Canon or Olympus or Pentax or Leica or
              anything else. My goal is to produce amazing photos by being an
              amazing photographer.
            </p>
            <p className="text-center cedarville">
              I've recently upgraded to shooting full-frame and mirrorless with
              the <span className="text-warning">Nikon Z 7II</span>.
            </p>
          </div>
          <div className="col-md-4 text-center p-5">
            <img
              src="./assets/images/nikon-z7ii.png"
              alt="Nikon Z 7II"
              className="img-fluid nikonZ7II"
            />
          </div>
        </div>
        <div className="row my-5 d-flex justify-content-center align-items-center">
          <div className="col-md-8 text-center mb-5">
            <div className="row">
              <div className="col-md-3">
                <ul className="list-group bg-transparent">
                  <li className="list-group-item my-2 py-2 bg-transparent text-white text-uppercase border-0 border-bottom">
                    <i className="bi bi-camera2 fs-1" />
                  </li>
                  <li className="list-group-item bg-transparent text-white border-0">
                    Nikon Z 7II
                  </li>
                  <li className="list-group-item bg-transparent text-white border-0">
                    Nikon D7500
                  </li>
                  <li className="list-group-item bg-transparent text-white border-0">
                    Nikon D5000
                  </li>
                  <li className="list-group-item bg-transparent text-white border-0">
                    Nikon D60
                  </li>
                </ul>
              </div>
              <div className="col-md-6">
                <ul className="list-group">
                  <li className="list-group-item my-2 py-2 bg-transparent text-white text-uppercase border-0 border-bottom">
                    <i className="bi bi-search fs-1" />
                  </li>
                  <li className="list-group-item bg-transparent text-white border-0">
                    NIKKOR Z 24-70mm f/4 S
                  </li>
                  <li className="list-group-item bg-transparent text-white border-0">
                    AF-S NIKKOR 85mm f/1.8G
                  </li>
                  <li className="list-group-item bg-transparent text-white border-0">
                    AF-S DX NIKKOR 18-55mm f/3.5-5.6G VR II
                  </li>
                  <li className="list-group-item bg-transparent text-white border-0">
                    AF-S DX NIKKOR 55-200mm f/4-5.6G ED VR II
                  </li>
                  <li className="list-group-item bg-transparent text-white border-0">
                    AF Micro-Nikkor 60mm f/2.8D
                  </li>
                  <li className="list-group-item bg-transparent text-white border-0">
                    AF-S DX NIKKOR 35mm f/1.8G
                  </li>
                  <li className="list-group-item bg-transparent text-white border-0">
                    AF-P NIKKOR 70-300mm f/4.5-5.6E ED VR
                  </li>
                  <li className="list-group-item bg-transparent text-white border-0">
                    AF-S NIKKOR 24-70mm f/2.8E ED VR
                  </li>
                  <li className="list-group-item bg-transparent text-white border-0">
                    Rokinon 8mm f/3.5 Fisheye Aspherical IF AIS
                  </li>
                  <li className="list-group-item bg-transparent text-white border-0">
                    Sigma 18-200mm f/3.5-6.3 DC OS HSM
                  </li>
                  <li className="list-group-item bg-transparent text-white border-0">
                    Sigma 10-20mm f/3.5 EX DC HSM
                  </li>
                </ul>
              </div>
              <div className="col-md-3">
                <ul className="list-group">
                  <li className="list-group-item my-2 py-2 bg-transparent text-white text-uppercase border-0 border-bottom">
                    <i className="bi bi-lightbulb fs-1" />
                  </li>
                  <li className="list-group-item bg-transparent text-white border-0">
                    AlienBees B800
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Legacy
