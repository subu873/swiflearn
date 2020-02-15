import React from 'react'
import './style-main.css'
import {connect} from 'react-redux'
import {fetchConcept, fetchQuestions} from './ActionCreator'
import 'bootstrap/dist/css/bootstrap.min.css';
import GradeForm from './GradeForm'
import Concepts from './Concepts'
import QuestionTable from "./QuestionLists";


const Homepage = props => {
    const {fetchConcept, fetchQuestions, loader, concepts} = props
    return (
        <React.Fragment>
            <div className='row'>
                <div className='col-md-12'>
                    <img src='https://swiflearn.com/assets/images/logo.png' className='company-logo'/>
                    <h3 className='heading'>Grade Forms with Question Editable</h3>
                </div>
                <GradeForm fetchConcept={fetchConcept}/>
                {/*<Concepts {...props} />*/}
                <QuestionTable fetchQuestions={fetchQuestions}/>
            </div>
        </React.Fragment>
    )
};

const mapStateToProps = state => {
    const {
        global: {loader, concepts}
    } = state
    console.log(loader, concepts);
    return {
        loader,
        concepts
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchConcept: data => dispatch(fetchConcept(data))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Homepage)
