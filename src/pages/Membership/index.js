import React, { useEffect, useState } from "react";
import './index.css';
import { get_all_subscriptions } from "../../call_apis";
import { message } from "antd";

const Membership = () => {

    const [data,setData] = useState([])

    const GetAllSubscriptions =async()=>{
        await get_all_subscriptions()
        .then(res=>{
            setData(res.data.data)
        })
        .catch(err=>{
            message.error("Something went wrong")
        })
    }

    useEffect(()=>{
            GetAllSubscriptions()
        },[])
    return (
        <div className="MembershipBody">
            <h1>Buy a Plain</h1>
        <div className="SubscriptionPlains">

            {data.map((item,index)=>{
                return <div key={index} className="Subscription">
                <h1>{item.title}</h1>
                <p className="paymentpermonth">{item.price}$/{item.duration} days</p>
                <p className="description">{item.description}</p>
                <button>Buy</button>
            </div>
            })}
            
          
        </div>
        </div>
    )
}

export default Membership