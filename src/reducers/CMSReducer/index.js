import {
  GET_CMS_ENTRIES,
  GET_CMS_ENTRY,
  UPDATE_CMS,
  DELETE_CMS,
  RESET_CMS,
  CMS_LOADING,
  CMS_FAIL,
  CMS_SUCCESS,
} from '../../actions'

const ReviewReducer = (
  state = {
    cmsEntries: [], // Pulls in all Reviews
    cmsEntry: null, // Pulls in Specific Review
    loading: false, // Has everything needed been loaded
    success: {},
    error: null,
  },
  action,
) => {
  const { type, payload } = action
  switch (type) {
    case GET_CMS_ENTRIES:
      return {
        ...state,
        cmsEntries: payload,
        loading: true,
      }
    case GET_CMS_ENTRY:
      return {
        ...state,
        cmsEntry: payload,
        loading: true,
      }
    case UPDATE_CMS:
      return {
        ...state,
        cmsEntry: payload,
        loading: true,
      }
    case DELETE_CMS:
      return {
        ...state,
        cmsEntries: payload,
        loading: true,
      }
    case RESET_CMS:
      return {
        ...state,
        cmsEntry: null,
        loading: false,
      }
    case CMS_LOADING:
      return {
        ...state,
        loading: true,
        cmsEntry: null,
        error: {},
      }
    case CMS_FAIL:
      return {
        ...state,
        error: payload,
        cmsEntries: [],
        cmsEntry: null,
        loading: false,
      }
    case CMS_SUCCESS:
      return {
        ...state,
        success: payload,
        cmsEntries: [payload, ...state.cmsEntries],
        loading: false,
      }
    default:
      return state
  }
}

export default ReviewReducer
