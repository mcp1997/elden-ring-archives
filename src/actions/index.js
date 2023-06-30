import axios from 'axios'

export const FETCH_START = 'FETCH_START'
export const FETCH_SUCCESS = 'FETCH_SUCCESS'
export const FETCH_FAILURE = 'FETCH_FAILURE'

export const fetchStart = () => {
  return({ type: FETCH_START })
}

export const fetchSuccess = filteredArr => {
  return({ type: FETCH_SUCCESS, payload: filteredArr })
}

export const fetchFailure = error => {
  return({ type: FETCH_FAILURE, payload: error })
}

export const getArchive = (url, limit) => async dispatch => {
  dispatch(fetchStart())

  let resultArr = []
  let batch = null
  let page = 0
  do {
    await axios.get(`${url}?limit=${limit}&page=${page}`)
      .then(res => {
        resultArr = resultArr.concat(res.data.data)
        batch = res.data.count
        page++
      })
      .catch(err => {
        console.log(err)
        dispatch(fetchFailure(err.message))
        resultArr = []
        batch = 0
      })
  } while(batch >= limit)

  dispatch(fetchSuccess(resultArr))
}