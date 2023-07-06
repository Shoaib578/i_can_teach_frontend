import React from "react";
import './index.css'
import AdminNav from '../../../components/AdminNav'

const Answers = () => {
    return (
        <div className="CreatingSubscriptionBody">
            <AdminNav/>

            <div class="table-wrapper">
                <h1 style={{color:'black', textAlign:'center', marginBottom:10}}>Answers</h1>
    <table class="fl-table">
        <thead>
        <tr>
            <th>Serial No</th>
            <th>option A</th>
            <th>option B</th>
            <th>option C</th>
            <th>option D</th>
        </tr>
        </thead>
        <tbody>
    
                <tr style={{cursor:'pointer'}}>
                    <td>1</td>
                    <td>Answer A</td>
                    <td style={{backgroundColor:'green', color:'white'}}>Answer B</td>
                    <td>Answer C</td>
                    <td>Answer D</td>
                </tr>
            
        
        </tbody>
    </table>

</div>

            

            

        </div>
    )
}

export default Answers;