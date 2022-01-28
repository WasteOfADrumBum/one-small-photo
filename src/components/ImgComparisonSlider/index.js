import React from 'react'
import './_imgComparisonSlider.scss'

const ImgComparisonSlider = ({ imgBefore, imgAfter }) => {
  return (
    <div className="imgComparisonSlider">
      <img-comparison-slider hover="hover">
        <figure slot="first" class="before">
          <img width="100%" src={imgBefore} />
          <figcaption>Before</figcaption>
        </figure>
        <figure slot="second" class="after">
          <img width="100%" src={imgAfter} />
          <figcaption>After</figcaption>
        </figure>
      </img-comparison-slider>
    </div>
  )
}
export default ImgComparisonSlider
