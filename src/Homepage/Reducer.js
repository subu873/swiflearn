import {
  RECEIVE_CONCEPT,
  REQUEST_CONCEPT,
  FAILURE_CONCEPT,
  RECEIVE_QUESTION,
  REQUEST_QUESTION,
  FAILURE_QUESTION
} from "ActionTypes";

const initialState = {
  concepts: [],
  questionList: []
};

export default function HomepageReducer(state = initialState, action) {
  const { payload } = action;
  switch (action.type) {
    case REQUEST_CONCEPT:
      return { ...state, loader: true };
    case RECEIVE_CONCEPT:
      return { ...state, loader: false, concepts: payload };
    case FAILURE_CONCEPT:
      return { ...state, loader: false, concepts: [], errorMessage: payload };

    case REQUEST_QUESTION:
      return { ...state, loader: true };
    case RECEIVE_QUESTION:
      return { ...state, loader: false, questionList: payload };
    case FAILURE_QUESTION:
      return {
        ...state,
        loader: false,
        questionList: [],
        errorMessage: payload
      };

    default:
      return state;
  }
}
