import React from "react";
import './style.css'
import { Spinner } from "react-activity";
import "react-activity/dist/library.css";
import { login_user } from "../../call_apis";
import { message } from "antd";
const user = localStorage.getItem('user')
export default class Login extends React.Component {

    state = {
       is_loading:false,
       email:'',
       password:''
    }

    login = async()=>{
        this.setState({is_loading:true})

        await login_user(this.state.email,this.state.password)
        .then(res=>{
            this.setState({is_loading:false})
                
            if(res.data.is_loggedin){

                message.success("Logged in successfully")
                if(res.data.user.is_admin){
                    localStorage.setItem('admin',JSON.stringify(res.data.user))
                    window.location = "/admin/subscription"
                }else{
                    localStorage.setItem('user',JSON.stringify(res.data.user))
                    window.location = "/"
                }
               
            }else{
                message.error(res.data.status)
                
            }
        })
        .catch(err=>{
            message.error("Something Went Wrong")
            this.setState({is_loading:false})
        })
    }

    componentDidMount(){
        if(user){
            message.error("Please Login to be able to access")
           window.location = "/login"

        }
    }
    render(){
        return(
            <>
            <div className="login-page">
                <div className="form">
                    <form className="login-form">
                    <input type="email" onChange={(val)=>{
                        this.setState({email:val.target.value})
                    }} placeholder="Email"/>
                    <input type="password" onChange={(val)=>{
                        this.setState({password:val.target.value})
                    }}  placeholder="password"/>
                    <button onClick={this.login} disabled={this.state.is_loading}>
                        {this.state.is_loading?<Spinner size={'small'} style={{position:'absolute'}}/>:null}
                        login</button>
                    <p className="message">Not registered? <a href="/register">Create an account</a></p>
                    </form>
                </div>
                </div>
            </>
        )
    }
}