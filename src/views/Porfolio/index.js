import React from 'react'
import { MasonryGallery } from '../../components'
import './_portfolio.scss'

const Portfolio = () => {
  const [category, setCategory] = React.useState('all')

  return (
    <div className="portfolio mt-5">
      <div className="container py-5">
        <h1 className="">
          Sincere portrait and editorial photography from an IPA winner.
          California and worldwide.
        </h1>
        <ul className="portfolioCategories mt-4">
          <li>
            <a
              className="catItem portrait"
              onClick={(e) => setCategory('portrait')}
            >
              Portraits
            </a>
          </li>
          <li>
            <a className="catItem model" onClick={(e) => setCategory('model')}>
              Models
            </a>
          </li>
          <li>
            <a
              className="catItem landscape"
              onClick={(e) => setCategory('landscape')}
            >
              Landscapes
            </a>
          </li>
          <li>
            <a
              className="catItem wedding"
              onClick={(e) => setCategory('wedding')}
            >
              Weddings
            </a>
          </li>
          <li>
            <span className="catItem">|</span>
          </li>
          <li>
            <a className="catItem all" onClick={(e) => setCategory('all')}>
              All
            </a>
          </li>
        </ul>
      </div>
      <div className="masonryContainer">
        <MasonryGallery category={category} />
      </div>
    </div>
  )
}

export default Portfolio
