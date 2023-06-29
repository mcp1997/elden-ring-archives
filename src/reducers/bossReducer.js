import fixedData from "../fixedData"

const initialState = {
  loading: false,
  bosses: fixedData,
  error: ''
}

const bossReducer = (state = initialState, action) => {
  switch(action.type) {
    default:
      return state
  }
}

export default bossReducer