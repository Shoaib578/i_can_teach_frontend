import React from "react";
import { Spinner } from "react-activity";
import "react-activity/dist/library.css";
import { register_user } from "../../call_apis";
import { message } from "antd";
import axios from "axios";
import base_url from "../../base_url";
const user = localStorage.getItem('user')

export default class Register extends React.Component {
    state ={
        email:'',
        password:'',
        name:'',
        is_loading:false
    }


    register = ()=>{
        this.setState({is_loading:true})
      
        register_user(this.state.name,this.state.email,this.state.password)
        .then(res=>{
            this.setState({is_loading:false})
            if(res.data.is_registered){
                message.success("Registered Successfully")
              
            }else{
                message.error(res.data.status)
            }
        })
        .catch(err=>{
            this.setState({is_loading:false})
            message.error("Something Went Wrong")
        })
    }

    componentDidMount(){
        if(user){
            message.error("You are already logged in")
           window.location = "/"

        }
    }


    render(){
        return(
            <>
              <div className="login-page">
  <div className="form">
    <form className="login-form">
      <input type="text" onChange={(val)=>this.setState({name:val.target.value})} placeholder="Name"/>

      <input type="email" onChange={(val)=>this.setState({email:val.target.value})}  placeholder="Email"/>
      <input type="password" onChange={(val)=>this.setState({password:val.target.value})}  placeholder="password"/>
      <button onClick={this.register} disabled={this.state.is_loading} >
      {this.state.is_loading?<Spinner size={'small'} style={{position:'absolute'}}/>:null}
        create</button>
      <p className="message">Already registered? <a href="/login">Sign In</a></p>
    </form>


  
  </div>
</div>
            </>
        )
    }
}