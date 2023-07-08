import React, { useState } from "react";
import './index.css'
import AdminNav from '../../../components/AdminNav'
import { add_question } from "../../../call_apis";
import { message } from "antd";
const AddQuestion = () => {
    const [question,setQuestion] = useState('')
    const [score,Setscore] = useState('')

    const insert_question = async()=>{
        const sub_exam_id =await window.location.pathname.split('/')[4]
        console.log(sub_exam_id)
        if(question.length<1 || score.length <1){
            message.error("Please fill all the fields")
            return
        }
        await add_question(sub_exam_id,question,score)
        .then(res=>{
            if(res.data.is_added){
                message.success("Question added successfully")
            }else{
                message.error(res.status)
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
                <h1>Add question</h1>
                <div className="AddExamForm">
                    <input type="text" placeholder="Question" onChange={(val)=>setQuestion(val.target.value)}/>
                    <input type="number" placeholder="score" onChange={(val)=>Setscore(val.target.value)}/>
                    
                   
                    
                    <button onClick={insert_question}>Create</button>
                </div>
            </div>

        </div>
    )
}

export default AddQuestion;