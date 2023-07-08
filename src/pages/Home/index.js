import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import './index.css'
//icons
import { LuLogOut } from "react-icons/lu";
import { BsPersonCircle } from "react-icons/bs";
//components
import ExamDetails from "../../components/ExamDetails";
import ExamHistory from "../../components/ExamHistory";

import { message } from "antd";
const user = localStorage.getItem('user')
const Home = () => {
    const [data,setData] = useState([])
    const [portion, setPortion] = useState(true)
    const navigate = useNavigate()
    const BuyMembershipPlain = () => {
        navigate('/membership')
    }

    const GotoProfile = () => {
        if(!user){
            message.error("Please Login to be able to access")
            return
        }
        navigate('/profile')
    }

    
    return (
        <div className="HomeBody">

            <div className="TopHeader">
                <div className="HeaderContents">
                    <div style={{cursor:'pointer'}} onClick={()=>{
                        navigate('/')
                    }} className="Logo">
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

            <nav className="NavBar">
                <div className="NavBarBtns">
                    <button onClick={() => setPortion(true)}>Exam Details</button>
                    <button onClick={() =>{
                        if(!user){
                            message.error("You must be logged in to be able to check your exam history")
                            return
                        }
                         setPortion(false)
                    }}>Exam History</button>

                    {!user?<button onClick={() =>{
                        if(!user){
                            navigate('/login')
                        }else{
                            message.error("You are already logged in")
                        }
                        
                    }}>Login</button>:null}
                </div>
                <BsPersonCircle onClick={() =>{
                    if(!user){
                        message.error("You must be logged in")
                        return
                    }
                    GotoProfile()
                } } className="Profile"/>
                
            </nav>
            {
            portion ? 
            <ExamDetails/>:
            <ExamHistory/>
            }
        </div>
    )
}

export default Home