import React from 'react'
import { connect } from 'react-redux'
import './_home.scss'
import { readAllCMSEntries } from '../../actions'

const Home = ({
  readAllCMSEntries,
  cms: { cmsEntries, loading: cmsEntries_loading },
}) => {
  const [imgSource, setImgSource] = React.useState('')
  const [polaroidSource, setPolaroidSource] = React.useState('')

  /* Load all entries */
  React.useEffect(() => {
    readAllCMSEntries()
  }, [readAllCMSEntries])

  React.useEffect(() => {
    let orientation =
      window.innerHeight > window.innerWidth ? 'portrait' : 'landscape'

    if (cmsEntries && cmsEntries.length > 0) {
      // Filter Images by orientation
      let arr = cmsEntries.filter(
        (image) =>
          image.imgOrientation === orientation && image.imgLandingPage === true,
      )
      // Radom number from array length
      let num = Math.floor(Math.random() * arr.length)

      setImgSource(arr[num].source)

      //filter images approved for polaroid
      let polaroidArr = cmsEntries.filter((image) => image.imgPolaroid === true)
      // random number for polaroid
      let polaroidNum = Math.floor(Math.random() * polaroidArr.length)

      if (arr[num].source !== polaroidArr[polaroidNum].source) {
        setPolaroidSource(polaroidArr[polaroidNum].source)
      } else {
        setPolaroidSource(polaroidArr[0].source)
      }
    }
  }, [cmsEntries])

  return (
    <>
      {!cmsEntries_loading ? (
        <p>Loading...</p>
      ) : (
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
      )}
    </>
  )
}

const mapStateToProps = (state) => ({
  CMSReducer: state.CMSReducer,
  cms: state.cms,
})

export default connect(mapStateToProps, {
  readAllCMSEntries,
})(Home)
