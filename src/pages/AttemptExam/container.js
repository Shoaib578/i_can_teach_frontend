

import { useState } from "react"
import { check_sub_exam_given } from "../../call_apis"
import { LuCheckCircle } from "react-icons/lu";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { message } from "antd";
const user = localStorage.getItem('user')
export default function SubExamContainer(props){
    
    const navigate = useNavigate()
    const [is_given,setIsgiven] = useState(false)

    const AttemptExam = (exam_id) => {
        if(!user){
            message.error("Please Login to be able to access")
            return
        }
        navigate(`/exam/attempt/${exam_id}`)
    }

    const CheckGivenSubExam = async()=>{
        await check_sub_exam_given(props.user_id,props.item._id)
        .then((res)=>{
            console.log(res.data)
            if(res.data.given == true){
                setIsgiven(true)
            }else{
                setIsgiven(false)
    
            }
        })
        .catch(err=>{
            setIsgiven(false)
    
        })
    }


    const NavigateAttemptPaper = (sub_exam_id) => {
        if(!user){
         message.error("Please Login to be able to access")
         return
        }
 
         navigate(`/exam/paper/attempt/${sub_exam_id}`)
     }
 
    useEffect(()=>{
        CheckGivenSubExam()
    },[])
    return(
        <div className="Poster1">
                     <p className="Title">{props.item.title}</p>
                     <p>{props.item.description}</p>
                    
                     <div className="SVEBtn">
                     <button onClick={() => NavigateAttemptPaper(props.item._id)}>Start Virtual Exam</button>
                     </div>

                    {is_given?<LuCheckCircle className="icon" color="green" style={{marginLeft:20}}/>:null}
           

                     
                 </div>
    )
}