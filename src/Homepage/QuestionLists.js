import React from "react";

export default class QuestionTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            QuestionsLists: []
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.questionList.length) {
            this.setState({QuestionsLists: nextProps.questionList});
        }
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

    saveQuestionNewDetails = data => {
        //data is question id

        alert(
            JSON.stringify(
                this.state.QuestionsLists.filter(function (el) {
                    return el.id == data;
                })
            )
        );

        /*Pass all result in post api so question list will automatic update */
    };

    render() {
        return (
            <React.Fragment>
                <div className="row">
                    <div className="col-md-12">
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
                                    <tr key={this.state.QuestionsLists[index].grade}>
                                        <td>{this.state.QuestionsLists[index].id}</td>
                                        <td>
                                            <input
                                                onChange={e =>
                                                    this.handleChange(index, "grade", e.target.value)
                                                }
                                                type="text"
                                                className="form-control"
                                                value={this.state.QuestionsLists[index].grade}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                onChange={e =>
                                                    this.handleChange(index, "board", e.target.value)
                                                }
                                                type="text"
                                                className="form-control"
                                                value={this.state.QuestionsLists[index].board}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                onChange={e =>
                                                    this.handleChange(index, "concept", e.target.value)
                                                }
                                                type="text"
                                                className="form-control"
                                                value={this.state.QuestionsLists[index].concept}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                onChange={e =>
                                                    this.handleChange(
                                                        index,
                                                        "question_name",
                                                        e.target.value
                                                    )
                                                }
                                                type="text"
                                                className="form-control"
                                                value={this.state.QuestionsLists[index].question_name}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                onChange={e =>
                                                    this.handleChange(index, "option1", e.target.value)
                                                }
                                                type="text"
                                                className="form-control"
                                                value={this.state.QuestionsLists[index].option1}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                onChange={e =>
                                                    this.handleChange(index, "option2", e.target.value)
                                                }
                                                type="text"
                                                className="form-control"
                                                value={this.state.QuestionsLists[index].option2}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                onChange={e =>
                                                    this.handleChange(index, "option3", e.target.value)
                                                }
                                                type="text"
                                                className="form-control"
                                                value={this.state.QuestionsLists[index].option3}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                onChange={e =>
                                                    this.handleChange(index, "option4", e.target.value)
                                                }
                                                type="text"
                                                className="form-control"
                                                value={this.state.QuestionsLists[index].option4}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                onChange={e =>
                                                    this.handleChange(
                                                        index,
                                                        "correct_option",
                                                        e.target.value
                                                    )
                                                }
                                                type="text"
                                                className="form-control"
                                                value={
                                                    this.state.QuestionsLists[index].correct_option
                                                }
                                            />
                                        </td>
                                        <td>
                                            <input
                                                onChange={e =>
                                                    this.handleChange(
                                                        index,
                                                        "difficulty_level",
                                                        e.target.value
                                                    )
                                                }
                                                type="text"
                                                className="form-control"
                                                value={
                                                    this.state.QuestionsLists[index].difficulty_level
                                                }
                                            />
                                        </td>
                                        <td>
                                            <input
                                                onChange={e =>
                                                    this.handleChange(index, "marks", e.target.value)
                                                }
                                                type="text"
                                                className="form-control"
                                                value={this.state.QuestionsLists[index].marks}
                                            />
                                        </td>
                                        <td>
                                            <button
                                                className="btn btn-primary"
                                                onClick={() =>
                                                    this.saveQuestionNewDetails(
                                                        this.state.QuestionsLists[index].id
                                                    )
                                                }
                                            >
                                                Save
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
