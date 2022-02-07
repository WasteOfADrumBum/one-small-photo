import axios from 'axios'

export const GET_CMS_ENTRIES = 'GET_CMS_ENTRIES'
export const GET_CMS_ENTRY = 'GET_CMS_ENTRY'
export const UPDATE_CMS = 'UPDATE_CMS'
export const DELETE_CMS = 'DELETE_CMS'
export const RESET_CMS = 'RESET_CMS'
export const CMS_LOADING = 'CMS_LOADING '
export const CMS_FAIL = 'CMS_FAIL'
export const CMS_SUCCESS = 'CMS_SUCCESS'

// @Route   GET api/cms
// @Desc    Read All CMS
// @Action  readAllCMSEntries()
// @Access  Private
export const readAllCMSEntries = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/cms')
    dispatch({
      type: GET_CMS_ENTRIES,
      payload: res.data,
    })
  } catch (err) {
    if (err.response.data.errors) {
      dispatch({
        payload: { msg: err.response.statusText, status: err.response.status },
      })
    }

    dispatch({
      type: CMS_FAIL,
      payload: { msg: err.response.statusText, status: err.response.status },
    })
  }
}

// @Route   GET api/cms/:id
// @Desc    Read CMS by ID
// @Action  readCMSEntry()
// @Access  Private
export const readCMSEntry = (id) => async (dispatch) => {
  dispatch({ type: RESET_CMS })
  try {
    const res = await axios.get(`/api/cms/${id}`)
    dispatch({
      type: GET_CMS_ENTRY,
      payload: res.data,
    })
  } catch (err) {
    if (err.response.data.errors) {
      dispatch({
        payload: { msg: err.response.statusText, status: err.response.status },
      })
    }

    dispatch({
      type: CMS_FAIL,
      payload: { msg: err.response.statusText, status: err.response.status },
    })
  }
}

// @Route   POST api/cms/create-cms
// @Desc    Create CMS
// @Action  createCMS()
// @Access  Private
export const createCMS = (formData) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
    await axios
      .post('/api/cms/create-cms', formData, config)
      .then((res) => console.log(res.data))
    dispatch({
      type: CMS_SUCCESS,
      payload: { msg: formData, status: 'success' },
    })
  } catch (err) {
    if (err.response.data.errors) {
      dispatch({
        payload: { msg: err.response.statusText, status: err.response.status },
      })
    }

    dispatch({
      type: CMS_FAIL,
      payload: {
        msg: err.response.statusText,
        status: err.response.status,
        errors: err.response.data,
      },
    })
  }
}

// @Route   PUT api/cms/update-cms/:id
// @Desc    Update CMS
// @Action  updateCMS()
// @Access  Private
export const updateCMS = (id, formData) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
    const res = await axios.post(`/api/cms/update-cms/${id}`, formData, config)
    dispatch({
      type: UPDATE_CMS,
      payload: res.data,
    })
  } catch (err) {
    console.log(err)
    dispatch({
      type: CMS_FAIL,
      payload: { msg: err.response.statusText, status: err.response.status },
    })
  }
}

// @Route   PUT api/cms/update-cms-status/:id
// @Desc    Update CMS Status Only
// @Action  updateCMSStatus()
// @Access  Private
export const updateCMSStatus = (id, formData) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
    const res = await axios.post(
      `/api/cms/update-cms-status/${id}`,
      formData,
      config,
    )
    dispatch({
      type: UPDATE_CMS,
      payload: res.data,
    })
  } catch (err) {
    console.log(err)
    dispatch({
      type: CMS_FAIL,
      payload: { msg: err.response.statusText, status: err.response.status },
    })
  }
}

// @Route   PUT api/cms/update-cms-comment/:id
// @Desc    Update CMS Status and Comment
// @Action  updateCMSComment()
// @Access  Private
export const updateCMSComment = (id) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
    const res = await axios.post(`/api/cms/update-cms-comment/${id}`, config)
    dispatch({
      type: UPDATE_CMS,
      payload: res.data,
    })
  } catch (err) {
    console.log(err)
    dispatch({
      type: CMS_FAIL,
      payload: { msg: err.response.statusText, status: err.response.status },
    })
  }
}

// @Route   DELTE api/cms/delete-cms/:id
// @Desc    Delete CMS
// @Action  deleteCMS()
// @Access  Private
export const deleteCMS = (id) => async (dispatch) => {
  if (
    window.confirm(
      'Are you sure you want to delete this cms? This cannot be undone.',
    )
  ) {
    try {
      const res = await axios.delete(`/api/cms/delete-cms/${id}`)
      dispatch({
        type: DELETE_CMS,
        payload: res.data,
      })
    } catch (err) {
      console.log(err)
      dispatch({
        type: CMS_FAIL,
        payload: { msg: err.response.statusText, status: err.response.status },
      })
    }
  }
}

// @Desc    reset CMS
// @Action  resetCMS()
// @Access  Private
export const resetCMS = () => async (dispatch) => {
  dispatch({ type: CMS_LOADING })

  try {
    dispatch({
      type: RESET_CMS,
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
      type: CMS_FAIL,
      payload: { msg: err.response.statusText, status: err.response.status },
    })
  }
}
