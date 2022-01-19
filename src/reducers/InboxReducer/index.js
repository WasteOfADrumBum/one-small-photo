import {
  GET_INBOX_ENTRIES,
  GET_INBOX_ENTRY,
  UPDATE_INBOX,
  DELETE_INBOX,
  RESET_INBOX,
  INBOX_LOADING,
  INBOX_FAIL,
  INBOX_SUCCESS,
} from '../../actions'

const ReviewReducer = (
  state = {
    inboxEntries: [], // Pulls in all Reviews
    inboxEntry: null, // Pulls in Specific Review
    loading: false, // Has everything needed been loaded
    success: {},
    error: null,
  },
  action,
) => {
  const { type, payload } = action
  switch (type) {
    case GET_INBOX_ENTRIES:
      return {
        ...state,
        inboxEntries: payload,
        loading: true,
      }
    case GET_INBOX_ENTRY:
      return {
        ...state,
        inboxEntry: payload,
        loading: true,
      }
    case UPDATE_INBOX:
      return {
        ...state,
        inboxEntry: payload,
        loading: true,
      }
    case DELETE_INBOX:
      return {
        ...state,
        inboxEntries: payload,
        loading: true,
      }
    case RESET_INBOX:
      return {
        ...state,
        inboxEntry: null,
        loading: false,
      }
    case INBOX_LOADING:
      return {
        ...state,
        loading: true,
        inboxEntry: null,
        error: {},
      }
    case INBOX_FAIL:
      return {
        ...state,
        error: payload,
        inboxEntries: [],
        inboxEntry: null,
        loading: false,
      }
    case INBOX_SUCCESS:
      return {
        ...state,
        success: payload,
        inboxEntries: [payload, ...state.inboxEntries],
        loading: false,
      }
    default:
      return state
  }
}

export default ReviewReducer
