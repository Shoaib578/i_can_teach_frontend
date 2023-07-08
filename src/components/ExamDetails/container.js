import { useState } from "react"
import { check_sub_exam_given } from "../../call_apis"
import { LuCheckCircle } from "react-icons/lu";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { message } from "antd";
const user = localStorage.getItem('user')
export default function ExamDetailsContainer(props){
    
    const navigate = useNavigate()
   

    const AttemptExam = (exam_id) => {
        if(!user){
            message.error("Please Login to be able to access")
            return
        }
        navigate(`/exam/attempt/${exam_id}`)
    }

  
    return(
        <>
        <div className="Poster1" >
            <br />
                     <p className="Title">{props.item.title}</p>
                     <p>{props.item.description}</p>
                    
                     <div className="SVEBtn">
                     <button onClick={() => AttemptExam(props.item._id)}>Start Virtual Exam</button>
                     </div>

           

                     
        </div>
        </>

    )
}