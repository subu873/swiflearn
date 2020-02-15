import React from 'react'

export default class QuestionTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            QuestionsLists: [
                {
                    "id": "1",
                    "board": "board 1",
                    "concept": "concept 1",
                    "question_name": "question_name 1",
                    "option1": "option1 1",
                    "option2": "option2 1",
                    "option3": "option3 1",
                    "option4": "option4 1",
                    "correct_option": "correct_option 1",
                    "difficulty_level": "difficulty_level 1",
                    "marks": "marks 1",
                    "created_at": 1581699976,
                    "grade": 75
                },
                {
                    "id": "2",
                    "board": "board 2",
                    "concept": "concept 2",
                    "question_name": "question_name 2",
                    "option1": "option1 2",
                    "option2": "option2 2",
                    "option3": "option3 2",
                    "option4": "option4 2",
                    "correct_option": "correct_option 2",
                    "difficulty_level": "difficulty_level 2",
                    "marks": "marks 2",
                    "created_at": 1581699916,
                    "grade": 28
                },
                {
                    "id": "3",
                    "board": "board 3",
                    "concept": "concept 3",
                    "question_name": "question_name 3",
                    "option1": "option1 3",
                    "option2": "option2 3",
                    "option3": "option3 3",
                    "option4": "option4 3",
                    "correct_option": "correct_option 3",
                    "difficulty_level": "difficulty_level 3",
                    "marks": "marks 3",
                    "created_at": 1581699856,
                    "grade": 44
                },
                {
                    "id": "4",
                    "board": "board 4",
                    "concept": "concept 4",
                    "question_name": "question_name 4",
                    "option1": "option1 4",
                    "option2": "option2 4",
                    "option3": "option3 4",
                    "option4": "option4 4",
                    "correct_option": "correct_option 4",
                    "difficulty_level": "difficulty_level 4",
                    "marks": "marks 4",
                    "created_at": 1581699796,
                    "grade": 61
                }
            ]
        };
    }

    handleChange(index, dataType, value) {
        const newState = this.state.QuestionsLists.map((item, i) => {
            if (i == index) {
                return {...item, [dataType]: value};
            }
            return item;
        });

        this.setState({
            QuestionsLists: newState
        });

    }

    saveQuestionNewDetails() {
        var scope = this;
        console.log(scope);
    }

    render() {
        console.clear();
        console.log(JSON.stringify(this.state.QuestionsLists));
        return (

            <React.Fragment>
                <div className='row'>
                    <div className='col-md-12'>
                        <table className="table table-bordered table-responsive">
                            <thead>
                            <tr>
                                <th>Id</th>
                                <th>Grade</th>
                                <th>Board</th>
                                <th>concept</th>
                                <th>question_name</th>
                                <th>Option1</th>
                                <th>Option2</th>
                                <th>Option3</th>
                                <th>Option4</th>
                                <th>correct_option</th>
                                <th>difficulty_level</th>
                                <th>marks</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {this.state.QuestionsLists.map((row, index) => {
                                return (
                                    <tr>
                                        <td>
                                            {this.state.QuestionsLists[index].id}
                                        </td>
                                        <td>
                                            <input onChange={(e) => this.handleChange(index, 'grade', e.target.value)}
                                                   type='text'
                                                   className='form-control'
                                                   value={this.state.QuestionsLists[index].grade}/>
                                        </td>
                                        <td>
                                            <input onChange={(e) => this.handleChange(index, 'board', e.target.value)}
                                                   type='text'
                                                   className='form-control'
                                                   value={this.state.QuestionsLists[index].board}/>
                                        </td>
                                        <td>
                                            <input onChange={(e) => this.handleChange(index, 'concept', e.target.value)}
                                                   type='text'
                                                   className='form-control'
                                                   value={this.state.QuestionsLists[index].concept}/>
                                        </td>
                                        <td>
                                            <input
                                                onChange={(e) => this.handleChange(index, 'question_name', e.target.value)}
                                                type='text'
                                                className='form-control'
                                                value={this.state.QuestionsLists[index].question_name}/>
                                        </td>
                                        <td>
                                            <input onChange={(e) => this.handleChange(index, 'option1', e.target.value)}
                                                   type='text'
                                                   className='form-control'
                                                   value={this.state.QuestionsLists[index].option1}/>
                                        </td>
                                        <td>
                                            <input onChange={(e) => this.handleChange(index, 'option2', e.target.value)}
                                                   type='text'
                                                   className='form-control'
                                                   value={this.state.QuestionsLists[index].option2}/>
                                        </td>
                                        <td>
                                            <input onChange={(e) => this.handleChange(index, 'option3', e.target.value)}
                                                   type='text'
                                                   className='form-control'
                                                   value={this.state.QuestionsLists[index].option3}/>
                                        </td>
                                        <td>
                                            <input onChange={(e) => this.handleChange(index, 'option4', e.target.value)}
                                                   type='text'
                                                   className='form-control'
                                                   value={this.state.QuestionsLists[index].option4}/>
                                        </td>
                                        <td>
                                            <input
                                                onChange={(e) => this.handleChange(index, 'correct_option', e.target.value)}
                                                type='text'
                                                className='form-control'
                                                value={this.state.QuestionsLists[index].correct_option}/>
                                        </td>
                                        <td>
                                            <input
                                                onChange={(e) => this.handleChange(index, 'difficulty_level', e.target.value)}
                                                type='text'
                                                className='form-control'
                                                value={this.state.QuestionsLists[index].difficulty_level}/>
                                        </td>
                                        <td>
                                            <input onChange={(e) => this.handleChange(index, 'marks', e.target.value)}
                                                   type='text'
                                                   className='form-control'
                                                   value={this.state.QuestionsLists[index].marks}/>
                                        </td>
                                        <td>
                                            <button className='btn btn-primary'
                                                    onClick={this.saveQuestionNewDetails.bind(this)}>Save
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

