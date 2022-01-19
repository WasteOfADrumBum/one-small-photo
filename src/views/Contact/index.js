import React from 'react'
import { connect } from 'react-redux'
import { gsap } from 'gsap'
/* https://github.com/arqex/react-datetime */
import Datetime from 'react-datetime'
import { createInbox } from '../../actions'
import './_contact.scss'

const Contact = ({ createInbox, inbox: { error, success } }) => {
  const [formData, setFormData] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    instagramHandle: '',
    comment: '',
    type: '',
    date: '',
    budget: '',
    location: '',
    referral: '',
    method: '',
  })

  const {
    firstName,
    lastName,
    email,
    phone,
    instagramHandle,
    comment,
    type,
    date,
    budget,
    location,
    referral,
  } = formData

  /* GSAP Animation */
  React.useEffect(() => {
    var tl = gsap.timeline()
    var tl2 = gsap.timeline()

    tl.from('.polaroid-1', {
      duration: 3,
      x: -1280,
      opacity: 0,
    })
      .from('.polaroid-2', {
        duration: 2,
        y: -1080,
        opacity: 0,
      })
      .from('.polaroid-3', {
        duration: 2,
        x: 1280,
        opacity: 0,
      })
    tl2
      .to('.polaroid-1', 4, { rotation: -15, transformOrigin: 'left' })
      .to('.polaroid-2', 2, { rotation: 20, transformOrigin: 'left' })
      .to('.polaroid-3', 2, { rotation: -25, transformOrigin: 'left' })
  }, [])

  const Alert = (error) => {
    return (
      <div className="toast-container position-fixed bottom-0 end-0  p-3">
        {error.error.map((alert, i) => (
          <div
            className="toast show bg-warning text-black"
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
            key={i}
          >
            <div className="toast-header">
              <strong className="me-auto">
                <i className="bi bi-exclamation-triangle me-2" />
                ALERT
              </strong>
              <small className="text-muted">just now</small>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="toast"
                aria-label="Close"
              ></button>
            </div>
            <div className="toast-body">{alert.msg}</div>
          </div>
        ))}
      </div>
    )
  }

  const SuccessAlert = () => {
    return (
      <div className="toast-container position-fixed bottom-0 end-0  p-3">
        <div
          className="toast show bg-success text-white"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div className="toast-header text-success">
            <strong className="me-auto">
              <i className="bi bi-check-circle me-2" />
              SUCCESS
            </strong>
            <small className="text-muted">just now</small>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="toast"
              aria-label="Close"
            ></button>
          </div>
          <div className="toast-body">
            Please allow 2-3 business days for a reply. Thank you!
          </div>
        </div>
      </div>
    )
  }

  // Captures changes made to the form data
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const onChangeDate = (e) => {
    setFormData({ ...formData, date: e._d })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    createInbox(formData)
  }

  /* If successful submission clearn form data */
  React.useEffect(() => {
    if (success && (success.status === 'success' || success.status === true)) {
      // Reset fromData
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        instagramHandle: '',
        comment: '',
        type: '',
        date: '',
        budget: '',
        location: '',
        referral: '',
        read: false,
        method: '',
      })
    }
  }, [success])

  console.log(formData)

  return (
    <div className="contact mt-5">
      <div className="container">
        {success &&
        (success.status === 'success' || success.status === true) ? (
          <SuccessAlert />
        ) : error && error !== null && error.errors.data ? (
          <Alert error={error.errors.data} />
        ) : (
          <></>
        )}
        <h1 className="text-start my-5 pt-5 pb-2 border-bottom">
          Let's Connect
        </h1>
        <form className="px-5" onSubmit={(e) => onSubmit(e)}>
          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="inputFirstName" className="form-label">
                First Name
                <sup>
                  {' '}
                  <i className="bi bi-asterisk text-warning " />
                </sup>
              </label>
              <input
                type="text"
                name="firstName"
                value={firstName}
                onChange={(e) => onChange(e)}
                className="form-control"
                id="inputFirstName"
                placeholder="Jane"
                aria-describedby="firstNameHelp"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputLastName" className="form-label">
                Last Name
                <sup>
                  {' '}
                  <i className="bi bi-asterisk text-warning " />
                </sup>
              </label>
              <input
                type="text"
                name="lastName"
                value={lastName}
                onChange={(e) => onChange(e)}
                className="form-control"
                id="inputLastName"
                placeholder="Doe"
                aria-label="lastNameHelp"
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="inputEmail" className="form-label">
                Email address
                <sup>
                  {' '}
                  <i className="bi bi-asterisk text-warning " />
                </sup>
              </label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => onChange(e)}
                className="form-control"
                id="inputEmail"
                placeholder="OneSmallPhoto@gmail.com"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="col-md-6">
              <label htmlFor="inputPhoneNumber" className="form-label">
                Phone Number
              </label>
              <input
                type="text"
                name="phone"
                value={phone}
                onChange={(e) => onChange(e)}
                className="form-control"
                id="inputPhoneNumber"
                placeholder="828-333-8983"
                aria-label="phoneHelp"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 my-1 align-items-center">
              <div className="polaroidSeries d-grid p-2">
                <img
                  src="./assets/images/polaroid-sirina-elevator-1.png"
                  alt="sirina"
                  className="polaroid-1"
                />
                <img
                  src="./assets/images/polaroid-sirina-elevator-2.png"
                  alt="sirina"
                  className="polaroid-2"
                />
                <img
                  src="./assets/images/polaroid-sirina-elevator-3.png"
                  alt="sirina"
                  className="polaroid-3"
                />
              </div>
            </div>
            <div className="col-md-8">
              <div className="row mb-3">
                <div className="col-md-3">
                  <label htmlFor="inputBudget" className="form-label">
                    Budget
                  </label>
                  <div className="input-group">
                    <span className="input-group-text">$</span>
                    <input
                      type="text"
                      name="budget"
                      value={budget}
                      onChange={(e) => onChange(e)}
                      className="form-control"
                      id="inputBudget"
                      placeholder="250.95"
                      aria-describedby="budgetHelp"
                    />
                  </div>
                  <div id="budgetHelp" className="form-text">
                    I offer TFP.
                  </div>
                </div>
                <div className="col-md-9">
                  <label htmlFor="inputSessionType" className="form-label">
                    Session Type
                    <sup>
                      {' '}
                      <i className="bi bi-asterisk text-warning " />
                    </sup>
                  </label>
                  <input
                    type="search"
                    name="type"
                    value={type}
                    onChange={(e) => onChange(e)}
                    list="sessionTypeList"
                    className="form-control"
                    id="inputSessionType"
                    placeholder="Portrait/Wedding/TFP"
                    aria-label="sessionHelp"
                  />
                  <datalist id="sessionTypeList">
                    <option value="Portrait" />
                    <option value="Engagement/Couples" />
                    <option value="Wedding" />
                    <option value="Elopement" />
                    <option value="Proposal" />
                    <option value="Commercial" />
                    <option value="Landscape" />
                    <option value="Maternity" />
                    <option value="Boudoir" />
                    <option value="Menotrship" />
                    <option value="Modeling" />
                    <option value="TFP" />
                  </datalist>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-md-3">
                  <label htmlFor="inputDate" className="form-label">
                    Date
                    <sup>
                      {' '}
                      <i className="bi bi-asterisk text-warning " />
                    </sup>
                  </label>
                  <Datetime
                    name="date"
                    value={date}
                    onChange={(e) => onChangeDate(e)}
                  />
                </div>
                <div className="col-md-9">
                  <label htmlFor="inputLocation" className="form-label">
                    Location
                    <sup>
                      {' '}
                      <i className="bi bi-asterisk text-warning " />
                    </sup>
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={location}
                    onChange={(e) => onChange(e)}
                    className="form-control"
                    id="inputLocation"
                    placeholder="Studio/City/Place"
                    aria-label="locationHelp"
                  />
                </div>
              </div>
              <div className="row mt-4 mb-3 py-3">
                <div className="col-md-12">
                  <label htmlFor="contactMethod" className="form-label">
                    Preferred Contact Method
                    <sup>
                      {' '}
                      <i className="bi bi-asterisk text-warning " />
                    </sup>
                  </label>
                </div>
                <div className="col-md-12">
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="method"
                      id="inlineRadio1"
                      value="AM Call (9a-5p)"
                      onChange={(e) => onChange(e)}
                    />
                    <label className="form-check-label" htmlFor="inlineRadio1">
                      AM Call (9a-5p)
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="method"
                      id="inlineRadio2"
                      value="PM Call (5p-7p)"
                      onChange={(e) => onChange(e)}
                    />
                    <label className="form-check-label" htmlFor="inlineRadio2">
                      PM Call (5p-7p)
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="method"
                      id="inlineRadio3"
                      value="Text"
                      onChange={(e) => onChange(e)}
                    />
                    <label className="form-check-label" htmlFor="inlineRadio3">
                      Text
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="method"
                      id="inlineRadio4"
                      value="Email"
                      onChange={(e) => onChange(e)}
                    />
                    <label className="form-check-label" htmlFor="inlineRadio4">
                      Email
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-12">
              <label htmlFor="inputComment" className="form-label">
                Comments
              </label>
              <textarea
                type="text"
                name="comment"
                value={comment}
                onChange={(e) => onChange(e)}
                rows="5"
                className="form-control"
                id="inputComment"
                placeholder="Details"
                aria-describedby="commentHelp"
              />
            </div>
          </div>
          <div className="row mb-3 mt-5 pt-5 border-top">
            <div className="col-md-6">
              <label htmlFor="inputInstagramHandle" className="form-label">
                Instagram Handle
              </label>
              <div className="input-group">
                <span className="input-group-text">@</span>
                <input
                  type="text"
                  name="instagramHandle"
                  value={instagramHandle}
                  onChange={(e) => onChange(e)}
                  className="form-control"
                  id="inputInstagramHandle"
                  placeholder="OneSmallPhoto"
                  aria-describedby="instagramHandleHelp"
                />
              </div>
            </div>
            <div className="col-md-6">
              <label htmlFor="inputReferral" className="form-label">
                How Did You Hear About Me?
              </label>
              <input
                type="search"
                name="referral"
                value={referral}
                onChange={(e) => onChange(e)}
                list="referralList"
                className="form-control"
                id="inputReferral"
                placeholder="How'd you find me? I was hiding."
                aria-label="referralHelp"
              />
              <datalist id="referralList">
                <option value="This Website" />
                <option value="Google" />
                <option value="Facebook" />
                <option value="Model Mayhem" />
                <option value="The Knot" />
                <option value="Instagram" />
                <option value="Vendor Referral" />
                <option value="Client Referral" />
                <option value="Unknown" />
              </datalist>
            </div>
          </div>
          <div className="row mb-3 mt-5 pt-5 border-top">
            <button
              type="submit"
              id="submitButton"
              className="btn btn-outline-warning btn-sm col-md-1"
            >
              Submit
            </button>
          </div>
        </form>
        <div className="contactInfo  my-5">
          <div className="row d-flex justify-content-center algin-items-center">
            <div className="col-md-2 text-center">
              <i className="bi bi-house fs-1" /> <p>Trinity NC USA</p>
            </div>
            <div className="col-md-2 text-center">
              <i className="bi bi-envelope fs-1" />
              <p>OneSmallPhoto@gmail.com</p>
            </div>
            <div className="col-md-2 text-center">
              <i className="bi bi-phone fs-1" /> <p>828.333.8983</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  InboxReducer: state.InboxReducer,
  inbox: state.inbox,
})

export default connect(mapStateToProps, { createInbox })(Contact)
