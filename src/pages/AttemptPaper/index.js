import React from "react";
import { useNavigate } from "react-router-dom";
import './index.css';
//icons
import { LuLogOut } from "react-icons/lu";

const AttemptPaper = () => {
    const navigate = useNavigate()
    const BuyMembershipPlain = () => {
        navigate('/membership')
    }

    
    return (
        <div className="AttempPaperBody">

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

            

        <h1>Attempt Exam</h1>
        <p>Time: 10 min</p>

        <div className="Paper">
            {/* Start of Question */}
            <div>
            <p>1: Lorem ipsum is placeholder text commonly used in the graphic, print and publishing industries?</p>
            <div className="options">
            <div>
                <label htmlFor="question1">A. </label>
                <input id="question1" type="radio" name="question1"/>
            </div>

            <div>
                <label htmlFor="question2">B. </label>
                <input id="question2" type="radio" name="question1"/>
            </div>

            <div>
                <label htmlFor="question3">C. </label>
                <input id="question3" type="radio" name="question1"/>
            </div>

            <div>
                <label htmlFor="question4">D. </label>
                <input id="question4" type="radio" name="question1"/>
            </div>
            </div>
            </div>
            {/* End of Question */}


            {/* Start of Question */}
            <div>
            <p>2: Lorem ipsum is placeholder text commonly used in the graphic, print and publishing industries?</p>
            <div className="options">
            <div>
                <label htmlFor="question1">A. </label>
                <input id="question1" type="radio" name="question1"/>
            </div>

            <div>
                <label htmlFor="question2">B. </label>
                <input id="question2" type="radio" name="question1"/>
            </div>

            <div>
                <label htmlFor="question3">C. </label>
                <input id="question3" type="radio" name="question1"/>
            </div>

            <div>
                <label htmlFor="question4">D. </label>
                <input id="question4" type="radio" name="question1"/>
            </div>
            </div>
            </div>
            {/* End of Question */}


            {/* Start of Question */}
            <div>
            <p>3: Lorem ipsum is placeholder text commonly used in the graphic, print and publishing industries?</p>
            <div className="options">
            <div>
                <label htmlFor="question1">A. </label>
                <input id="question1" type="radio" name="question1"/>
            </div>

            <div>
                <label htmlFor="question2">B. </label>
                <input id="question2" type="radio" name="question1"/>
            </div>

            <div>
                <label htmlFor="question3">C. </label>
                <input id="question3" type="radio" name="question1"/>
            </div>

            <div>
                <label htmlFor="question4">D. </label>
                <input id="question4" type="radio" name="question1"/>
            </div>
            </div>
            </div>
            {/* End of Question */}


            {/* Start of Question */}
            <div>
            <p>4: Lorem ipsum is placeholder text commonly used in the graphic, print and publishing industries?</p>
            <div className="options">
            <div>
                <label htmlFor="question1">A. </label>
                <input id="question1" type="radio" name="question1"/>
            </div>

            <div>
                <label htmlFor="question2">B. </label>
                <input id="question2" type="radio" name="question1"/>
            </div>

            <div>
                <label htmlFor="question3">C. </label>
                <input id="question3" type="radio" name="question1"/>
            </div>

            <div>
                <label htmlFor="question4">D. </label>
                <input id="question4" type="radio" name="question1"/>
            </div>
            </div>
            </div>
            {/* End of Question */}


            {/* Start of Question */}
            <div>
            <p>5: Lorem ipsum is placeholder text commonly used in the graphic, print and publishing industries?</p>
            <div className="options">
            <div>
                <label htmlFor="question1">A. </label>
                <input id="question1" type="radio" name="question1"/>
            </div>

            <div>
                <label htmlFor="question2">B. </label>
                <input id="question2" type="radio" name="question1"/>
            </div>

            <div>
                <label htmlFor="question3">C. </label>
                <input id="question3" type="radio" name="question1"/>
            </div>

            <div>
                <label htmlFor="question4">D. </label>
                <input id="question4" type="radio" name="question1"/>
            </div>
            </div>
            </div>
            {/* End of Question */}


            {/* Start of Question */}
            <div>
            <p>6: Lorem ipsum is placeholder text commonly used in the graphic, print and publishing industries?</p>
            <div className="options">
            <div>
                <label htmlFor="question1">A. </label>
                <input id="question1" type="radio" name="question1"/>
            </div>

            <div>
                <label htmlFor="question2">B. </label>
                <input id="question2" type="radio" name="question1"/>
            </div>

            <div>
                <label htmlFor="question3">C. </label>
                <input id="question3" type="radio" name="question1"/>
            </div>

            <div>
                <label htmlFor="question4">D. </label>
                <input id="question4" type="radio" name="question1"/>
            </div>
            </div>
            </div>
            {/* End of Question */}


            {/* Start of Question */}
            <div>
            <p>7: Lorem ipsum is placeholder text commonly used in the graphic, print and publishing industries?</p>
            <div className="options">
            <div>
                <label htmlFor="question1">A. </label>
                <input id="question1" type="radio" name="question1"/>
            </div>

            <div>
                <label htmlFor="question2">B. </label>
                <input id="question2" type="radio" name="question1"/>
            </div>

            <div>
                <label htmlFor="question3">C. </label>
                <input id="question3" type="radio" name="question1"/>
            </div>

            <div>
                <label htmlFor="question4">D. </label>
                <input id="question4" type="radio" name="question1"/>
            </div>
            </div>
            </div>
            {/* End of Question */}


            {/* Start of Question */}
            <div>
            <p>8: Lorem ipsum is placeholder text commonly used in the graphic, print and publishing industries?</p>
            <div className="options">
            <div>
                <label htmlFor="question1">A. </label>
                <input id="question1" type="radio" name="question1"/>
            </div>

            <div>
                <label htmlFor="question2">B. </label>
                <input id="question2" type="radio" name="question1"/>
            </div>

            <div>
                <label htmlFor="question3">C. </label>
                <input id="question3" type="radio" name="question1"/>
            </div>

            <div>
                <label htmlFor="question4">D. </label>
                <input id="question4" type="radio" name="question1"/>
            </div>
            </div>
            </div>
            {/* End of Question */}


            {/* Start of Question */}
            <div>
            <p>9: Lorem ipsum is placeholder text commonly used in the graphic, print and publishing industries?</p>
            <div className="options">
            <div>
                <label htmlFor="question1">A. </label>
                <input id="question1" type="radio" name="question1"/>
            </div>

            <div>
                <label htmlFor="question2">B. </label>
                <input id="question2" type="radio" name="question1"/>
            </div>

            <div>
                <label htmlFor="question3">C. </label>
                <input id="question3" type="radio" name="question1"/>
            </div>

            <div>
                <label htmlFor="question4">D. </label>
                <input id="question4" type="radio" name="question1"/>
            </div>
            </div>
            </div>
            {/* End of Question */}


            {/* Start of Question */}
            <div>
            <p>10: Lorem ipsum is placeholder text commonly used in the graphic, print and publishing industries?</p>
            <div className="options">
            <div>
                <label htmlFor="question1">A. </label>
                <input id="question1" type="radio" name="question1"/>
            </div>

            <div>
                <label htmlFor="question2">B. </label>
                <input id="question2" type="radio" name="question1"/>
            </div>

            <div>
                <label htmlFor="question3">C. </label>
                <input id="question3" type="radio" name="question1"/>
            </div>

            <div>
                <label htmlFor="question4">D. </label>
                <input id="question4" type="radio" name="question1"/>
            </div>
            </div>
            </div>
            {/* End of Question */}


            
        </div>
        
        </div>
    )
}

export default AttemptPaper