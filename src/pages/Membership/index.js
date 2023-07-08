import React, { useEffect, useState } from "react";
import './index.css';
import { buy_subscription, get_all_subscriptions } from "../../call_apis";
import { message } from "antd";
import { useNavigate } from "react-router-dom";
const user = localStorage.getItem('user')
const parse = JSON.parse(user)
const Membership = () => {
    const navigate = useNavigate()
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


    const NavigateBuyMembership = (membership_id,price)=>{
            navigate('/buy_membership',{
                state:{membership_id: membership_id,price:price}
            })
    }



    useEffect(()=>{
            GetAllSubscriptions()
        },[])
    return (
        <div className="MembershipBody">
            <h1>Buy a Plane</h1>
        <div className="SubscriptionPlains">

            {data.map((item,index)=>{
                return <div key={index} className="Subscription">
                <h1>{item.title}</h1>
                <p className="paymentpermonth">{item.price}$/{item.duration} days</p>
                <p className="description">{item.description}</p>
                <button onClick={()=>{
                    if(!user){
                        message.error("Please Login")
                        return
                    }

                    if(item.price>0){
                        NavigateBuyMembership(item._id,item.price)

                    }else{
                        navigate(`/bought_membership/${item._id}`)
                    }

                    
                }}>Buy</button>
            </div>
            })}
            
          
        </div>
        </div>
    )
}

export default Membership