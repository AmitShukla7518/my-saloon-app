import React from "react";
import "./Add_Staff.css"
import Header from "../Header";
import Footer from '../footer';
import RYTCOntent from '../RYTContent';
export function Add_Staff() {
    return (



        <section className="h-100 bg-dark">
            <Header />
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col">
                        <div className="card card-registration my-4">
                            <div className="row g-0">
                                <div className="col-xl-6 d-none d-xl-block">
                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp"
                                        alt="Sample photo" />
                                </div>
                                <div className="col-xl-6">
                                    <div className="card-body p-md-5 text-black">
                                        <h3 className="mb-5 text-uppercase">Add Staff</h3>

                                        <div className="row">
                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline">
                                                    <input type="text" id="form3Example1m" className="form-control form-control-lg" />
                                                    <label className="form-label" htmlFor="form3Example1m">First name</label>
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline">
                                                    <input type="text" id="form3Example1n" className="form-control form-control-lg" />
                                                    <label className="form-label" htmlFor="form3Example1n">Last name</label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline">
                                                    <input type="text" id="form3Example1m1" className="form-control form-control-lg" />
                                                    <label className="form-label" htmlFor="form3Example1m1">Mobile No</label>
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline">
                                                    <input type="text" id="form3Example1n1" className="form-control form-control-lg" />
                                                    <label className="form-label" htmlFor="form3Example1n1">Email</label>
                                                </div>
                                            </div>
                                        </div>




                                        <div className="form-outline mb-4">
                                            <input type="text" id="form3Example8" className="form-control form-control-lg" />
                                            <label className="form-label" htmlFor="form3Example8">Address</label>
                                        </div>

                                        <div className="d-md-flex justify-content-start align-items-center mb-4 py-2">

                                            <label className="form-label" htmlFor="form3Example8">Gender</label>
                                            <div claclassNamess="dropdown mb-4">
                                                <a className="btn btn-outline-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown"
                                                    aria-haspopup="true" aria-expanded="false">--select--</a>

                                                <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                                    <a className="dropdown-item" href="#">Action</a>
                                                    <a className="dropdown-item" href="#">Another action</a>
                                                    <a className="dropdown-item" href="#">Something else here</a>
                                                </div>
                                            </div>
                                            
                                        </div>

                                        <div className="form-outline mb-4">
                                            <input type="text" id="form3Example9" className="form-control form-control-lg" />
                                            <label className="form-label" htmlFor="form3Example9">DOB</label>
                                        </div>

                                        <div className="form-outline mb-4">
                                            <input type="text" id="form3Example90" className="form-control form-control-lg" />
                                            <label className="form-label" htmlFor="form3Example90">Pincode</label>
                                        </div>

                                        <div className="form-outline mb-4">
                                            <input type="text" id="form3Example99" className="form-control form-control-lg" />
                                            <label className="form-label" htmlFor="form3Example99">Course</label>
                                        </div>

                                        <div className="form-outline mb-4">
                                            <input type="text" id="form3Example97" className="form-control form-control-lg" />
                                            <label className="form-label" htmlFor="form3Example97">Email ID</label>
                                        </div>
                                        <div className="form-outline mb-4">
                                            <input type="text" id="form3Example97" className="form-control form-control-lg" />
                                            <label className="form-label" htmlFor="form3Example97">Email ID</label>
                                        </div>

                                        <div className="d-flex justify-content-end pt-3">
                                            <button type="button" className="btn btn-warning btn-lg ms-2">Submit form</button>
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