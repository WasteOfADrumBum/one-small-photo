import React, { useState } from 'react'
import Gallery from 'react-photo-gallery'
import Carousel, { Modal, ModalGateway } from 'react-images'
import './_masonryGallery.scss'
import { ImageJSON } from '../../utils'

const MasonryGallery = ({ category }) => {
  const [filteredCategories, setFilteredCategories] = useState([])
  const [currentImage, setCurrentImage] = useState(0)
  const [viewerIsOpen, setViewerIsOpen] = useState(false)

  const filterByCategory = (category) => {
    let filteredArr = []

    switch (category) {
      case 'portrait':
        filteredArr = ImageJSON.filter(
          (image) => image.imgCategory === 'portrait',
        )
        break
      case 'model':
        filteredArr = ImageJSON.filter((image) => image.imgCategory === 'model')
        break
      case 'landscape':
        filteredArr = ImageJSON.filter(
          (image) => image.imgCategory === 'landscape',
        )
        break
      case 'wedding':
        filteredArr = ImageJSON.filter(
          (image) => image.imgCategory === 'wedding',
        )
        break
      default:
        filteredArr = ImageJSON
    }
    setFilteredCategories(filteredArr)
  }

  React.useEffect(() => {
    if (category && (category !== '' || category !== undefined)) {
      filterByCategory(category)
    }
  }, [category])

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index)
    setViewerIsOpen(true)
  }, [])

  const closeLightbox = () => {
    setCurrentImage(0)
    setViewerIsOpen(false)
  }

  return (
    <div className="masonryGallery mt-5">
      <>
        {category && (category !== '' || category !== undefined) ? (
          <>
            <Gallery photos={filteredCategories} onClick={openLightbox} />
            <ModalGateway>
              {viewerIsOpen ? (
                <Modal onClose={closeLightbox}>
                  <Carousel
                    currentIndex={currentImage}
                    views={photos.map((x) => ({
                      ...x,
                      srcset: x.srcSet,
                      caption: x.title,
                    }))}
                  />
                </Modal>
              ) : null}
            </ModalGateway>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </>
    </div>
  )
}

export default MasonryGallery
