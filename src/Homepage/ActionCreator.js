import {
    receiveConceptList,
    requestConceptList,
    requestQuestionList,
    receiveQuestionList
} from "./Actions";

const conceptList = {
    "7thCBSE": ["Thermodynamics", "Electricity", "Light", "Energy", "Heat"],
    "6thCBSE": ["Electricity", "Light", "Energy", "Heat"]
};

const questionList = {
    "6thCBSEHeat": [
        {
            id: "1",
            board: "board 1",
            concept: "concept 1",
            question_name: "question_name 1",
            option1: "option1 1",
            option2: "option2 1",
            option3: "option3 1",
            option4: "option4 1",
            correct_option: "correct_option 1",
            difficulty_level: "difficulty_level 1",
            marks: "marks 1",
            created_at: 1581699976,
            grade: 75
        },
        {
            id: "2",
            board: "board 2",
            concept: "concept 2",
            question_name: "question_name 2",
            option1: "option1 2",
            option2: "option2 2",
            option3: "option3 2",
            option4: "option4 2",
            correct_option: "correct_option 2",
            difficulty_level: "difficulty_level 2",
            marks: "marks 2",
            created_at: 1581699916,
            grade: 28
        },
        {
            id: "3",
            board: "board 3",
            concept: "concept 3",
            question_name: "question_name 3",
            option1: "option1 3",
            option2: "option2 3",
            option3: "option3 3",
            option4: "option4 3",
            correct_option: "correct_option 3",
            difficulty_level: "difficulty_level 3",
            marks: "marks 3",
            created_at: 1581699856,
            grade: 44
        },
        {
            id: "4",
            board: "board 4",
            concept: "concept 4",
            question_name: "question_name 4",
            option1: "option1 4",
            option2: "option2 4",
            option3: "option3 4",
            option4: "option4 4",
            correct_option: "correct_option 4",
            difficulty_level: "difficulty_level 4",
            marks: "marks 4",
            created_at: 1581699796,
            grade: 61
        }
    ]
};

/**
 * @description Get concept list
 * @param {} dispatch
 */

export const fetchConcept = data => dispatch => {
    const {board, grade} = data;
    let keys = "";
    for (let key in data) keys += data[key];
    dispatch(requestConceptList());
    setTimeout(() => {
        if (conceptList[keys])
            dispatch(receiveConceptList(conceptList[keys] || []));
        else alert("No data found for this combo");
    }, 500);
};

/**
 * @description Get que list
 * @param {} dispatch
 */
export const fetchQuestions = data => dispatch => {
    dispatch(requestQuestionList());
    let keys = "";
    for (let key in data) keys += data[key];
    console.log(keys);

    setTimeout(() => {
        if (questionList[keys])
            dispatch(receiveQuestionList(questionList[keys] || []));
        else alert("No data found for this combo");
    }, 500);
};
