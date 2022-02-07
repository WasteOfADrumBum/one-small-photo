import React from 'react'
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { useAuth0 } from '@auth0/auth0-react'
import {
  readAllCMSEntries,
  createCMS,
  deleteCMS,
  updateCMS,
} from '../../actions'
import './_photoCMS.scss'

const PhotoCMS = ({
  readAllCMSEntries,
  createCMS,
  deleteCMS,
  updateCMS,
  cms: { cmsEntries, loading: cmsEntries_loading },
}) => {
  const { user, isAuthenticated } = useAuth0()
  const [filter, setFilter] = React.useState('category')
  const navigate = useNavigate()

  /* Load all entries */
  React.useEffect(() => {
    readAllCMSEntries()
  }, [readAllCMSEntries])

  // Remove entry by ID
  const onDelete = (id) => {
    deleteCMS(id)
  }

  const onUpdate = (id) => {
    console.log(id)
    navigate(`../update-cms/${id}`)
  }

  const PhotoForm = () => {
    const [formData, setFormData] = React.useState({
      imgSubject: '',
      imgCaption: '',
      imgCategory: '',
      imgOrientation: 'landscape',
      imgPolaroid: false,
      imgLandingPage: false,
      source: '',
    })

    const {
      imgSubject,
      imgCaption,
      imgCategory,
      imgOrientation,
      imgPolaroid,
      imgLandingPage,
      source,
    } = formData

    // Captures changes made to the form data
    const onChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    // Create an entry
    const onSubmit = (e) => {
      e.preventDefault()
      createCMS(formData)
    }

    return (
      <form onSubmit={(e) => onSubmit(e)} className="photoForm my-5">
        {/* Subject & Caption */}
        <div className="row">
          <div className="col-md-6 mb-2">
            <label htmlFor="imgSubject" className="form-label">
              Subject
              <sup>
                {' '}
                <i className="bi bi-asterisk text-warning " />
              </sup>
            </label>
            <input
              type="text"
              name="imgSubject"
              value={imgSubject}
              onChange={(e) => onChange(e)}
              className="form-control"
              id="imgSubject"
              placeholder="(Subject of the photo)"
            />
          </div>
          <div className="col-md-6 mb-2">
            <label htmlFor="imgCaption" className="form-label">
              Caption
              <sup>
                {' '}
                <i className="bi bi-asterisk text-warning " />
              </sup>
            </label>
            <input
              type="text"
              name="imgCaption"
              value={imgCaption}
              onChange={(e) => onChange(e)}
              className="form-control"
              id="imgCaption"
              placeholder="(Caption for the photo)"
            />
          </div>
        </div>
        {/* Select Options */}
        <div className="row">
          <div className="col-md-3 mb-2">
            <label htmlFor="imgCategory" className="form-label">
              Category
              <sup>
                {' '}
                <i className="bi bi-asterisk text-warning " />
              </sup>
            </label>
            <select
              type="text"
              name="imgCategory"
              value={imgCategory}
              onChange={(e) => onChange(e)}
              className="form-control"
              id="imgCategory"
              placeholder="(Subject of the photo)"
            >
              <option value="">--Please choose an option--</option>
              <option value="model">Model</option>
              <option value="portrait">Portrait</option>
              <option value="landscape">Landscape</option>
              <option value="event">Event</option>
              <option value="wedding">Wedding</option>
              <option value="cosplay">Cosplay</option>
              <option value="product">Product</option>
              <option value="nature">Nature</option>
              <option value="boudoir">Boudoir</option>
              <option value="award">Award Winning</option>
            </select>
          </div>
          <div className="col-md-3 mb-2">
            <label htmlFor="imgOrientation" className="form-label">
              Orientation
              <sup>
                {' '}
                <i className="bi bi-asterisk text-warning " />
              </sup>
            </label>
            <select
              type="text"
              name="imgOrientation"
              value={imgOrientation}
              onChange={(e) => onChange(e)}
              className="form-control"
              id="imgOrientation"
              placeholder="(Caption for the photo)"
            >
              <option value="">--Please choose an option--</option>
              <option value="landscape">Landscape</option>
              <option value="portrait">Portrait</option>
            </select>
          </div>
          <div className="col-md-3 mb-2">
            <label htmlFor="imgPolaroid" className="form-label">
              Polaroid
              <sup>
                {' '}
                <i className="bi bi-asterisk text-warning " />
              </sup>
            </label>
            <select
              type="text"
              name="imgPolaroid"
              value={imgPolaroid}
              onChange={(e) => onChange(e)}
              className="form-control"
              id="imgPolaroid"
              placeholder="(Subject of the photo)"
            >
              <option value={true}>Yes</option>
              <option value={false}>No</option>
            </select>
          </div>
          <div className="col-md-3 mb-2">
            <label htmlFor="imgLandingPage" className="form-label">
              Landing Page
              <sup>
                {' '}
                <i className="bi bi-asterisk text-warning " />
              </sup>
            </label>
            <select
              type="text"
              name="imgLandingPage"
              value={imgLandingPage}
              onChange={(e) => onChange(e)}
              className="form-control"
              id="imgLandingPage"
              placeholder="(Caption for the photo)"
            >
              <option value={true}>Yes</option>
              <option value={false}>No</option>
            </select>
          </div>
        </div>
        {/* Source */}
        <div className="row">
          <div className="col-md-12 mb-2">
            <label htmlFor="source" className="form-label">
              AWS S3 Source URL
              <sup>
                {' '}
                <i className="bi bi-asterisk text-warning " />
              </sup>
            </label>
            <input
              type="text"
              name="source"
              value={source}
              onChange={(e) => onChange(e)}
              className="form-control"
              id="source"
              placeholder="https://onsmallphoto.s3.amazonaws.com/"
            />
          </div>
        </div>
        <div className="row mb-3 p-3">
          <button
            type="submit"
            id="submitButton"
            className="btn btn-outline-warning btn-sm col-md-1"
          >
            Submit
          </button>
        </div>
      </form>
    )
  }

  const PhotoList = (data) => {
    const [filterArr, setFilterArr] = React.useState([])

    React.useEffect(() => {
      const cmsEntries = data.cmsEntries
      let sortArr = []

      switch (filter) {
        case 'subject':
          sortArr = cmsEntries.sort((a, b) =>
            a.imgSubject > b.imgSubject ? 1 : -1,
          )
          break
        case 'caption':
          sortArr = cmsEntries.sort((a, b) =>
            a.imgCaption > b.imgCaption ? 1 : -1,
          )
          break
        case 'category':
          sortArr = cmsEntries.sort((a, b) =>
            a.imgCategory > b.imgCategory ? 1 : -1,
          )

          break
        case 'orientation':
          sortArr = cmsEntries.sort((a, b) =>
            a.imgOrintation > b.imgOrientation ? 1 : -1,
          )
          break
        case 'polaroid':
          sortArr = cmsEntries.sort((a, b) =>
            a.imgPolaroid < b.imgPolaroid ? 1 : -1,
          )

          break
        case 'landingPage':
          sortArr = cmsEntries.sort((a, b) =>
            a.imgLaningPage < b.imgLandingPage ? 1 : -1,
          )
          break
        default:
          sortArr = cmsEntries.sort((a, b) =>
            a.imgCategory > b.imgCategory ? 1 : -1,
          )
          break
      }
      setFilterArr(sortArr)
    }, [data.cmsEntries])

    return (
      <div className="photoList">
        {filterArr &&
          filterArr.length > 0 &&
          filterArr.map((photo, i) => (
            <div className="row align-items-center mb-2" key={i}>
              <div className="col-md-1 preview">
                <a href={photo.source} alt={photo.imgSubject}>
                  <img
                    src={photo.source}
                    alt={photo.imgSubject}
                    className="img-thumbnail img-fluid rounded "
                  />
                </a>
              </div>
              <div className="col-md-2 subject">{photo.imgSubject}</div>
              <div className="col-md-2 caption">{photo.imgCaption}</div>
              <div className="col-md-2 category text-uppercase">
                {photo.imgCategory}
              </div>
              <div className="col-md-1 orientation">
                {photo.imgOrientation === 'landscape' ? (
                  <i className="bi bi-phone-landscape" />
                ) : (
                  <i className="bi bi-phone" />
                )}
              </div>
              <div className="col-md-1 polaroid">
                {photo.imgPolaroid === true ? (
                  <i className="bi bi-check2-square text-warning" />
                ) : (
                  <i className="bi bi-square" />
                )}
              </div>
              <div className="col-md-1 landingPage">
                {photo.imgLandingPage === true ? (
                  <i className="bi bi-check2-square text-warning" />
                ) : (
                  <i className="bi bi-square" />
                )}
              </div>
              <div className="col-md-1 source">
                <a href={photo.source}>
                  <i className="bi bi-link-45deg text-warning" />
                </a>
              </div>
              <div className="col-md-1 actions d-inline-flex">
                <i
                  className="bi bi-trash text-danger mx-1"
                  onClick={() => onDelete(photo._id)}
                  type="button"
                />
                <i
                  className="bi bi-pencil mx-1"
                  onClick={() => onUpdate(photo._id)}
                  type="button"
                />
              </div>
            </div>
          ))}
      </div>
    )
  }

  return (
    <div className="photoCMS mt-5">
      <div className="container">
        <h1 className="text-start my-5 pt-5 pb-2 border-bottom">
          Admin Photo Management
        </h1>
        {/* Auth */}
        {isAuthenticated &&
        (user.email === 'jmsmall89@gmail.com' ||
          user.email === 'onesmallphoto@gmail.com') ? (
          <>
            {/* Form */}
            <PhotoForm />
            {/* If Entries loaded then display list */}
            {!cmsEntries_loading ? (
              <p>Loading...</p>
            ) : (
              <>
                <div className="row text-uppercase mb-5">
                  <div className="col-md-12 text-end">
                    Total: {cmsEntries.length}
                  </div>
                </div>
                <div className="row text-uppercase mb-5 pb-2 border-bottom ts-6 align-items-center">
                  <div className="col-md-1 text-white">Preview</div>
                  <div
                    className="col-md-2 nav-link text-white"
                    onClick={(e) => setFilter('subject')}
                  >
                    Subject
                  </div>
                  <div
                    className="col-md-2 nav-link text-white"
                    onClick={(e) => setFilter('caption')}
                  >
                    Caption
                  </div>
                  <div
                    className="col-md-2 nav-link text-white"
                    onClick={(e) => setFilter('category')}
                  >
                    Category
                  </div>
                  <div
                    className="col-md-1 nav-link text-white"
                    onClick={(e) => setFilter('orientation')}
                  >
                    Orientation
                  </div>
                  <div
                    className="col-md-1 nav-link text-white"
                    onClick={(e) => setFilter('polaroid')}
                  >
                    Polaroid
                  </div>
                  <div
                    className="col-md-1 nav-link text-white"
                    onClick={(e) => setFilter('landingPage')}
                  >
                    Home
                  </div>
                  <div className="col-md-1 text-white">Link</div>
                  <div className="col-md-1 text-white">Actions</div>
                </div>
                <PhotoList cmsEntries={cmsEntries} />
              </>
            )}
          </>
        ) : (
          <div>
            <p>You're not authorized to view this content.</p>
          </div>
        )}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  CMSReducer: state.CMSReducer,
  cms: state.cms,
})

export default connect(mapStateToProps, {
  readAllCMSEntries,
  createCMS,
  deleteCMS,
  updateCMS,
})(PhotoCMS)
