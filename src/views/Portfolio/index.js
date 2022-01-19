import React from 'react'
import { CategoryInfo, MasonryGallery } from '../../components'
import './_portfolio.scss'

const Portfolio = () => {
  const [category, setCategory] = React.useState('all')

  return (
    <div className="portfolio mt-5">
      <div className="container pt-5">
        <div className="row">
          <div className="col-md-8">
            <h1 className="">
              People, landscape, and event photography from an award winner.
              North Carolina and nationwide.
            </h1>
          </div>
          <div className="col-md-4 d-flex justify-content-center align-items-center">
            <CategoryInfo category={category} />
          </div>
        </div>
        <ul className="portfolioCategories nav nav-fill mt-4 pb-4">
          <li className="nav-item">
            <div
              className="catItem nav-link ps-0 portrait"
              onClick={(e) => setCategory('portrait')}
            >
              Portraits
            </div>
          </li>
          <li className="nav-item">
            <div
              className="catItem nav-link ps-0 model"
              onClick={(e) => setCategory('model')}
            >
              Models
            </div>
          </li>
          <li className="nav-item">
            <div
              className="catItem nav-link ps-0 landscape"
              onClick={(e) => setCategory('landscape')}
            >
              Landscapes/Commercial
            </div>
          </li>
          <li className="nav-item">
            <div
              className="catItem nav-link ps-0 event"
              onClick={(e) => setCategory('event')}
            >
              Events
            </div>
          </li>
          <li className="nav-item">
            <div
              className="catItem nav-link ps-0 wedding"
              onClick={(e) => setCategory('wedding')}
            >
              Weddings
            </div>
          </li>
          <li className="nav-item">
            <span className="catItem divider nav-link ps-0 disabled"></span>
          </li>
          <li className="nav-item">
            <div
              className="catItem nav-link ps-0 all text-warning active"
              onClick={(e) => setCategory('all')}
            >
              All
            </div>
          </li>
        </ul>
        <MasonryGallery category={category} />
      </div>
    </div>
  )
}

export default Portfolio
