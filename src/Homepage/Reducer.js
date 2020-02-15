import { RECEIVE_CONCEPT, REQUEST_CONCEPT, FAILURE_CONCEPT } from 'ActionTypes'

const initialState = {
  concepts: []
}

export default function HomepageReducer(state = initialState, action) {
  const { payload } = action
  switch (action.type) {
    case REQUEST_CONCEPT:
      return { ...state, loader: true }
    case RECEIVE_CONCEPT:
      return { ...state, loader: false, concepts: payload }
    case FAILURE_CONCEPT:
      return { ...state, loader: false, concepts: [], errorMessage: payload }

    default:
      return state
  }
}
