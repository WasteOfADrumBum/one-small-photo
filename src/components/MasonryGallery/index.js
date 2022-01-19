import React, { useState } from 'react'
import Carousel, { Modal, ModalGateway } from 'react-images'
import { XMasonry, XBlock } from 'react-xmasonry'
import './_masonryGallery.scss'
import { ImageJSON } from '../../utils'

const MasonryGallery = ({ category }) => {
  const [filteredCategories, setFilteredCategories] = useState([])
  const [currentImage, setCurrentImage] = useState(0)
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const shuffle = (array) => {
    let currentIndex = array.length,
      randomIndex

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex--

      // And swap it with the current element.
      ;[array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ]
    }

    return array
  }
  React.useEffect(() => {
    const filterByCategory = (category) => {
      let shuffleArr = shuffle(ImageJSON)
      let filteredArr = []

      switch (category) {
        case 'portrait':
          filteredArr = shuffleArr.filter(
            (image) => image.imgCategory === 'portrait',
          )
          break
        case 'model':
          filteredArr = shuffleArr.filter(
            (image) => image.imgCategory === 'model',
          )
          break
        case 'landscape':
          filteredArr = shuffleArr.filter(
            (image) => image.imgCategory === 'landscape',
          )
          break
        case 'wedding':
          filteredArr = shuffleArr.filter(
            (image) => image.imgCategory === 'wedding',
          )
          break
        case 'event':
          filteredArr = shuffleArr.filter(
            (image) => image.imgCategory === 'event',
          )
          break
        default:
          filteredArr = shuffleArr
      }
      setFilteredCategories(filteredArr)
    }

    if (category && (category !== '' || category !== undefined)) {
      filterByCategory(category)
    }
  }, [category])

  const openLightbox = (e, index) => {
    setCurrentImage(index)
    setModalIsOpen(true)
  }

  const closeLightbox = () => {
    setCurrentImage(0)
    setModalIsOpen(false)
  }

  return (
    <div className="masonryGallery">
      {category && (category !== '' || category !== undefined) ? (
        <>
          <XMasonry>
            {filteredCategories.map((image, i) => {
              return (
                <XBlock key={i}>
                  <div
                    className="card bg-transparent p-1"
                    onClick={(e) => openLightbox(e, i)}
                  >
                    <img
                      src={image.source}
                      alt={image.subject}
                      className="position-relative image"
                    />
                    <p className="text-white position-absolute bottom-0 start-0 ps-3">
                      {image.imgSubject}
                    </p>
                  </div>
                </XBlock>
              )
            })}
          </XMasonry>
          <ModalGateway>
            {modalIsOpen ? (
              <Modal onClose={closeLightbox}>
                <Carousel
                  currentIndex={currentImage}
                  views={filteredCategories}
                />
              </Modal>
            ) : null}
          </ModalGateway>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default MasonryGallery
