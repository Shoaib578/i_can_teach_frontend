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

export async function get_sub_exams(exam_id){
    const response = await axios.get(`${base_url}/apis/exam/view_exam?id=${exam_id}`)
    return response
}

export async function add_subexam(exam_id,title,description,total_score,time){
    const response = await axios.post(`${base_url}/apis/sub_exam/add_subexam`,{
        exam_id:exam_id,
        title:title,
        description:description,
        total_score:total_score,
        time:time
    })
    return response
}

export async function delete_sub_exam(sub_exam_id){
    const response = await axios.delete(`${base_url}/apis/sub_exam/delete_sub_exam?id=${sub_exam_id}`)
    return response
}


export async function add_question(sub_exam_id,question,score){
    const response = await axios.post(`${base_url}/apis/question/add_question`,{
        sub_exam_id:sub_exam_id,
        question:question,
        score:score
    })
    return response
}


export async function get_questions(sub_exam_id){
    const response = await axios.get(`${base_url}/apis/question/get_questions?sub_exam_id=${sub_exam_id}`)
    return response
}

export async function delete_question(question_id){
    const response = await axios.delete(`${base_url}/apis/question/delete_question?question_id=${question_id}`)
    return response
}


export async function add_answer(question_id,answer,correct){
    const response = await axios.post(`${base_url}/apis/answer/add_answer`,{
        question_id:question_id,
        answer:answer,
        correct:correct
    })
    return response
}

export async function get_answers(question_id){
    const response = await axios.get(`${base_url}/apis/answer/get_answers?question_id=${question_id}`)
    return response
}

export async function delete_answer(answer_id){
    const response = await axios.delete(`${base_url}/apis/answer/delete_answer?answer_id=${answer_id}`)
    return response
}


//Main Website Apis Start

export async function get_main_website_question(sub_exam_id){
    const response =  await axios.get(`${base_url}/apis/question/get_main_website_questions?sub_exam_id=${sub_exam_id}`)
    return response
}

export async function save_exam_history(user_id,score,sub_exam_id){
    const response = await axios.post(`${base_url}/apis/question/save_exam_history`,{
        sub_exam_id:sub_exam_id,
        score:score,
        user_id:user_id
    })
    return response
}

export async function get_exam_history(user_id){
    const response = await axios.get(`${base_url}/apis/exam/get_exam_history?user_id=${user_id}`)
    return response
}

export async function get_sub_exam_details(sub_exam_id){
    const response = await axios.get(`${base_url}/apis/sub_exam/get_sub_exam_details?sub_exam_id=${sub_exam_id}`)
    return response
}

export async function check_sub_exam_given(user_id,sub_exam_id){
    
    const response = await axios.get(`${base_url}/apis/sub_exam/check_sub_exam_given?sub_exam_id=${sub_exam_id}&&user_id=${user_id}`)
    return response
}

export async function buy_subscription(user_id,duration){
    const response = await axios.post(`${base_url}/apis/subscription/buy_subscription`,{
        user_id:user_id,
        duration_days:duration
    })
    return response
}

export async function check_user_subscription(user_id){
    const response = await axios.get(`${base_url}/apis/subscription/check_user_subscription?user_id=${user_id}`)
    return response
}

export async function create_payment_intent(amount){
    const response = await axios.post(`${base_url}/apis/subscription/create_payment_intent`,{
        amount:amount
    })
    return response
}

export async function get_member_ship_details(subscription_id){
    const response = await axios.get(`${base_url}/apis/subscription/get_subscription_details?subscription_id=${subscription_id}`)
    return response

}