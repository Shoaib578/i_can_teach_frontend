import React from "react";
import './index.css'
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate()

    const Subscriptions = () => {
        navigate('/admin/subscription')
    }

    const Exams = () => {
        navigate('/admin/exams')
    }


    const AddSubscription = () => {
        navigate('/admin/subscription/add')
    }

    const AddExam = () => {
        navigate('/admin/exams/add')
    }

    const AddQuestion = () => {
        navigate('/admin/question/add')
    }

    const AddAnswers = () => {
        navigate('/admin/answer/add')
    }

    const Logout = async()=>{
        await localStorage.removeItem('admin')
        navigate('/login')
    }

    

    
    return (
        <nav className="AdminNavBar">
            <h2 style={{marginLeft:15}}>Admin</h2>
            <ul>
                <li onClick={() => Subscriptions()}>Subscriptions</li>
                <li onClick={() => Exams()}>Exams</li>
                <li onClick={() => AddSubscription()}>Add subscription</li>
                <li onClick={() => AddExam()}>Add exam</li>
               
                <li onClick={() => Logout()}>Logout</li>

            </ul>
        </nav>
    )
}

export default Navbar;