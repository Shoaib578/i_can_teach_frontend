import React, { useState } from "react";
import './index.css'
import AdminNav from '../../../components/AdminNav'
import { add_exam } from "../../../call_apis";
import { message } from "antd";
import { Spinner } from "react-activity";

const AddExam = () => {
    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')
    const [is_loading,setisLoading] = useState(false)

    const InsertExam = async()=>{
        if(title.length<1 || description.length<1){
            message.error("Title and description is required")
            return 
        }
        setisLoading(true)
        await add_exam(title,description)
        .then(res=>{
        setisLoading(false)

            if(res.data.is_added){
                message.success("Exam added successfully")
            }else{
                message.error(res.data.status)
            }
        })
        .catch(err=>{
        setisLoading(false)

            message.error("Something went wrong")
        })
    }
    return (
        <div className="CreatingSubscriptionBody">
            <AdminNav/>


            <div className="AddExam">
                <h1>Add exam</h1>
                <div className="AddExamForm">
                    <input type="text" placeholder="Title" onChange={(val)=>setTitle(val.target.value)}/>
                    <textarea rows='10' className="Description" onChange={(val)=>setDescription(val.target.value)} placeholder="Description here..."></textarea>
                    
                    <button onClick={InsertExam}>
                        {is_loading?<Spinner size={'small'}  style={{ position:'absolute',marginLeft:40 }}/>:null}
                        Create</button>
                </div>
            </div>

        </div>
    )
}

export default AddExam;