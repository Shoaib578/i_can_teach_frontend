import React, { useState } from "react";
import './index.css'
import AdminNav from '../../../components/AdminNav'
import { add_answer } from "../../../call_apis";
import { message } from "antd";

const AddAnswer = () => {

    const [answer,setAnswer] = useState('')
    const [correct,setCorrect] = useState('')

    const insert_answer = async()=>{
        const question_id = await window.location.pathname.split('/')[4]
        if(answer.length<1 || correct.length<1){
            message.error("Please fill all fields")
            return
        }
        await add_answer(question_id, answer, correct)
        .then(res=>{
            if(res.data.is_added){
                message.success("Answer added successfully")
            }
        })
        .catch(err=>{
            message.error("Something went wrong")
        })
    }
    return (
        <div className="CreatingSubscriptionBody">
            <AdminNav/>


            <div className="AddExam">
                <h1>Add answer</h1>
                <div className="AddExamForm">
                    <input type="text" placeholder="Answer" onChange={(val)=>setAnswer(val.target.value)}/>
                    <select onChange={(val)=>setCorrect(val.target.value)}>
                        <option>Correct</option>
                        <option value={true}>Yes</option>
                        <option value={false}>No</option>
                      
                    </select>

                   
                    
                    <button onClick={insert_answer}>Add</button>
                </div>
            </div>

        </div>
    )
}

export default AddAnswer;