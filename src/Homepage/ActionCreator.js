import {
    receiveConceptList,
    requestConceptList,
    requestQuestionList,
    receiveQuestionList
} from './Actions'

const conceptList = [
    {id: 1, subject: 'Thermodynamics'},
    {id: 2, subject: 'Physics'},
    {id: 3, subject: 'Maths'}
];

const questionList = [
    {
        id: '1',
        board: 'board 1',
        concept: 'concept 1',
        question_name: 'question_name 1',
        option1: 'option1 1',
        option2: 'option2 1',
        option3: 'option3 1',
        option4: 'option4 1',
        correct_option: 'correct_option 1',
        difficulty_level: 'difficulty_level 1',
        marks: 'marks 1',
        created_at: 1581699976,
        grade: 75
    }
];

/**
 * @description Get concept list
 * @param {} dispatch
 */

export const fetchConcept = data => dispatch => {
    console.log(data);
    dispatch(requestConceptList())
    setTimeout(() => {
        dispatch(receiveConceptList(conceptList))
    }, 2000)
}

/**
 * @description Get que list
 * @param {} dispatch
 */
export const fetchQuestions = data => dispatch => {
    dispatch(requestQuestionList())
    console.log(data);
    setTimeout(() => {
        dispatch(receiveQuestionList(questionList))
    }, 2000)
}
