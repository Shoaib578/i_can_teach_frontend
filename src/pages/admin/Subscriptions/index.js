import React, { useEffect, useState } from "react";
import './index.css'
import AdminNav from '../../../components/AdminNav'
import { delete_subscription, get_all_subscriptions } from "../../../call_apis";
import { message } from "antd";

const Subscriptions = () => {
    const [data,setData] = useState([])
   const GetAllSubscription = async()=>{
    await get_all_subscriptions()
    .then(res=>{
        setData(res.data.data)
    })
    .catch(err=>{
        message.error("Something Went Wrong")
    })
    }


    const DeleteSubscription = async(subscription_id)=>{
        await delete_subscription(subscription_id)
        .then(res=>{
            if(res.data.is_deleted){
                message.success("Subscription Deleted Successfully")
                GetAllSubscription()
            }else{
                message.error(res.data.status)
            }
        })
        .catch(err=>{
            message.error("Something Went Wrong")
        })
    }


    useEffect(()=>{
        GetAllSubscription()
    },[])
    return (
        <div className="CreatingSubscriptionBody">
            <AdminNav/>

            <div class="table-wrapper">
                <h1 style={{color:'black', textAlign:'center', marginBottom:10}}>Subscriptions</h1>
    <table class="fl-table">
        <thead>
        <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Duration</th>

            <th>Description</th>
            <th>Action</th>
        </tr>
        </thead>
        <tbody>
                {data.map(((item,index)=>{
                    return   <tr key={index} style={{cursor:'pointer'}}>
                    <td>{item.title}</td>
                    <td>{item.price}$</td>
                    <td>{item.duration} days</td>
                    <td>{item.description}</td>

                    <td><button onClick={()=>DeleteSubscription(item._id)} className="DeleteBtn">Delete</button></td>
                </tr>
                }))}
              
            
        
        </tbody>
    </table>

</div>

            

            

        </div>
    )
}

export default Subscriptions;