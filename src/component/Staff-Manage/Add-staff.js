import React, { useState } from "react";
import { useNavigate, Link } from 'react-router-dom'
import bcrypt from 'bcryptjs'
// const navigate = useNavigate();
import "./Add_Staff.css"
import Header from "../Header";
import Footer from '../footer';
import RYTCOntent from '../RYTContent';
import validator from 'validator'
export function Add_Staff() {
    let [FirstName, SetFname] = useState(" ");
    let [FnameErr, SetFnameErr] = useState(false);
    let [LastName, SetLname] = useState(" ");
    let [LnameErr, SetLnameErr] = useState(false);
    let [Gender, SetGender] = useState(" ");
    let [GenderErr, SetGenderErr] = useState(false);
    let [BooldGRP, SetBLDGRP] = useState(" ");
    let [BLDGRPErr, SetBLDGRPErr] = useState(false);
    let [Pan_Adhar, SetPanAdhar] = useState(" ");
    let [PanAdharErr, SetPanAdharErr] = useState(false);
    let [DOB, SetDOB] = useState(" ");
    let [DOBErr, SetDOBErr] = useState(false)
    let [MobileNo, SetMobile] = useState(" ")
    let [MobileError, SetMobileError] = useState(false)
    let [Email, SetEmail] = useState(" ")
    let [EmailError, SetEmailError] = useState(false)
    let [Password, setPassword] = useState(" ")
    let [PasswordError, setPasswordError] = useState(false)
    let [ConfirmPassword, setConfirmPassword] = useState(" ");
    let [ConfirmPasswordError, setConfirmPasswordErr] = useState(false)
    let [Address, SetAddress] = useState(" ")
    let [AddressErr, SetAddressErr] = useState(false)
    let value = Password;
    const navigate = useNavigate();






    // let DataShow = [Fname, Lname, Gender, BLDGRP, PanAdhar, DOB, Mobile, Email, Password, ConfirmPassword, Address]


    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }
    function isValidPass(Pass) {
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/.test(Pass)
    }

    function ivalidDoct(Doct) {
        return /[^A-Za-z0-9]+/.test(pass)
    }

    function FnameHandler(e) {
        let Data = e.target.value;

        console.warn(Data);

        if (Data.length < 3) {
            SetFnameErr(true);
        }
        else {
            SetFnameErr(false)
        }
        SetFname(Data)
    }
    function LnameHandler(e) {
        let Data = e.target.value;
        if (Data.length < 3) {
            SetLnameErr(true);
        }
        else {
            SetLnameErr(false)
        }
        SetLname(Data)
    }

    function GenderHandler(e) {
        let Data = e.target.value;
        console.warn(Gender);


    }

    function DOBHandler(e) {
        let Data = e.target.value;
        if (validator.isDate(Data)) {
            SetDOBErr(false)
        } else {
            SetDOBErr(true)

        }
        SetDOB(Data)
    }

    function PanAdharHandler(e) {
        let Data = e.target.value
        if (/[^A-Za-z0-9]+/.test(Data)) {
            SetPanAdharErr(true)
        } else {
            SetPanAdharErr(false)

        }
        SetPanAdhar(Data)
    }
    function MobileHAndler(e) {
        let Data = e.target.value;
        if (!!(Data.match('[0-9]{12}'))) {
            SetMobileError(true)
        }
        else {
            SetMobileError(false)
        }
        SetMobile(Data)

    }

    function EmailHAndler(e) {
        let Data = e.target.value;
        if (!isValidEmail(Data)) {
            SetEmailError(true)
        } else {
            SetEmailError(false)
        }
        SetEmail(Data)
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
        setConfirmPassword(Data)
    }
    function AddressHandler(e) {
        let Data = e.target.value;
        if (Data.length < 3) {
            SetAddressErr(true)
        }
        else {
            SetAddressErr(false)
        }
        SetAddress(Data)
    }

    const collectData = async () => {
        // SetFname(" ")
        // SetLname(" ")
        // SetGender(" ")
        if (FnameHandler.length == 0 || LastName.length == 0 || Gender.length == 0 || DOB.length == 0 ||
            BooldGRP.length == 0 || MobileNo.length == 0 || Pan_Adhar.length == 0 || Address.length == 0 || Email.length == 0 || Password.length == 0 || ConfirmPassword == 0) {

            alert(" Please enter correct field")
        } else {


            // const salt = await bcrypt.genSalt(10);
            // FirstName = await bcrypt.hash(FirstName, salt);
            // LastName = await bcrypt.hash(LastName, salt);
            // Gender = await bcrypt.hash(Gender, salt);
            // DOB = await bcrypt.hash(DOB, salt);
            // BooldGRP = await bcrypt.hash(BooldGRP, salt);
            // MobileNo = await bcrypt.hash(MobileNo, salt);
            // Pan_Adhar = await bcrypt.hash(Pan_Adhar, salt);
            // Address = await bcrypt.hash(Address, salt);
            // Email = await bcrypt.hash(Email, salt);
            // Password = await bcrypt.hash(Password, salt);

            console.warn(FirstName, LastName, Gender, DOB, BooldGRP, MobileNo, Pan_Adhar, Address, Email, Password);
            let result = await fetch("http://localhost:5000/AddStaff", {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'

                },
                credentials: 'same-origin',
                body: JSON.stringify({ FirstName, LastName, Gender, DOB, BooldGRP, MobileNo, Pan_Adhar, Address, Email, Password }),
                headers: {
                    'Content-Type': 'application/json',
                    authorization: JSON.parse(localStorage.getItem("Admin_Token"))
                }
            });
            result = await result.json();
            if (result) {
                // alert(" Data saved");
                navigate("/Manage-Staff")
            }


        }

    }
    return (
        <div class="wrapper">
            <Header />
            <section className="h-100 bg-dark">
                <div class="card card-shadow mb-4">
                    <div class="card-header">
                        <div class="card-title">
                            Add Staff
                        </div>
                    </div>
                    <div class="card-body">
                        <form class="container-fluid" id="needs-validation" novalidate>
                            <div class="row">
                                <div class="col-md-6 mb-3">
                                    <label className="form-label" htmlFor="form3Example1m">First name</label>
                                    <input type="text" id="form3Example1m" className="form-control form-control-lg" onChange={FnameHandler} />
                                    {FnameErr ? <span style={{ color: 'red' }}>Please Enter First Name </span> : ""}
                                </div>
                                <div class="col-md-6 mb-3">
                                    <div className="form-outline">
                                        <label className="form-label" htmlFor="form3Example1n">Last name</label>
                                        <input type="text" id="form3Example1n" className="form-control form-control-lg" onChange={LnameHandler} />
                                        {LnameErr ? <span style={{ color: 'red' }}>Please Enter valid Last Name </span> : ""}

                                    </div>

                                </div>
                            </div>
                            <div className="row">
                                <label className=".label2" htmlFor="form3Example8" >Gender</label>
                                <div claclassNamess="dropdown mb-4">

                                    <div className="single-input beauty-service clearfix">
                                        <select className="boxes" name="beauty-service" required onChange={(e) => SetGender(e.target.value)}>
                                            <option selected className="buttons">-------Select-------</option>
                                            <option value="Male">Male</option>
                                            <option value="Femal">Female</option>
                                            <option value="Other">Other</option>
                                        </select>
                                        {GenderErr ? <span style={{ color: 'red' }}>Please Select Valid Gander </span> : ""}
                                    </div>
                                </div>
                                <label className="label2" htmlFor="form3Example8" >Blood Group</label>
                                <div claclassNamess="dropdown mb-4">
                                    <div className="single-input beauty-service clearfix">
                                        <select className="boxes" name="beauty-service" required onChange={(e) => SetBLDGRP(e.target.value)} >
                                            <option selected className="buttons">-------Select-------</option>
                                            <option value="O+">O+</option>
                                            <option value="O-">O-</option>
                                            <option value="A+">A+</option>
                                            <option value="A-">A-</option>
                                            <option value="B+">B+</option>
                                            <option value="B-">B-</option>
                                            <option value="AB+">AB+</option>
                                            <option value="AB-">AB-</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className="form-outline mb-4">
                                <label className="form-label" htmlFor="form3Example9">DOB</label>
                                <input type="text" id="form3Example9" className="form-control form-control-lg" placeholder="YYYY/MM/DD" onChange={DOBHandler} />
                                {DOBErr ? <span style={{ color: 'red' }}>Please Enter Valid Date </span> : ""}
                            </div>

                            <div className="form-outline mb-4">
                                <label className="form-label" htmlFor="form3Example90">Adhar or PanNumber </label>
                                <input type="text" id="form3Example90" className="form-control form-control-lg" placeholder="XXXX XXXX XXXX" onChange={PanAdharHandler} />
                                {PanAdharErr ? <span style={{ color: 'red' }}>Please Enter Valid Date </span> : ""}
                            </div>
                            <div className="form-outline mb-4">
                                <label className="form-label" htmlFor="form3Example8">Address</label>
                                <input type="text" id="form3Example8" className="form-control form-control-lg" onChange={AddressHandler} />
                                {AddressErr ? <span style={{ color: 'red' }}>Please Enter Valid Address </span> : ""}

                            </div>


                            <div className="row">
                                <div className="col-md-6 mb-4">
                                    <div className="form-outline">
                                        <label className="form-label" placeholder="+91 xxxx-nnnnnn" >Contect No</label>
                                        <input type="number" id="form3Example1m1" className="form-control form-control-lg" onChange={MobileHAndler} maxLength={13} />
                                        {MobileError ? <span style={{ color: 'red' }}>Please Enter valid Mobile Number</span> : ""}

                                    </div>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <div className="form-outline">
                                        <label className="form-label" htmlFor="form3Example1n1">Email</label>
                                        <input type="text" id="form3Example1n1" className="form-control form-control-lg" onChange={EmailHAndler} />
                                        {EmailError ? <span style={{ color: 'red' }}>Please Enter valid Mail </span> : " "}
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6 mb-4">
                                    <div className="form-outline">
                                        <label className="form-label" placeholder="+91 xxxx-nnnnnn" >Password</label>
                                        <input type="password" id="form3Example1m1" className="form-control form-control-lg" onChange={PasswordHandler} />
                                        {PasswordError ? <span style={{ color: 'red' }}>Password Must be 8Digit ("Ex-Abcd@1111)</span> : ""}

                                    </div>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <div className="form-outline">
                                        <label className="form-label" htmlFor="form3Example1n1">Confirm Password</label>
                                        <input type="password" id="form3Example1n1" className="form-control form-control-lg" onChange={CNFRMPasswordHandler} />
                                        {ConfirmPasswordError ? <span style={{ color: 'red' }}>Confirm Password Does't Match </span> : ""}
                                    </div>
                                </div>
                            </div>

                            <div className="d-flex justify-content-end pt-3">
                                <button type="button" className="btn btn-warning btn-lg ms-2" onClick={collectData}>Submit form</button>
                            </div>
                        </form>

                    </div>
                </div>
            </section>
            <Footer />
        </div>


    )
}