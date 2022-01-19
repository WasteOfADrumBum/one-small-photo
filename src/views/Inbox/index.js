import React from 'react'
import { connect } from 'react-redux'
import { useAuth0 } from '@auth0/auth0-react'
import moment from 'moment'
import {
  readAllInboxEntries,
  deleteInbox,
  updateInboxStatus,
  resetInbox,
} from '../../actions'
import './_inbox.scss'

const Inbox = ({
  readAllInboxEntries,
  deleteInbox,
  updateInboxStatus,
  resetInbox,
  inbox: { inboxEntries, loading: inbox_loading },
}) => {
  const { user, isAuthenticated } = useAuth0()

  /* Load all entries */
  React.useEffect(() => {
    readAllInboxEntries()
  }, [readAllInboxEntries])

  /* Update [read: True] */
  const onClickRead = (id) => {
    const formData = {
      read: true,
    }
    updateInboxStatus(id, formData)
    //reset redux state
    resetInbox()
  }

  /* Update [read: False] */
  const onClickUnread = (id) => {
    const formData = {
      read: false,
    }
    updateInboxStatus(id, formData)
    //reset redux state
    resetInbox()
  }

  // Remove entry by ID
  const onDelete = (id) => {
    deleteInbox(id)
  }

  console.log(inboxEntries)

  return (
    <div className="inbox mt-5">
      <div className="container">
        <h1 className="text-start my-5 pt-5 pb-2 border-bottom">Inbox</h1>
        {!inbox_loading ? (
          <p>Loading...</p>
        ) : (
          <>
            {isAuthenticated &&
            (user.email === 'jmsmall89@gmail.com' ||
              user.email === 'onesmallphoto@gmail.com') ? (
              <>
                {inboxEntries &&
                  inboxEntries.length > 0 &&
                  inboxEntries.map((entry, i) => (
                    <div
                      className={
                        `inboxEntry px-5 mb-5 ` +
                        (entry.read === true && 'text-secondary')
                      }
                      key={i}
                    >
                      <div className="row mb-3 pb-1 border-bottom border-warning">
                        <div className="col-md-7 fs-3 d-flex align-items-end">
                          <b className="text-uppercase">
                            {entry.contactInfo.name.last}
                          </b>
                          ,{' '}
                          <span className="text-capitalize ms-2">
                            {entry.contactInfo.name.first}
                          </span>
                        </div>
                        <div className="col-md-2 d-flex align-items-end">
                          {entry.contactInfo.contactMethod && (
                            <>
                              {entry.contactInfo.contactMethod ===
                              'AM Call (9a-5p)' ? (
                                <>
                                  <i className="bi bi-brightness-high me-2" />
                                  {entry.contactInfo.contactMethod}
                                </>
                              ) : entry.contactInfo.contactMethod ===
                                'PM Call (5p-7p)' ? (
                                <>
                                  <i className="bi bi-moon-stars me-2" />
                                  {entry.contactInfo.contactMethod}
                                </>
                              ) : entry.contactInfo.contactMethod === 'Text' ? (
                                <>
                                  <i className="bi bi-phone me-2" />
                                  {entry.contactInfo.contactMethod}
                                </>
                              ) : entry.contactInfo.contactMethod ===
                                'Email' ? (
                                <>
                                  <i className="bi bi-envelope me-2" />
                                  {entry.contactInfo.contactMethod}
                                </>
                              ) : (
                                <></>
                              )}
                            </>
                          )}
                        </div>
                        <div className="col-md-2 d-flex align-items-end">
                          {entry.referral && (
                            <>
                              <i className="bi bi-megaphone me-2" />
                              {entry.referral}
                            </>
                          )}
                        </div>
                        <div className="col-md-1 d-flex align-items-end">
                          <i
                            className="bi bi-trash text-danger mx-1"
                            onClick={() => onDelete(entry._id)}
                            type="button"
                          />
                          {entry.read ? (
                            <i
                              className="bi bi-envelope-open text-secondary mx-1"
                              onClick={() => onClickUnread(entry._id)}
                              type="button"
                            />
                          ) : (
                            <i
                              className="bi bi-envelope text-white mx-1"
                              onClick={() => onClickRead(entry._id)}
                              type="button"
                            />
                          )}
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-3">
                          <div className="row">
                            <div className="col-md-12">
                              <p>
                                <i className="bi bi-currency-dollar me-2" />
                                {entry.request.budget
                                  ? entry.request.budget
                                  : 'Discuss at Consultation'}
                              </p>
                            </div>
                            <div className="col-md-12">
                              <p>
                                <i className="bi bi-camera2 me-2" />
                                {entry.request.type}
                              </p>
                            </div>
                            <div className="col-md-12">
                              <p>
                                <i className="bi bi-calendar-event me-2" />
                                {moment(entry.request.date).format(
                                  "ddd, MMMM Do 'YY HH:MM",
                                )}
                              </p>
                            </div>
                            <div className="col-md-12">
                              <p>
                                <i className="bi bi-geo-alt me-2" />
                                {entry.request.location}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <p>
                            <i className="bi bi-chat-right-dots me-2" />
                            {entry.request.comment
                              ? entry.request.comment
                              : 'No Comment'}
                          </p>
                        </div>
                        <div className="col-md-3">
                          <div className="row">
                            <div className="col-md-12">
                              <p>
                                <a
                                  href={`mailto:` + entry.contactInfo.email}
                                  className=" me-2 text-reset"
                                >
                                  <i className="bi bi-envelope" />
                                </a>
                                {entry.contactInfo.email}
                              </p>
                            </div>
                            {entry.contactInfo.phone && (
                              <div className="col-md-12">
                                <p>
                                  <a
                                    href={`tel:` + entry.contactInfo.phone}
                                    className=" me-2 text-reset"
                                  >
                                    <i className="bi bi-phone" />
                                  </a>
                                  {entry.contactInfo.phone}
                                </p>
                              </div>
                            )}
                            {entry.contactInfo.instagramHandle && (
                              <div className="col-md-12">
                                <p>
                                  <a
                                    href={
                                      `https://www.instagram.com/` +
                                      entry.contactInfo.instagramHandle
                                    }
                                    className=" me-2 text-reset"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    <i className="bi bi-instagram" />
                                  </a>
                                  {entry.contactInfo.instagramHandle}
                                </p>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </>
            ) : (
              <div>
                <p>You're not authorized to view this content.</p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  InboxReducer: state.InboxReducer,
  inbox: state.inbox,
})

export default connect(mapStateToProps, {
  readAllInboxEntries,
  deleteInbox,
  updateInboxStatus,
  resetInbox,
})(Inbox)
