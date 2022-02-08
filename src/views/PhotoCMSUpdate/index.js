import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { useAuth0 } from '@auth0/auth0-react'
import { readCMSEntry, updateCMS } from '../../actions'
import './_photoCMSUpdate.scss'

const PhotoCMSUpdate = ({
  updateCMS,
  readCMSEntry,
  cms: { cmsEntry, loading: cms_loading },
}) => {
  const navigate = useNavigate()
  const { user, isAuthenticated } = useAuth0()
  const [formData, setFormData] = React.useState({
    imgSubject: '',
    imgCaption: '',
    imgCategory: '',
    imgOrientation: 'landscape',
    imgPolaroid: false,
    imgLandingPage: false,
    source: '',
  })

  // Get ID from URL
  const { id } = useParams()

  React.useEffect(() => {
    // Find entry by ID
    readCMSEntry(id)
  }, [id, readCMSEntry])

  // Set formData if it exisits
  React.useEffect(() => {
    console.log(cmsEntry)
    if (cms_loading && cmsEntry !== null) {
      setFormData({
        imgSubject: !cmsEntry.imgSubject ? '' : cmsEntry.imgSubject,
        imgCaption: !cmsEntry.imgCaption ? '' : cmsEntry.imgCaption,
        imgCategory: !cmsEntry.imgCategory ? '' : cmsEntry.imgCategory,
        imgOrientation: !cmsEntry.imgOrientation ? '' : cmsEntry.imgOrientation,
        imgPolaroid: !cmsEntry.imgPolaroid ? false : cmsEntry.imgPolaroid,
        imgLandingPage: !cmsEntry.imgLandingPage
          ? false
          : cmsEntry.imgLandingPage,
        source: !cmsEntry.source ? '' : cmsEntry.source,
      })
    }
  }, [cms_loading, cmsEntry])

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
    updateCMS(id, formData)
    navigate('../cms')
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
  updateCMS,
  readCMSEntry,
})(PhotoCMSUpdate)
