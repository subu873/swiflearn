import React, {useState} from 'react'

const Grades = ['6th', '7th', '8th', '9th', '10th', '11th', '12']
const Boards = ['CBSE', 'ICSE', 'IB', 'IGCSE', 'STATE BOARD']
const Concepts = ['Thermodynamics', 'Electricity', 'Light', 'Energy', 'Heat']

export default function GradeForm(props) {
    const [grade, setGrade] = useState('')
    const [board, setBoard] = useState('')
    const [concept, setConcept] = useState('')

    const onGradeChanged = event => {
        setGrade(event.target.value);
        setBoard('');
        setConcept('');
    };

    const onBoardChanged = event => {
        setBoard(event.target.value);
        setConcept('');
        props.fetchConcept({grade, board})
    };
    const onConceptChanged = event => {
        setConcept(event.target.value)
        props.fetchQuestions({grade, board, concept})
    };

    return (
        <React.Fragment>
            <div className='box-layout'>
                <div className='col-md-12 mb-3'>
                    <label htmlFor='Grades'>Please Select Grade</label>
                    <select className='form-control' name='Grades' id='Grades' value={grade} onChange={onGradeChanged}>
                        <option value=''></option>
                        {Grades.map(grade => (
                            <option key={grade}>{grade}</option>
                        ))}
                    </select>
                </div>
                <div className='col-md-12 mb-3'>
                    <label htmlFor='Boards'>Please Select Board</label>
                    <select className='form-control' name='Boards' id='Boards' value={board} onChange={onBoardChanged}>
                        <option value=''></option>
                        {Boards.map(board => (
                            <option key={board}>{board}</option>
                        ))}
                    </select>
                </div>
                <div className='col-md-12 mb-3'>
                    <label htmlFor='concepts'>Please Select Concept</label>
                    <select className='form-control' name='Concepts' id='concepts' value={concept}
                            onChange={onConceptChanged}>
                        <option value=''></option>
                        {Concepts.map(concept => (
                            <option key={concept}>{concept}</option>
                        ))}
                    </select>
                </div>
            </div>
        </React.Fragment>
    )
}
