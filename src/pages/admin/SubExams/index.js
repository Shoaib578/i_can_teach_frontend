import React from "react";
import './index.css'
import AdminNav from '../../../components/AdminNav'
import { useNavigate } from "react-router-dom";

const SubExams = () => {
    const navigate = useNavigate()

    const Questions = () => {
        navigate('/admin/exams/subexams/questions')
    }
    return (
        <div className="CreatingSubscriptionBody">
            <AdminNav/>

            <div class="table-wrapper">
                <h1 style={{color:'black', textAlign:'center', marginBottom:10}}>Sub Exams</h1>
    <table class="fl-table">
        <thead>
        <tr>
            <th>Serial No</th>
            <th>Title</th>
            <th>Description</th>
        </tr>
        </thead>
        <tbody>
    
                <tr style={{cursor:'pointer'}} onClick={() => Questions()}>
                    <td>Serial No</td>
                    <td>Title</td>
                    <td>Description</td>
                </tr>
            
        
        </tbody>
    </table>

</div>

            

            

        </div>
    )
}

export default SubExams;