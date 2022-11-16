import React, { useState } from "react";
import { useNavigate, Link } from 'react-router-dom'
// const navigate = useNavigate();
import "../Staff-Manage/Add_Staff.css"
import Header from "../Header";
import Footer from '../footer';
import RYTCOntent from '../RYTContent';
import validator from 'validator'


export function Add_Servise() {
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
    return (

        <section className="h-100 bg-dark">
            <Header />





            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col">
                        <div className="card card-registration my-4">
                            <div className="row g-0">
                                <div className="col-xl-6 d-none d-xl-block">
                                    <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/044.webp"
                                        alt="Sample photo" />
                                </div>
                                <div className="col-xl-6">
                                    <div className="card-body p-md-5 text-black">
                                        <h3 className="mb-5 text-uppercase">Add Staff</h3>

                                        <div className="row">
                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline">
                                                    <label className="form-label" htmlFor="form3Example1m">First name</label>
                                                    <input type="text" id="form3Example1m" className="form-control form-control-lg" />
                                                    {FnameErr ? <span style={{ color: 'red' }}>Please Enter First Name </span> : ""}
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline">
                                                    <label className="form-label" htmlFor="form3Example1n">Last name</label>
                                                    <input type="text" id="form3Example1n" className="form-control form-control-lg" />
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
                                            <input type="text" id="form3Example9" className="form-control form-control-lg" placeholder="YYYY/MM/DD" />
                                            {DOBErr ? <span style={{ color: 'red' }}>Please Enter Valid Date </span> : ""}
                                        </div>

                                        <div className="form-outline mb-4">
                                            <label className="form-label" htmlFor="form3Example90">Adhar or PanNumber </label>
                                            <input type="text" id="form3Example90" className="form-control form-control-lg" placeholder="XXXX XXXX XXXX" />
                                            {PanAdharErr ? <span style={{ color: 'red' }}>Please Enter Valid Date </span> : ""}
                                        </div>
                                        <div className="form-outline mb-4">
                                            <label className="form-label" htmlFor="form3Example8">Address</label>
                                            <input type="text" id="form3Example8" className="form-control form-control-lg" />
                                            {AddressErr ? <span style={{ color: 'red' }}>Please Enter Valid Address </span> : ""}

                                        </div>

                                        <div className="row">
                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline">
                                                    <label className="form-label" placeholder="+91 xxxx-nnnnnn" >Contect No</label>
                                                    <input type="number" id="form3Example1m1" className="form-control form-control-lg" maxLength={13} />
                                                    {MobileError ? <span style={{ color: 'red' }}>Please Enter valid Mobile Number</span> : ""}

                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline">
                                                    <label className="form-label" htmlFor="form3Example1n1">Email</label>
                                                    <input type="text" id="form3Example1n1" className="form-control form-control-lg" />
                                                    {EmailError ? <span style={{ color: 'red' }}>Please Enter valid Mail </span> : " "}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline">
                                                    <label className="form-label" placeholder="+91 xxxx-nnnnnn" >Password</label>
                                                    <input type="password" id="form3Example1m1" className="form-control form-control-lg" />
                                                    {PasswordError ? <span style={{ color: 'red' }}>Password Must be 8Digit ("Ex-Abcd@1111)</span> : ""}

                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline">
                                                    <label className="form-label" htmlFor="form3Example1n1">Confirm Password</label>
                                                    <input type="password" id="form3Example1n1" className="form-control form-control-lg" />
                                                    {ConfirmPasswordError ? <span style={{ color: 'red' }}>Confirm Password Does't Match </span> : ""}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-end pt-3">
                                            <button type="button" className="btn btn-warning btn-lg ms-2" >Submit form</button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </section>

    )
}