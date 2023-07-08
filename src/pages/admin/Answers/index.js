import React, { useEffect, useState } from "react";
import './index.css'
import AdminNav from '../../../components/AdminNav'
import { useNavigate } from "react-router-dom";
import { delete_answer, get_answers } from "../../../call_apis";
import { message } from "antd";

const Answers = () => {
    const navigate = useNavigate()
    const [data,setData] = useState([])
    const NavigateAddAnswer = async()=>{
        const question_id = await window.location.pathname.split('/')[4]
        navigate(`/admin/answer/add/${question_id}`)
    }


    const GetAnswers = async()=>{
        const question_id = await window.location.pathname.split('/')[4]
        await get_answers(question_id)
        .then(res=>{
            setData(res.data.data)
        })
        .catch(err=>{
            message.error("Something went wrong")
        })
    }
    const DeleteAnswer = async(answer_id)=>{
        
        await delete_answer(answer_id)
      .then(res=>{
        if(res.data.is_deleted){
            message.success("Answer deleted successfully")
            GetAnswers()
        }
      })
      .catch(err=>{
        message.error("Something went wrong")
      })

    }
    useEffect(()=>{
        GetAnswers()
        
    },[])
    return (
        <div className="CreatingSubscriptionBody">
            <AdminNav/>

            <div class="table-wrapper">
                <h1 style={{color:'black', textAlign:'center', marginBottom:10}}>Answers</h1>
    <table class="fl-table">
        <thead>
        <tr>
           <th>Answer</th>
           <th>Correct</th>
           <th>Delete</th>

           <th><button onClick={()=>NavigateAddAnswer()}  className="DeleteBtn">Add</button></th>

        </tr>
        </thead>
        <tbody>
    
                {data.map((item,index)=><tr key={index}>
                    <td>{item.answer}</td>
                    <td style={{backgroundColor:item.correct == true?'green':'red',color:'white'}}>{item.correct?'Yes':'No'}</td>
                    <td><button  onClick={()=>DeleteAnswer(item._id)} className="DeleteBtn">Delete</button></td>

                </tr>)}


              
            
        
        </tbody>
    </table>

</div>

            

            

        </div>
    )
}

export default Answers;