import { useState } from "react";
import { useNavigate, Link } from 'react-router-dom'
import Header from "../component/Header";
import Footer from "../component/footer";
import RYTCOntent from '../component/RYTContent';
import { PrivateComponent } from '../PrivateCompo/PrivateComponent';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
export default function Login() {
    let [Email, setEmail] = useState(" ")
    let [EmailError, setEmailError] = useState(false)
    let [Password, setPassword] = useState(" ")
    const navigate = useNavigate();
    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
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

    const handleLogin = async () => {

        if (Email.length < 3) {

            alert(" Please enter correct field")
        } else {
            let result = await fetch("http://localhost:5000/Login", {
                method: 'post',
                body: JSON.stringify({ Email, Password }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            result = await result.json();
            console.log(result.UserType);
            console.log(result.ActiveStatus);

            if (result.UserType == "Admin" && result.auth && result.ActiveStatus == "Yes") {
                localStorage.setItem('Admin', JSON.stringify(result.UserType));
                localStorage.setItem('Admin_Token', JSON.stringify(result.auth));
                localStorage.setItem('Name', JSON.stringify(result.Name));
                console.warn(result.Name);
                var ClearSession = setTimeout(clearLocalStorage,3600);
                function clearLocalStorage() {
                    alet("cbhjsd")
                    localStorage.clear();

                }
                navigate("/")

            } else if (result.UserType == "Staff" && result.ActiveStatus == "Yes") {
                localStorage.setItem("user", JSON.stringify(result.UserType));
                localStorage.setItem('token_Token', JSON.stringify(result.auth));
                localStorage.setItem('Name', JSON.stringify(result.Name));

                var ClearSession = setTimeout(clearLocalStorage,3600);
                function clearLocalStorage() {
                    localStorage.clear();
                    alet("cbhjsd")
                }
                navigate("/")



            }
            else {
                alert("invalid Email or Password")
            }
        }
    }
    return (
        <div className="bg_darck">
            <div className="sufee-login d-flex align-content-center flex-wrap">
                <div className="container-fluid">
                    <div className="login-content">
                        <div className="logo">
                            <a href="#">
                                <strong className="logo_icon">
                                    <img alt="" src="assets/images/small-logo.html" />
                                </strong>
                                <span className="logo-default">
                                    <img alt="" src="assets/images/logo.png" />
                                </span>
                            </a>
                        </div>
                        <div className="login-form">
                            <form>
                                <div className="form-group">
                                    <label>Email address</label>
                                    <input type="email" className="form-control" placeholder="Email" onChange={EmailHAndler} />
                                    {EmailError ? <span style={{ color: 'red' }}>Please Enter valid Mail </span> : ""}
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" className="form-control" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                                </div>
                                <div className="checkbox">
                                    <label>
                                        <input type="checkbox" /> Remember Me
                                    </label>
                                    <label className="pull-right">
                                        <a href="#">Forgotten Password?</a>
                                    </label>
                                </div>
                                <button type="button" className="btn btn-success btn-flat m-b-30 m-t-30" onClick={handleLogin}>Sign in</button>
                                <div className="social-login-content">
                                    <div className="social-button">
                                        <button type="button" className="btn social facebook btn-flat btn-addon mb-3">
                                            <i className="fa fa-facebook"></i>Sign in with facebook</button>
                                        <button type="button" className="btn social twitter btn-flat btn-addon mt-2">
                                            <i className="fa fa-twitter"></i>Sign in with twitter</button>
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}