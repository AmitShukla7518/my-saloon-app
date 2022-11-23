// import { useState } from "react";
import React, { useEffect, useState } from 'react'
import bcrypt from 'bcryptjs'
import { useNavigate, Link } from 'react-router-dom';
import validator from 'validator'
// import { BrowserRouter, Route, Routes, Switch, Li, Link } from 'react-router-dom';

export default function Ragister() {
 const navigate = useNavigate();
    let [Name, setName] = useState(" ")
    let [NameError, setNameError] = useState(false)
    let [Mobile, setMobile] = useState(" ")
    let [MobileError, setMobileError] = useState(false)
    let [Email, setEmail] = useState(" ")
    let [EmailError, setEmailError] = useState(false)
    let [Password, setPassword] = useState(" ")
    let [PasswordError, setPasswordError] = useState(false)
    let [ConfirmPassword, setConfirmPassword] = useState(" ");
    let [ConfirmPasswordError, setConfirmPasswordErr] = useState(false)
    const salt = bcrypt.genSaltSync(10)
    let value = Password;
   
     
    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }
    function isValidPass(Pass) {
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/.test(Pass)
    }

    function UserHandler(e) {
        let Data = e.target.value;
        if (Data.length < 3) {
            setNameError(true);
        }
        else {
            setNameError(false)
        }
        setName(Data)

    }

    function MobileHAndler(e) {
        let Data = e.target.value;
        if (!!(Data.match('[0-9]{11}'))) {
            setMobileError(true)
        }
        else {
            setMobileError(false)
        }
        setMobile(Data)

    }
    function EmailHAndler(e) {
        let Data = e.target.value;
        if (!isValidEmail(Data)) {
            setEmailError(true)
        } else {
            setEmailError(false)
        }
        setEmail(Data)
    }

    function PasswordHandler(e) {
        let Data = e.target.value;
        if (!isValidPass(Data)) {
            setPasswordError(true)
        } else {
            setPasswordError(false)
        }
        setPassword(Data)
    }
    function CNFRMPasswordHandler(e) {
        let Data = e.target.value;
        if (Data !== Password) {
            setConfirmPasswordErr(true)
        }
        else {
            setConfirmPasswordErr(false)
        }
        // console.warn(e.target.value);

    }

    const collectData = async () => {
        if (Name.length < 3 || Email.length < 3 || Password.length < 3) {

            alert(" Please enter correct field")
        } else {

            let value = Password;
            const salt = await bcrypt.genSalt(10);
            value = await bcrypt.hash(value, salt);
          console.warn(Name, Mobile, Email, value);

            // console.warn(Name, Password, Email);
            // localStorage.setItem('user', Name);
            // localStorage.setItem('Email', Email);

            let result = await fetch("http://localhost:5000/SignUP", {
                // method: 'post',
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'same-origin',
                body: JSON.stringify({ Name, Mobile, Email, value }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            result = await result.json();
            //   console.warn(result);
            // alert(" Data saved")
            // navigate('/')
            console.warn(result.result);

            localStorage.setItem("user", Name);
            localStorage.setItem("token", JSON.stringify(result.auth));
            navigate('/');
            alert(" Data saved");

        }

        // {
        //     console.warn(Name, Mobile, Email, Password);
        //     alert(" Data saved");
        // }
    }
    return (
        <div className="sufee-login d-flex align-content-center flex-wrap">
            <div className="container-fluid">
                <div className="login-content">
                    <div className="logo">
                        <a href="#"> <strong className="logo_icon"> <img alt="" src="assets/images/small-logo.html" /> </strong> <span className="logo-default"> <img alt="" src="assets/images/logo.png" /> </span> </a>
                    </div>
                    <div className="login-form">
                        <form>
                            <div className="form-group">
                                <label>Name</label>
                                <input type="text" className="form-control" placeholder="Name" onChange={UserHandler} />
                                {NameError ? <span style={{ color: 'red' }}>Please Enter valid Name</span> : ""}
                            </div>

                            <div className="form-group">
                                <label>Mobile Number </label>
                                <input type="Number" className="form-control" placeholder="+91 xxxx-nnnnnn" onChange={MobileHAndler} maxLength={12} />
                                {MobileError ? <span style={{ color: 'red' }}>Please Enter valid Mobile Number</span> : ""}
                            </div>

                            <div className="form-group">
                                <label>Email address</label>
                                <input type="email" className="form-control" placeholder="Email" onChange={EmailHAndler} required />
                                {EmailError ? <span style={{ color: 'red' }}>Please Enter valid Mail </span> : ""}
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" placeholder="Password" onChange={PasswordHandler} />
                                {PasswordError ? <span style={{ color: 'red' }}>Password Must be 8Digit ("Ex-Abcd@1111)</span> : ""}
                            </div>
                            <div className="form-group">
                                <label>Confirm Password</label>
                                <input type="password" className="form-control" placeholder="Password" onChange={CNFRMPasswordHandler} />
                                {ConfirmPasswordError ? <span style={{ color: 'red' }}>Confirm Password Does't Match </span> : ""}
                            </div>
                            <div className="checkbox">
                                <label>
                                    <input type="checkbox" />
                                    Agree the terms and policy </label>
                            </div>
                            <button type="button" className="btn btn-success btn-flat m-b-30 m-t-30" onClick={collectData}>
                                Register
                            </button>
                            <div className="social-login-content">
                                <div className="social-button">
                                    <button type="button" className="btn social facebook btn-flat btn-addon mb-3">
                                        <i className="fa fa-facebook"></i>Register with facebook
                                    </button>
                                    <button type="button" className="btn social twitter btn-flat btn-addon mt-2">
                                        <i className="fa fa-twitter"></i>Register with twitter
                                    </button>
                                </div>
                            </div>
                            <div className="register-link m-t-15 text-center">
                                <p>
                                    Already have account ? <Link to="/Login"> Sign in</Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}