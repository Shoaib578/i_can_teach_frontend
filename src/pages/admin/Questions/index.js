import React, { useEffect, useState } from "react";
import './index.css'
import AdminNav from '../../../components/AdminNav'
import { useNavigate } from "react-router-dom";
import { delete_question, get_questions } from "../../../call_apis";
import { message } from "antd";
const Questions = () => {
    const [data,setData] = useState([]) 
    const navigate = useNavigate()
    const Answers = (question_id) => {
        navigate(`/admin/question/answers/${question_id}`)
    }

    const NavigateAddQuestion=async()=>{
        const sub_exam_id =await window.location.pathname.split('/')[5]

        navigate(`/admin/question/add/${sub_exam_id}`)
    }

    const GetQuestions = async()=>{
        const sub_exam_id =await window.location.pathname.split('/')[5]

        await get_questions(sub_exam_id)
        .then(res=>{
            setData(res.data.data)
        })
        .catch(err=>{
            message.error("Something Went Wrong")
        })
    }

    const DeleteQuestion = async(question_id)=>{
        await delete_question(question_id)
        .then(res=>{
            if(res.data.is_deleted){
                message.success("Question Deleted Successfully")
                GetQuestions()
            }
        })
        .catch(err=>{
            message.error("Something Went Wrong")
        })

    }
    useEffect(()=>{

            GetQuestions()
        },[])
    
    return (
        <div className="CreatingSubscriptionBody">
            <AdminNav/>

            <div class="table-wrapper">
                <h1 style={{color:'black', textAlign:'center', marginBottom:10}}>Questions</h1>
    <table class="fl-table">
        <thead>
        <tr>
            
            <th>Question</th>
            <th>Score</th>

            <th>Delete</th>
            <th><button onClick={NavigateAddQuestion} className="DeleteBtn">Add Question</button></th>
           

        </tr>
        </thead>
        <tbody>
                {data.map((item,index)=>{
                    return   <tr key={index} >
                   
                    <td onClick={() => Answers(item._id)} style={{cursor:'pointer'}}>{item.question}</td>
                    <td  >{item.score}</td>

                    <td><button  className="DeleteBtn" onClick={()=>DeleteQuestion(item._id)}>Delete</button></td>
                    
                </tr>
                })}
              
            
        
        </tbody>
    </table>

</div>

            

            

        </div>
    )
}

export default Questions;