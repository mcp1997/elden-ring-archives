import { FETCH_START, FETCH_SUCCESS, FETCH_FAILURE } from "../actions"
// import fixedData from "../fixedData"

const initialState = {
  loading: false,
  bosses: [],
  error: ''
}

const bossReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_START:
      return {
        ...state,
        loading: true
      }
    case FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
        bosses: action.payload
      }
    case FETCH_FAILURE:
      return {
        ...state,
        loading: false,
        bosses: [],
        error: action.payload
      }
    default:
      return state
  }
}

export default bossReducer