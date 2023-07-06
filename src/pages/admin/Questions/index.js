import React from "react";
import './index.css'
import AdminNav from '../../../components/AdminNav'
import { useNavigate } from "react-router-dom";

const Questions = () => {
    const navigate = useNavigate()
    const Answers = () => {
        navigate('/answers')
    }
    return (
        <div className="CreatingSubscriptionBody">
            <AdminNav/>

            <div class="table-wrapper">
                <h1 style={{color:'black', textAlign:'center', marginBottom:10}}>Questions</h1>
    <table class="fl-table">
        <thead>
        <tr>
            <th>Serial No</th>
            <th>Title</th>
            <th>Question</th>
        </tr>
        </thead>
        <tbody>
    
                <tr onClick={() => Answers()} style={{cursor:'pointer'}}>
                    <td>Serial No</td>
                    <td>Title</td>
                    <td>Question</td>
                </tr>
            
        
        </tbody>
    </table>

</div>

            

            

        </div>
    )
}

export default Questions;