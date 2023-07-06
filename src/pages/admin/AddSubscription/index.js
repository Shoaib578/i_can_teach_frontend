import React, { useState } from "react";
import './index.css'
import AdminNav from '../../../components/AdminNav'
import { Spinner } from "react-activity";
import { add_subscription } from "../../../call_apis";
import { message } from "antd";

const AddSubscription = () => {
    const [title,setTitle]=useState('')
    const [description,setDescription]=useState('')
    const [duration,setDuration]=useState('')
    const [price,setPrice]=useState('')
    const [is_loading,setisLoading] = useState(false)
    const InsertSubscription = async()=>{
        setisLoading(true)
        await add_subscription(title,description,price,duration)
        .then(res=>{
        setisLoading(false)

            if(res.data.is_added){
                message.success("Subscription added Successfully")
            }else{
                message.error(res.data.status)
            }
        })
        .catch(err=>{
        setisLoading(false)

            message.error("Something Went Wrong")
        })
    } 
    return (
        <div className="CreatingSubscriptionBody">
            <AdminNav/>


            <div className="AddExam">
                <h1>Add subscription</h1>
                <div className="AddExamForm">
                    <input type="text" onChange={(val)=>setTitle(val.target.value)} placeholder="Title" value={title}/>
                    <textarea rows='10' className="Description" value={description} onChange={(val)=>setDescription(val.target.value)} placeholder="Description here..."></textarea>
                    <input type="number" placeholder="Duration in Days" name="duration" onChange={(val)=>setDuration(val.target.value)} value={duration}/>
                    <input type="number" placeholder="price in $" name="price" onChange={(val)=>setPrice(val.target.value)} value={price}/>

                    
                    <button onClick={InsertSubscription}>
                        {is_loading?<Spinner size={'small'} style={{position:'absolute',marginLeft:20}}/>:null}
                        Add</button>
                </div>
            </div>

        </div>
    )
}

export default AddSubscription;