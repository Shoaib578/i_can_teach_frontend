import React from "react";
import { useNavigate } from "react-router-dom";
import './index.css';
//icons
import { LuLogOut } from "react-icons/lu";

const AttemptExam = () => {
    const navigate = useNavigate()
    const BuyMembershipPlain = () => {
        navigate('/membership')
    }

    const Exams = () => {
        navigate('/exam/paper/attempt')
    }
    return (
        <div className="MembershipBody">

            <div className="TopHeader">
                <div className="HeaderContents">
                    <div className="Logo">
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

            <div class="table-wrapper">
                <h1 style={{color:'black', textAlign:'center', marginBottom:10}}>Sub Exams</h1>
    <table class="fl-table">
        <thead>
        <tr >
            <th>Serial No</th>
            <th>Title</th>
            <th>Description</th>
        </tr>
        </thead>
        <tbody>
    
                <tr style={{cursor:'pointer'}} onClick={() => Exams()}>
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

export default AttemptExam