import base_url from "./base_url"
import axios from 'axios'
export async function login_user(email,password){
   
    const response = await axios.post(`${base_url}/apis/user/signin`,{
        email:email,
        password:password
    })
    return response
}

export async function register_user(name,email,password){
   
    const response = await  axios.post(`${base_url}/apis/user/signup`,{
        username:name,
        email:email,
        password:password
    })
    return response


}


export async function get_user_detail(user_id){
    const response = await axios.get(`${base_url}/apis/user/get_user_details?user_id=${user_id}`)
    return response
}



export async function update_user_details(user_id,email,username,password){
const response = await axios.post(`${base_url}/apis/user/update_user`,{
    user_id:user_id,
    email:email,
    username:username,
    new_password:password
    
})
return response
}

export async function add_subscription(title,description,price,duration){
    const response = await axios.post(`${base_url}/apis/subscription/add_subscription`,{
        title:title,
        description:description,
        price:price,
        duration:duration
    })
    return response
}

export async function get_all_subscriptions(){
    const response = await axios.get(`${base_url}/apis/subscription/get_all_subscriptions`)
    return response
}

export async function delete_subscription(subscription_id){
    const response = await axios.delete(`${base_url}/apis/subscription/delete_subscription?id=${subscription_id}`)
    return response
}

export async function add_exam(title, description){
    const response = await axios.post(`${base_url}/apis/exam/add_exam`,{
        title:title,
        description:description
    })
    return response
}

export async function get_all_exams(){
    const response = await axios.get(`${base_url}/apis/exam/get_all_exams`)
    return response
}

export async function delete_exam(exam_id){
    console.log(exam_id)
    const response = await axios.delete(`${base_url}/apis/exam/delete_exam?exam_id=${exam_id}`)
    return response
}