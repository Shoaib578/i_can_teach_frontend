import React, { useEffect, useState } from "react";
import './index.css'
import { useNavigate } from "react-router-dom"; 
import { check_sub_exam_given, get_all_exams } from "../../call_apis";
import { message } from "antd";
import ExamDetailsContainer from "./container";
const user = localStorage.getItem('user')
const parse = JSON.parse(user)
const ExamDetails = () => {
    const [data,setData]= useState([])
    const navigate = useNavigate()
    

    const GetAllExams = async()=>{
        await get_all_exams()
        .then(res=>{
            setData(res.data.data)
        })
        .catch(err=>{
            message.error("Something went wrong")
        })
    }

   

    useEffect(()=>{
        GetAllExams()
    },[])
    return (
        <div className="ExamDetails">
            <div className="ExamDetailsHeader">
                <p className="ExamDetailsTitle">Exam Details</p>
                <p className="ExamDetailsDescription">CompTIA SY0-501 - CompTIA Security+ Certification Exam</p>
            </div>
            
            {/* <div className="Details">
            <div className="ExamDetailsText">
                <div className="text">
                    <p>Exam Code:</p>
                    <p>SY0-501</p>
                </div>

                <div className="text">
                    <p>Topics Selected:</p>
                    <p>CompTIA Security+ Certification Exam</p>
                </div>

                <div className="text">
                    <p>Topics Selected:</p>
                    <p>All Topics</p>
                </div>

                <div className="text">
                    <p>Avail questions:</p>
                    <p>81</p>
                </div>

                <div className="text">
                    <p>Total questions:</p>
                    <p>81</p>
                </div>

                <div className="text">
                    <p>Virtual Exam:</p>
                    <p>50 questions - 90 minutes - 85% passing score</p>
                </div>

                <div className="text">
                    <p>Practice Exam:</p>
                    <p>81 questions - 90 minutes - 85% passing score</p>
                </div>


                <div className="text">
                    <p>Show Answers:</p>
                    <p>On Click - answers are hidden when switching questions</p>
                </div>

                <div className="text">
                    <p>Version:</p>
                    <p>Certbolt Version 1.0</p>
                </div>

            </div>
            </div> */}


            <section className="Posters">
                {data.map((item,index)=>{
                     return <ExamDetailsContainer item={item} key={index} user_id={parse?._id}/>
                })}
               
             
            </section>

        </div>
    )
}

export default ExamDetails