import React, { useEffect, useState } from "react";
import './index.css'
import AdminNav from '../../../components/AdminNav'
import { useNavigate } from "react-router-dom";
import { delete_exam, get_all_exams } from "../../../call_apis";
import { message } from "antd";

const Exams = () => {
    const [data,setData] = useState([])
    const navigate = useNavigate()
    const SubExams = (exam_id) => {
        console.log(exam_id)
        navigate(`/admin/exams/subexams/${exam_id}`)

    }

   const GetAllExams = async()=>{
    await get_all_exams()
    .then(res=>{
            setData(res.data.data)
    })
    .catch(err=>{
        message.error("Something went wrong")
    })  
    }

    const DeleteExam = async(exam_id)=>{
        await delete_exam(exam_id)
        .then(res=>{
            if(res.data.is_deleted){
                GetAllExams()
                message.success("Exam Deleted Successfully")
            }
        })
        .catch(err=>{
            message.error("Something went wrong")
        })
    }

   
    useEffect(()=>{
        GetAllExams()
    },[])
    return (
        <div className="CreatingSubscriptionBody">
            <AdminNav/>

            <div class="table-wrapper">
                <h1 style={{color:'black', textAlign:'center', marginBottom:10}}>Exams</h1>
    <table class="fl-table">
        <thead>
        <tr >
          
            <th>Title</th>
            <th>Description</th>
            <th></th>
        </tr>
        </thead>
        <tbody>
                    {data.map((item,index)=>{
                    return <tr key={index} style={{cursor:'pointer'}} >
                                        
                    <td onClick={()=>SubExams(item._id)}>{item.title}</td>
                    <td>{item.description}</td>
                    <td><button onClick={()=>DeleteExam(item._id)}  className="DeleteBtn">Delete</button></td>

                    </tr>
                    })}
               
            
        
        </tbody>
    </table>

</div>

            

            

        </div>
    )
}

export default Exams;