import React from "react";
import './index.css'
import { get_exam_history } from "../../call_apis";
import { useState } from "react";
import { message } from "antd";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const user = localStorage.getItem('user')
const parse = JSON.parse(user)
const ExamHistory = () => {
  const navigate = useNavigate()
    const [data,setData] = useState([])
    const GetExamHistory = async()=>{
      await get_exam_history(parse._id)
      .then(res=>{
        setData(res.data.data)
      })
      .catch(err=>{
        message.error("Something Went Wrong")
      })
    }

    useEffect(()=>{
      if(user){
        GetExamHistory()
      }else{
        message.error("Please Login to be able to access")
        navigate('/login')
        
      }
    },[])
    return (
        <div className="ExamDetails">
            <div className="ExamDetailsHeader">
                <p className="ExamDetailsTitle">Exam History</p>
                <p className="ExamDetailsDescription">CompTIA SY0-501 - CompTIA Security+ Certification Exam</p>
            </div>

<table>
  <tr>
    <th>Exam</th>
    <th>Taken Date</th>
    <th>Score</th>
  
  </tr>

  {data?.map((item,index)=>{
    return <tr key={index}>
    <td>{item.exam[0].title}</td>
    <td>{new Date(item.taken_date).toDateString()}</td>
    <td>{item.score}</td>
  
  </tr>
  })}
  
  {/* <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
  </tr> */}
  
</table>

        </div>
    )
}

export default ExamHistory