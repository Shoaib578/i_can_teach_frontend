import React, { useEffect, useState } from "react";
import './index.css'
import AdminNav from '../../../components/AdminNav'
import { useNavigate } from "react-router-dom";
import { delete_sub_exam, get_sub_exams,  } from "../../../call_apis";
import { message } from "antd";
const SubExams = () => {
    const navigate = useNavigate()
    const [data,setData] = useState([])
    const Questions = (sub_exam_id) => {
        navigate(`/admin/exams/subexams/questions/${sub_exam_id}`)
    }

    const GetSubExams = async()=>{
    const exam_id =await window.location.pathname.split('/')[4]
       
        await get_sub_exams(exam_id)
        .then(res=>{
            
            setData(res.data.data)
        })
        .catch(err=>{
            message.error("Something went wrong")
        })
    }
    const AddSubExam=async()=>{
    const exam_id =await window.location.pathname.split('/')[4]

        navigate(`/admin/exams/add_subexams/${exam_id}`)
    }
    const DeleteSubExam=async(sub_exam_id)=>{
        await delete_sub_exam(sub_exam_id)
        .then(res=>{
            if(res.data.is_deleted){
                message.success("Sub Exam Delete Successfully")
                GetSubExams()
            }else{
                message.error(res.status)
            }
        })
        .catch(err=>{
            message.error("Something went wrong")
        })
    }

   
    useEffect(()=>{
        GetSubExams()
    },[])
    return (
        <div className="CreatingSubscriptionBody">
            <AdminNav/>

            <div className="table-wrapper">
                <h1 style={{color:'black', textAlign:'center', marginBottom:10}}>Sub Exams</h1>
    <table class="fl-table">
        <thead>
        <tr>
           
            <th>Title</th>
            <th>Description</th>
            <th>Total Score</th>
            <th>Delete</th>

            <th><button onClick={()=>AddSubExam()}  className="DeleteBtn">Add Sub Exam</button></th>

        </tr>
        </thead>
        <tbody>
                {data.map((item,index)=>{
                    return <tr key={index} style={{cursor:'pointer'}} >
                  
                    <td onClick={() => Questions(item._id)}>{item.title}</td>
                    <td>{item.description}</td>
                    <td>{item.total_score}</td>
                    <td><button onClick={()=>DeleteSubExam(item._id)}  className="DeleteBtn">Delete</button></td>
                </tr>
                })}
                
            
        
        </tbody>
    </table>

</div>

            

            

        </div>
    )
}

export default SubExams;