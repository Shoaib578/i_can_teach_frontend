import React, { useEffect } from "react";
import {
    BrowserRouter as Router,
    Routes as Switch,
    Route,
    Link,
    redirect
  } from "react-router-dom";

// pages
import Home from "../pages/Home";
import Membership from "../pages/Membership";
import Profile from "../pages/Profile";
import Subscriptions from "../pages/admin/Subscriptions";
import Exams from "../pages/admin/Exams";
import SubExams from "../pages/admin/SubExams";
import Questions from "../pages/admin/Questions";
import Answers from "../pages/admin/Answers";
import AddExam from '../pages/admin/AddExam';
import AddQuestion from "../pages/admin/AddQuestion";
import AddAnswer from "../pages/admin/AddAnswer";
import AddSubscription from "../pages/admin/AddSubscription";
import AttemptExam from "../pages/AttemptExam";
import AttemptPaper from "../pages/AttemptPaper";
import Login from "../pages/Auth/login";
import Register from "../pages/Auth/register";
import AddSubExam from "../pages/admin/AddSubExam";
import BuyMemberShip from "../pages/Membership/buy_membership";
import AfterConfirmPayment from "../pages/Membership/after_confirm_payment"
const admin = localStorage.getItem('admin');

const Routes = () => {

    const check_admin = ()=>{
        if(window.location.pathname.includes('admin')){
           if(!admin){
            return window.location ="/login"
           }
        }
    }

    useEffect(()=>{
        check_admin()
    },[])
    return (
        <Router>
            <Switch>
            <Route exact path="/"  element={<Home/>}/>
            <Route exact path="/membership"  element={<Membership/>}/>
            <Route exact path="/buy_membership"  element={<BuyMemberShip/>}/>
            <Route exact path="/bought_membership/:membership_id"  element={<AfterConfirmPayment />}/>


            <Route exact path="/profile"  element={<Profile/>}/>
            <Route exact path="/exam/attempt/:exam_id"  element={<AttemptExam/>}/>
            <Route exact path="/exam/paper/attempt/:sub_exam_id"  element={<AttemptPaper/>}/>
            <Route exact path="/answers"  element={<Answers/>}/>

            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />

            {/* =========================== Admin =========================== */}
            <Route exact path="/admin/subscription"  element={<Subscriptions/>}/>
            <Route exact path="/admin/subscription/add"  element={<AddSubscription/>}/>
            <Route exact path="/admin/exams"  element={<Exams/>}/>
            <Route exact path="/admin/exams/add"  element={<AddExam/>}/>
            <Route exact path="/admin/exams/subexams/:exam_id"  element={<SubExams/>}/>
            <Route exact path="/admin/exams/add_subexams/:exam_id"  element={<AddSubExam/>}/>

            <Route exact path="/admin/exams/subexams/questions/:sub_exam_id"  element={<Questions/>}/>
            <Route exact path="/admin/question/add/:sub_exam_id"  element={<AddQuestion/>}/>
            <Route exact path="/admin/question/answers/:question_id"  element={<Answers/>}/>
            <Route exact path="/admin/answer/add/:question_id"  element={<AddAnswer/>}/>
         




            </Switch>
        </Router>
    )
}

export default Routes