import React from 'react'
import './_categoryInfo.scss'

const CategoryInfo = ({ category }) => {
  const [textInfo, setTextInfo] = React.useState('')

  React.useEffect(() => {
    const filterCategory = (category) => {
      let text
      switch (category) {
        case 'portrait':
          text =
            'Portrait photography is one of the most popular genres of photography, capturing the personality and emotion of people'
          break
        case 'model':
          text =
            'Glamour, fashion, boudoir, and editorial. The modeling world is vast and offers an array of viriety'
          break
        case 'landscape':
          text =
            "Advertise or market a business, a product, a service, a person or persons. Even capture nature's landscape, the beauty of the night sky, or a feeling of etherealness, causing images to walk the line between fantasy and reality."
          break
        case 'wedding':
          text =
            'Shopping around for a photographer may be one of the more stressful wedding planning tasks because of the sheer importance of the job. Pssst, I can help!'
          break
        case 'event':
          text =
            "With event photography, there’s a lot at stake and a lot of pressure to meet expectations. Sometimes all you need is a friendly face who's adaptable and goes the extra mile"
          break
        default:
          text = ''
      }

      setTextInfo(text)
    }

    if (category && (category !== '' || category !== undefined)) {
      filterCategory(category)
    }
  }, [category])

  return <div className="categoryInfo">{textInfo}</div>
}
export default CategoryInfo
