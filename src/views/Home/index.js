import React from 'react'
import './_home.scss'
import { ImageJSON } from '../../utils'

const Home = () => {
  const [imgSource, setImgSource] = React.useState('')
  const [polaroidSource, setPolaroidSource] = React.useState('')

  React.useEffect(() => {
    let orientation =
      window.innerHeight > window.innerWidth ? 'portrait' : 'landscape'

    // Filter Images by orientation
    let arr = ImageJSON.filter((image) => image.imgOrientation === orientation)
    // Radom number from array length
    let num = Math.floor(Math.random() * arr.length)

    setImgSource(arr[num].source)

    //filter images approved for polaroid
    let polaroidArr = ImageJSON.filter((image) => image.imgPolaroid === true)
    // random number for polaroid
    let polaroidNum = Math.floor(Math.random() * polaroidArr.length)

    if (arr[num].source !== polaroidArr[polaroidNum].source) {
      setPolaroidSource(polaroidArr[polaroidNum].source)
    } else {
      setPolaroidSource(polaroidArr[0].source)
    }
  }, [])

  return (
    <div
      className="home"
      style={{
        backgroundImage:
          `linear-gradient(black, black), url(` + imgSource + `)`,
      }}
    >
      <div className="oneSmallPhoto d-flex justify-content-center align-items-center text-center">
        <div className="word text-uppercase text-warning">one</div>
        <div className="word text-uppercase">small</div>
        <a href="/portfolio">
          <div className=" polaroid">
            <ul>
              <li>
                <img src={polaroidSource} width="200" alt="polaroid" />
                <p className="m-0">Photo</p>
              </li>
            </ul>
          </div>
        </a>
      </div>
    </div>
  )
}

export default Home
