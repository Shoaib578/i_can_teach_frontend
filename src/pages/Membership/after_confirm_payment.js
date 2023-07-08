import { useEffect } from "react"
import { buy_subscription, get_member_ship_details } from "../../call_apis"
import { message } from "antd"
import { useNavigate } from "react-router-dom"
const membership_id = window.location.pathname.split("/")[2]
const user = localStorage.getItem('user')
const parse = JSON.parse(user)
const  AfterConfirmPayment =()=>{

    const navigate = useNavigate()
    const BuyMemberShip = async(duration)=>{
        await buy_subscription(parse._id,duration)
    }

    const GetMembershipDetails = async()=>{
        await get_member_ship_details(membership_id)
        .then(res=>{
            BuyMemberShip(res.data.data.duration)
        })
        .catch(err=>{
            message.error("Something went wrong")
        })
    }
    useEffect(()=>{
        GetMembershipDetails()
    },[])   
    return(
        <div>
            <center style={{marginTop:'10%'}}>
                <h1 style={{color:'white',fontWeight:'bold'}}>You have bought Membership Successfully!</h1>

                <button onClick={()=>{
                    message.success("Thanks for Buying our Membership")
                    navigate('/')
                }} style={{padding:15,borderColor:'#90EE90',backgroundColor:'#90EE90',color:'white',marginTop:30,borderRadius:10,width:140}}>That's Greate!</button>
            </center>

        </div>
    )
}

export default AfterConfirmPayment