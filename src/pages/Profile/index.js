import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './index.css';
//icons
import { LuLogOut } from "react-icons/lu";
import { get_user_detail, update_user_details } from "../../call_apis";
import { message } from "antd";
import { Spinner } from "react-activity";
const user = localStorage.getItem('user')
const parse = JSON.parse(user)
const Profile = () => {
    const [username,setUsername] = useState('')
    const [email,setEmail] = useState('')
    const [is_loading,setisLoading] = useState(false)
    const [new_password,setNewPassword] = useState('')
    const [score,setScore] = useState(0)

    const navigate = useNavigate()
    const BuyMembershipPlain = () => {
        navigate('/membership')
    }

    const logout = async()=>{
       await localStorage.removeItem('user')
        navigate('/login')
    }


   const GetUserDetails = async()=>{
        await get_user_detail(parse._id)
        .then(res=>{
           const {username,email,score} = res.data.data
          setUsername(username)
          setEmail(email)

          if(score){
            setScore(score)
          }else{
            setScore(0)
          }
        })
        .catch(err=>{
            message.error("Something went wrong")
        })
    }

const UpdateUserDetails = async()=>{
    if(email.length<1){
        message.error("Email is required")
        return 
    }

    if(username.length<1){
        message.error("Username is required")
        return 
    }
    setisLoading(true)
    await update_user_details(parse._id,email,username,new_password)
    .then(res=>{
    setisLoading(false)

        if(res.data.is_updated){
            message.success("User Updated Successfully")
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
        if(user){
            GetUserDetails()

        }else{
            window.location = "/login"
        }
    },[])
    return (
        <div className="MembershipBody">

            <div className="TopHeader">
                <div className="HeaderContents">
                    <div className="Logo">
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

            <div className="ProfileDetals">
                <h2>YOUR SCORE: {score}</h2>
                <div className="ProfileDetailsForm">
                    <input type="text" placeholder="Name"
                     onChange={(val)=>{
                        setUsername(val.target.value)
                    }} 
                    value={username}/>
                    <input type="email" placeholder="Email"
                     onChange={(val)=>{
                        setEmail(val.target.value)
                    }} 
                    value={email}/>
                    
                    <input type="password" placeholder="New password" onChange={(val)=>{
                        setNewPassword(val.target.value)
                    }} value={new_password}/>
                    <button onClick={UpdateUserDetails}>
                        {is_loading?<Spinner size={'small'} style={{position:'absolute',marginLeft:60}}/>:null}
                        Update</button>
                    <button onClick={()=>{
                        logout()
                    }}>Logout</button>

                </div>

               

            </div>

        </div>
    )
}

export default Profile