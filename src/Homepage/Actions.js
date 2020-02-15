import {
    RECEIVE_CONCEPT,
    REQUEST_CONCEPT,
    FAILURE_CONCEPT,
    RECEIVE_QUESTION,
    REQUEST_QUESTION,
    FAILURE_QUESTION
} from 'ActionTypes'

/**
 * @description Request action for getting concept list
 */
export const requestConceptList = () => {
    return {
        type: REQUEST_CONCEPT
    }
}

/**
 * @description Receive action for getting concept list
 */
export const receiveConceptList = payload => {
    return {
        type: RECEIVE_CONCEPT,
        payload
    }
}

/**
 * @description Failure action for getting concept list
 */
export const failureConceptList = payload => {
    return {
        type: FAILURE_CONCEPT,
        payload
    }
}

/**
 * @description Request action for getting question list
 */
export const requestQuestionList = () => {
    return {
        type: REQUEST_QUESTION
    }
}

/**
 * @description Receive action for getting question list
 */
export const receiveQuestionList = payload => {
    return {
        type: RECEIVE_QUESTION,
        payload
    }
}

/**
 * @description Failure action for getting question list
 */
export const failureQuestionList = payload => {
    return {
        type: FAILURE_QUESTION,
        payload
    }
}
