import React, {useState} from "react";

const Grades = ["6th", "7th", "8th", "9th", "10th", "11th", "12"];
const Boards = ["CBSE", "ICSE", "IB", "IGCSE", "STATE BOARD"];

export default function GradeForm(props) {
    const {concepts, fetchConcept, fetchQuestions} = props;
    const [grade, setGrade] = useState("");
    const [board, setBoard] = useState("");
    const [concept, setConcept] = useState("");

    const onGradeChanged = event => {
        setGrade(event.target.value);
        setBoard("");
        setConcept("");
    };

    const onBoardChanged = event => {
        const {value} = event.target;
        setBoard(value);
        setConcept("");
        fetchConcept({grade, board: value});
    };
    const onConceptChanged = event => {
        const {value} = event.target;

        setConcept(value);
        fetchQuestions({grade, board, concept: value});
    };

    return (
        <React.Fragment>
            <div className="box-layout">
                <div className="col-md-12 mb-3">
                    <label htmlFor="Grades">Please Select Grade</label>
                    <select
                        className="form-control"
                        name="Grades"
                        id="Grades"
                        value={grade}
                        onChange={onGradeChanged}
                    >
                        <option value=""></option>
                        {Grades.map(grade => (
                            <option key={grade}>{grade}</option>
                        ))}
                    </select>
                </div>
                <div className="col-md-12 mb-3">
                    <label htmlFor="Boards">Please Select Board</label>
                    <select
                        className="form-control"
                        name="Boards"
                        id="Boards"
                        value={board}
                        onChange={onBoardChanged}
                    >
                        <option value=""></option>
                        {Boards.map(board => (
                            <option key={board}>{board}</option>
                        ))}
                    </select>
                </div>
                {concepts.length ? (
                    <div className="col-md-12 mb-3">
                        <label htmlFor="concepts">Please Select Concept</label>
                        <select
                            className="form-control"
                            name="Concepts"
                            id="concepts"
                            value={concept}
                            onChange={onConceptChanged}
                        >
                            <option value=""></option>
                            {concepts.map(concept => (
                                <option key={concept}>{concept}</option>
                            ))}
                        </select>
                    </div>
                ) : null}
            </div>
        </React.Fragment>
    );
}
