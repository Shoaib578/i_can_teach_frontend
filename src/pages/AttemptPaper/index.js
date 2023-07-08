import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './index.css';
//icons
import { LuLogOut,LuCheck } from "react-icons/lu";

import { check_user_subscription, get_main_website_question, get_questions, get_sub_exam_details, save_exam_history } from "../../call_apis";
import { message } from "antd";
import { Spinner } from "react-activity";
const user = localStorage.getItem("user")
const parse = JSON.parse(user)
const AttemptPaper = () => {
    const [questions,setQuestions] = useState([])
    const [active_question_index,setActiveQuestionIndex] = useState(0)
    const [active_answers,setActiveAnswers] = useState([{
        question_id:null,
        question_score:null,
        answer_id:null,
        correct:false
    }])
   
    const [is_finish,setIsFinish] = useState(false)
    const [finish_loading,setFinishLoading] = useState(false)
    const [score,setScore] = useState(0)
    const [exam_score,setExamScore] = useState(0)
    const [timer, setTimer] = useState(60);

    const navigate = useNavigate()
    const BuyMembershipPlain = () => {
        navigate('/membership')
    }





   const GetQuestions = async()=>{
    const sub_exam_id = await window.location.pathname.split('/')[4]
    await get_main_website_question(sub_exam_id)
    .then(res=>{
        console.log(res.data.data)
        setQuestions(res.data.data)
        let place_for_all_questions_temp = []
        res.data.data.forEach((data)=>{
            place_for_all_questions_temp.push({
                question_id:null,
                question_score:null,
                answer_id:null,
                correct:false
            })
        })

        setActiveAnswers(place_for_all_questions_temp)

    })
    .catch(err=>{
        message.error("Something Went Wrong")
    })
   }


   const GetSubExamDetails = async()=>{
    const sub_exam_id = await window.location.pathname.split('/')[4]

    await get_sub_exam_details(sub_exam_id)
    .then(res=>{
        console.log(res.data.data.total_score)
        setTimer(res.data.data.time*60)
        setExamScore(res.data.data.total_score)
    })
    .catch(err=>{
        message.error("Something went wrong")
    })
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

   const CheckorUnCheck = (answer_id,correct)=>{
   
    let arr =[...active_answers]
    if(arr){
        arr[active_question_index].answer_id = answer_id
        arr[active_question_index].correct = correct
        arr[active_question_index].question_id = questions[active_question_index]._id
        arr[active_question_index].question_score = questions[active_question_index].score
    }

 
  
   
    setActiveAnswers(arr)

    console.log(active_answers)
   }

  

   const Finish = async()=>{
    const sub_exam_id = await window.location.pathname.split('/')[4]

    setFinishLoading(true)
        let temp_score = 0
     active_answers.forEach((answer)=>{
        console.log(answer.correct)
        if(answer.correct == true){
            // console.log(answer.question_score)
            temp_score = parseInt(temp_score)+parseInt(answer.question_score)
        }
    })
    console.log("Score")
    console.log(temp_score)
    setScore(temp_score)

    await save_exam_history(parse._id,temp_score,sub_exam_id)
    .then(res=>{
        if(res.data.is_added){
            setFinishLoading(false)
            setIsFinish(true)
        }
    })
    .catch(err=>{
        message.error("Something Went Wrong")
    })

   }

 // Format the timer value to display as MM:SS
 const formatTimer = () => {
    const minutes = Math.floor(timer / 60);
    const seconds = timer % 60;

    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

    useEffect(()=>{
        
        if(user){
            CheckUserSubscription()
            GetQuestions()
            GetSubExamDetails()

        }else{
            message.error("Please Login to be able to access")
            navigate('/login')
        }

        const interval = setInterval(() => {
           
            
            setTimer(prevTimer => {
                if (prevTimer === 0) {

                  clearInterval(interval); // Stop the interval when timer reaches 0
                  Finish()
                  return
                  // You can add any additional logic or actions when the timer ends here
                }
                return prevTimer - 1;
              });
          
            

          }, 1000);
      
          // Clean up the interval when the component unmounts
          return () => {
            clearInterval(interval);
            
          };
       
    },[])
    
    return (
        <div className="AttempPaperBody">

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

            
        {is_finish == false?<>

        <h1>Attempt Exam</h1>
        {finish_loading == false?<>
        <p style={{fontSize:23,color:'white'}}>Time: <b>{formatTimer()}</b></p>

        <div className="Paper">

           
            {/* Start of Question */}
            <div>
            <p style={{color:'white',fontSize:45,fontWeight:'bold'}}>{questions[active_question_index]?.question}</p>

            <h2 style={{color:'green'}}>Choices: </h2>

            <div className="options">

                {questions[active_question_index]?.answers.map((answer,index)=>{
                    return <div key={index} style={{display:'flex',flexDirection:'row'}}>
                    <label htmlFor="question1" style={{fontSize:25,color:'white'}}>{answer.answer}. </label>
                    <div onClick={()=>{
                        console.log(answer._id)
                        CheckorUnCheck(answer._id,answer.correct)
                    }} style={{width:20,height:20,borderRadius:3,backgroundColor:'white',marginLeft:10,marginTop:5}}>
                       
                        {active_answers[active_question_index]?.answer_id == answer._id?<LuCheck className="icon" style={{color:'green'}}/>:null}
                    </div>
                </div>
                })}
            

            
            </div>
            </div>
            {/* End of Question */}


            <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
            {active_question_index >0?<button onClick={()=>{
                setActiveQuestionIndex(active_question_index-1)

            }} style={{backgroundColor:'#90EE90',padding:15,borderRadius:10,color:'white',borderColor:'#90EE90',width:130,fontSize:18,marginTop:160}}>  {'<'} Back</button>:<div></div>}


            {active_question_index < questions.length-1?<button onClick={()=>{
                if(active_question_index < questions.length -1){
                    setActiveQuestionIndex(active_question_index+1)
                }
            }} style={{backgroundColor:'green',padding:15,borderRadius:10,color:'white',borderColor:'green',width:130,fontSize:18,marginTop:160}}>Next {'>'}</button>:<button onClick={Finish} style={{backgroundColor:'green',padding:15,borderRadius:10,color:'white',borderColor:'green',width:130,fontSize:18,marginTop:160}}>Finish</button>}


            </div>
            
           
        </div>
        </>:<center>

            <Spinner size={50} style={{color:'green',marginTop:50}}/> 
            <h2 style={{color:'white'}}>Analyzing result</h2>
            
            </center>}
            </>:
            
            <center>
                <h1 style={{color:'white',fontWeight:'bold',marginTop:'20%'}}>You have got {score}/{exam_score} score</h1>

                <button onClick={()=>{
                    navigate(`/`)
                }} style={{backgroundColor:'green',padding:15,borderRadius:10,color:'white',borderColor:'green',fontSize:18,marginTop:30}}>That's Greate</button>
            </center>
            }
        
        </div>
    )
}

export default AttemptPaper