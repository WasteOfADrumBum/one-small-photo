import React from 'react'
import './_imgComparisonSlider.scss'

const ImgComparisonSlider = ({ imgBefore, imgAfter }) => {
  return (
    <div className="imgComparisonSlider">
      <img-comparison-slider hover="hover">
        <figure slot="first" className="before">
          <img width="100%" src={imgBefore} alt="..." />
          <figcaption>Before</figcaption>
        </figure>
        <figure slot="second" className="after">
          <img width="100%" src={imgAfter} alt="..." />
          <figcaption>After</figcaption>
        </figure>
      </img-comparison-slider>
    </div>
  )
}
export default ImgComparisonSlider
