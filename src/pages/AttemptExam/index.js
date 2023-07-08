import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './index.css';
//icons
import { LuLogOut } from "react-icons/lu";
import { check_sub_exam_given, check_user_subscription, get_sub_exams } from "../../call_apis";
import { message } from "antd";
import SubExamContainer from "./container";
const user = localStorage.getItem("user");
const parse = JSON.parse(user)
const AttemptExam = () => {
    const [data,setData] = useState([])
    
    const navigate = useNavigate()
    const BuyMembershipPlain = () => {
        navigate('/membership')
    }

    const CheckUserSubscription = async()=>{
        await check_user_subscription(parse._id)
        .then(res=>{
           if(res.data.has_subscription == false){
            message.error("You dont have a subscription.Please Buy a Subscription to be able to discover")
            navigate('/membership')
           }
        })
        .catch(err=>{
           

            message.error("Something Went Wrong")
        })
    }
  

    const GetSubExams = async()=>{
        const exam_id = await window.location.pathname.split('/')[3]
        await get_sub_exams(exam_id)
        .then(res=>{
            setData(res.data.data)

        })
        .catch(err=>{
            message.error("Something Went Wrong")
        })
    }

    


    const CheckExamGiven = async(sub_exam_id)=>{
         const response = await check_sub_exam_given(parse._id,sub_exam_id)
         console.log(response)
         return <h1>{response}</h1>
    }


    useEffect(()=>{
        if(user){
            CheckUserSubscription()

            GetSubExams()

        }else{
            message.error("Please Login to be able to access")
            navigate('/login')
        }
    },[])
    return (
        <div className="MembershipBody">

            <div className="TopHeader">
                <div className="HeaderContents">
                    <div style={{cursor:'pointer'}} onClick={()=>{
                        navigate('/')
                    }}  className="Logo">
                        <h1>CertBolt</h1>
                    </div>

                    <div className="MiddleText">
                        <p>This is a Demo Version of Certbolt.com Online Testing Engine.<br/>
                        Only practice questions are available here.
                        </p>
                    </div>

                    <button onClick={() => BuyMembershipPlain()} className="MemberAreaBtn">
                        <LuLogOut className="icon"/>
                        Membership
                        </button>
                </div>
            </div>

            <div class="table-wrapper">
            <section className="Posters">
                {data.map((item,index)=>{
                     return <SubExamContainer key={index} item={item} user_id={parse._id}/>
                })}
               
             
            </section>

</div>
          

        </div>
    )
}

export default AttemptExam