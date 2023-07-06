import React, { useEffect, useState } from "react";
import './index.css'
import { useNavigate } from "react-router-dom"; 
import { get_all_exams } from "../../call_apis";
import { message } from "antd";

const ExamDetails = () => {
    const [data,setData]= useState([])
    const navigate = useNavigate()
    const AttemptExam = () => {
        navigate('/exam/attempt')
    }

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
                     return <div key={index} className="Poster1">
                     <p className="Title">{item.title}</p>
                     <p>{item.description}</p>
                    
                     <div className="SVEBtn">
                     <button onClick={() => AttemptExam()}>Start Virtual Exam</button>
                     </div>
                 </div>
                })}
               
             
            </section>

        </div>
    )
}

export default ExamDetails