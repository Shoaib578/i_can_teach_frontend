import React from "react";
import './index.css'
import AdminNav from '../../../components/AdminNav'

const AddAnswer = () => {
    return (
        <div className="CreatingSubscriptionBody">
            <AdminNav/>


            <div className="AddExam">
                <h1>Add answers</h1>
                <div className="AddExamForm">
                    <input type="text" placeholder="Title"/>
                    <select>
                        <option>Select Question</option>
                        <option>Question</option>
                        <option>Question</option>
                        <option>Question</option>
                        <option>Question</option>
                    </select>

                    <select>
                        <option>Select Exam</option>
                        <option>Exam</option>
                        <option>Exam</option>
                        <option>Exam</option>
                        <option>Exam</option>
                        <option>Exam</option>
                    </select>

                    <select>
                        <option>Select sub-exam</option>
                        <option>Exam</option>
                        <option>Exam</option>
                        <option>Exam</option>
                        <option>Exam</option>
                        <option>Exam</option>
                    </select>

                    <label style={{color:'white'}} htmlFor="answer">Add answer: </label>

                    <input id="answer" type="text" placeholder="option 1"/>
                    <input id="answer" type="text" placeholder="option 2"/>
                    <input id="answer" type="text" placeholder="option 3"/>
                    <input id="answer" type="text" placeholder="option 4"/>
                    
                    <button>Add</button>
                </div>
            </div>

        </div>
    )
}

export default AddAnswer;