import axios from 'axios'

export const GET_INBOX_ENTRIES = 'GET_INBOX_ENTRIES'
export const GET_INBOX_ENTRY = 'GET_INBOX_ENTRY'
export const UPDATE_INBOX = 'UPDATE_INBOX'
export const DELETE_INBOX = 'DELETE_INBOX'
export const RESET_INBOX = 'RESET_INBOX'
export const INBOX_LOADING = 'INBOX_LOADING '
export const INBOX_FAIL = 'INBOX_FAIL'
export const INBOX_SUCCESS = 'INBOX_SUCCESS'

// @Route   GET api/inbox
// @Desc    Read All Review
// @Action  readReviews()
// @Access  Private
export const readReviews = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/inbox')
    dispatch({
      type: GET_INBOX_ENTRIES,
      payload: res.data,
    })
  } catch (err) {
    if (err.response.data.errors) {
      dispatch({
        payload: { msg: err.response.statusText, status: err.response.status },
      })
    }

    dispatch({
      type: INBOX_FAIL,
      payload: { msg: err.response.statusText, status: err.response.status },
    })
  }
}

// @Route   GET api/inbox/:id
// @Desc    Read Review by ID
// @Action  readReview()
// @Access  Private
export const readReview = (id) => async (dispatch) => {
  dispatch({ type: RESET_INBOX })
  try {
    const res = await axios.get(`/api/inbox/${id}`)
    dispatch({
      type: GET_INBOX_ENTRY,
      payload: res.data,
    })
  } catch (err) {
    if (err.response.data.errors) {
      dispatch({
        payload: { msg: err.response.statusText, status: err.response.status },
      })
    }

    dispatch({
      type: INBOX_FAIL,
      payload: { msg: err.response.statusText, status: err.response.status },
    })
  }
}

// @Route   POST api/inbox/create-inbox
// @Desc    Create Review
// @Action  createReview()
// @Access  Private
export const createReview = (formData) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
    await axios
      .post('/api/inbox/create-inbox', formData, config)
      .then((res) => console.log(res.data))
    dispatch({
      type: INBOX_SUCCESS,
      payload: { msg: formData, status: 'success' },
    })
  } catch (err) {
    if (err.response.data.errors) {
      dispatch({
        payload: { msg: err.response.statusText, status: err.response.status },
      })
    }

    dispatch({
      type: INBOX_FAIL,
      payload: { msg: err.response.statusText, status: err.response.status },
    })
  }
}

// @Route   PUT api/inbox/update-inbox/:id
// @Desc    Update Review
// @Action  updateReview()
// @Access  Private
export const updateReview = (id, formData) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
    const res = await axios.post(
      `/api/inbox/update-inbox/${id}`,
      formData,
      config,
    )
    dispatch({
      type: UPDATE_INBOX,
      payload: res.data,
    })
  } catch (err) {
    console.log(err)
    dispatch({
      type: INBOX_FAIL,
      payload: { msg: err.response.statusText, status: err.response.status },
    })
  }
}

// @Route   PUT api/inbox/update-inbox-status/:id
// @Desc    Update Review Status Only
// @Action  updateReviewStatus()
// @Access  Private
export const updateReviewStatus = (id) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
    const res = await axios.post(`/api/inbox/update-inbox-status/${id}`, config)
    dispatch({
      type: UPDATE_INBOX,
      payload: res.data,
    })
  } catch (err) {
    console.log(err)
    dispatch({
      type: INBOX_FAIL,
      payload: { msg: err.response.statusText, status: err.response.status },
    })
  }
}

// @Route   PUT api/inbox/update-inbox-comment/:id
// @Desc    Update Review Status and Comment
// @Action  updateReviewComment()
// @Access  Private
export const updateReviewComment = (id) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
    const res = await axios.post(
      `/api/inbox/update-inbox-comment/${id}`,
      config,
    )
    dispatch({
      type: UPDATE_INBOX,
      payload: res.data,
    })
  } catch (err) {
    console.log(err)
    dispatch({
      type: INBOX_FAIL,
      payload: { msg: err.response.statusText, status: err.response.status },
    })
  }
}

// @Route   DELTE api/inbox/delete-inbox/:id
// @Desc    Delete Review
// @Action  deleteReview()
// @Access  Private
export const deleteReview = (id) => async (dispatch) => {
  if (
    window.confirm(
      'Are you sure you want to delete this inbox? This cannot be undone.',
    )
  ) {
    try {
      const res = await axios.delete(`/api/inbox/delete-inbox/${id}`)
      dispatch({
        type: DELETE_INBOX,
        payload: res.data,
      })
    } catch (err) {
      console.log(err)
      dispatch({
        type: INBOX_FAIL,
        payload: { msg: err.response.statusText, status: err.response.status },
      })
    }
  }
}

// @Desc    reset Review
// @Action  resetReview()
// @Access  Private
export const resetReview = () => async (dispatch) => {
  dispatch({ type: INBOX_LOADING })

  try {
    dispatch({
      type: RESET_INBOX,
    })
  } catch (err) {
    if (err.response.data.errors) {
      dispatch({
        payload: {
          msg: err.response.statusText,
          status: err.response.status,
        },
      })
    }

    dispatch({
      type: INBOX_FAIL,
      payload: { msg: err.response.statusText, status: err.response.status },
    })
  }
}
