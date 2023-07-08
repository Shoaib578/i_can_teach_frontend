import React, { useEffect, useState } from "react";
import './index.css'
import AdminNav from '../../../components/AdminNav'
import { add_exam, add_subexam } from "../../../call_apis";
import { message } from "antd";
import { Spinner } from "react-activity";
const exam_id = window.location.pathname.split('/')[4]
const AddSubExam = () => {
    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')
    const [total_score,setTotalScore] = useState('')
    const [time,setTime] = useState('')
    const [is_loading,setisLoading] = useState(false)

    const InsertSubExam = async()=>{
        if(title.length<1 || description.length<1){
            message.error("Title and description is required")
            return 
        }
        setisLoading(true)
        await add_subexam(exam_id,title,description,total_score,time)
        .then(res=>{
        setisLoading(false)

            if(res.data.is_added){
                message.success("Sub Exam added successfully")
            }else{
                message.error(res.data.status)
            }
        })
        .catch(err=>{
        setisLoading(false)

            message.error("Something went wrong")
        })
    }
    useEffect(()=>{
        console.log(exam_id)
    },[])
    return (
        <div className="CreatingSubscriptionBody">
            <AdminNav/>


            <div className="AddExam">
                <h1>Add Sub exam</h1>
                <div className="AddExamForm">
                    <input type="text" placeholder="Title" onChange={(val)=>setTitle(val.target.value)}/>
                    <textarea rows='10' className="Description" onChange={(val)=>setDescription(val.target.value)} placeholder="Description here..."></textarea>
                    <input type="number" placeholder="Total Score" onChange={(val)=>setTotalScore(val.target.value)}/>
                    <input type="number" placeholder="Time in Minutes" onChange={(val)=>setTime(val.target.value)}/>
                    
                    <button onClick={InsertSubExam}>
                        {is_loading?<Spinner size={'small'}  style={{ position:'absolute',marginLeft:40 }}/>:null}
                        Create</button>
                </div>
            </div>

        </div>
    )
}

export default AddSubExam;