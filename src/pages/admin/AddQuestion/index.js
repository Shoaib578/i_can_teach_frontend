import React from "react";
import './index.css'
import AdminNav from '../../../components/AdminNav'

const AddQuestion = () => {
    return (
        <div className="CreatingSubscriptionBody">
            <AdminNav/>


            <div className="AddExam">
                <h1>Add question</h1>
                <div className="AddExamForm">
                    <input type="text" placeholder="Title"/>
                    <textarea rows='10' className="Description" placeholder="Question here..."></textarea>
                    <select>
                        <option>Select sub-exam</option>
                        <option>Exam</option>
                        <option>Exam</option>
                        <option>Exam</option>
                        <option>Exam</option>
                        <option>Exam</option>
                    </select>
                    
                    <button>Create</button>
                </div>
            </div>

        </div>
    )
}

export default AddQuestion;