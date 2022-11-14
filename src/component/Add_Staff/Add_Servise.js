

import Header from "../Header";
import Footer from '../footer';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


export default function Add_servise() {
    const [EMPList, setEMPList] = useState([]);
    let [AllEMP, setALLEMP] = useState("NA");


    useEffect(() => {
        getEMPList();
    }, []);

    const getEMPList = async () => {
        let result = await fetch('http://localhost:5000/GetEmpList');
        result = await result.json();
        setEMPList(result);
        setALLEMP(result.length);



    }

    const DeleteEMP = async (EmpCode) => {
        console.warn(EmpCode)
        let result = await fetch(`http://localhost:5000/DeleteEMP/${EmpCode}`, {
            method: "Delete"
        });
        result = await result.json();
        if (result) {
            getEMPList();
        }
    }




    return (
        <div>
            <Header />

            <div class="row">
                <div class="col-lg-3 col-md-6 mb-4">
                    <div class="card border-0 text-light card-shadow">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-12">
                                    <div class="homepage_single">

                                        <span class="bg-info text-center wb-icon-box bg_shedo_light"> <i
                                            class="fa fa-dollar f24" aria-hidden="true"></i> </span>
                                        <div class="homepage_fl_right">
                                            <h4 class="mt-0">Total Record</h4>
                                            <h3><span class="counter" data-count="2456">{AllEMP}</span></h3>
                                        </div>
                                        <p>
                                            Total items sold <span class="fl_right text-success">GOOD <i
                                                class="fa fa-long-arrow-up"
                                                aria-hidden="true"></i></span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-3 col-md-6 mb-4">
                    <div class="card border-0 text-light card-shadow">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-12">
                                    <div class="homepage_single">

                                        <span
                                            class="bg-success text-center wb-icon-box bg_shedo_light_green"><i
                                                class="fa fa-group f24" aria-hidden="true"></i></span>
                                        <div class="homepage_fl_right">
                                            <h4 class="mt-0">Total Booking</h4>
                                            <h3><span class="counter" data-count="1562">0</span></h3>
                                        </div>
                                        <p>
                                            Visitors <span class="fl_right text-danger">Normal <i
                                                class="fa fa-long-arrow-down"
                                                aria-hidden="true"></i></span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-3 col-md-6 mb-4">
                    <div class="card border-0 text-light card-shadow">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-12">
                                    <div class="homepage_single">

                                        <span
                                            class="bg-danger text-center wb-icon-box bg_shedo_light_red"><i
                                                class="fa fa-envelope f24" aria-hidden="true"></i></span>
                                        <div class="homepage_fl_right">
                                            <h4 class="mt-0">Messages</h4>
                                            <h3><span class="counter" data-count="1245">0</span></h3>
                                        </div>
                                        <p>
                                            Last month <span class="fl_right text-danger">Normal <i
                                                class="fa fa-long-arrow-down"
                                                aria-hidden="true"></i></span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-3 col-md-6 mb-4">
                    <div class="card border-0 text-light card-shadow">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-12">
                                    <div class="homepage_single">

                                        <span
                                            class="bg-warning text-center wb-icon-box bg_shedo_light_yellow"><i
                                                class="fa fa-heart f24" aria-hidden="true"></i></span>
                                        <div class="homepage_fl_right">
                                            <h4 class="mt-0">Completed Booking</h4>
                                            <h3>+ <span class="counter" data-count="4245">0</span> K </h3>
                                        </div>
                                        <p>
                                            Update now <span class="fl_right text-success">Update <i
                                                class="fa fa-refresh" aria-hidden="true"></i></span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className="card card-shadow mb-4">
                <div className="card-header">
                    <div className="card-title">
                        Hoverable Dark row

                        <div class="input-group">
                            <div class="form-outline">
                                <input type="search" id="form1" class="form-control" />

                            </div>
                            <button type="button" class="btn btn-primary">
                                <i class="fa fa-search"></i>
                            </button>
                        </div>


                    </div>
                </div>
                <div className="card-body">
                    <table className="table table-hover table-dark">
                        <thead>
                            <tr>
                                <th scope="col">EMP ID </th>
                                <th scope="col">Name</th>
                                <th scope="col">Mobile</th>
                                <th scope="col">Document No</th>
                                <th scope="col">Status</th>
                                <th scope="col">Delete</th>
                                <th scope="col">Update</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                EMPList.length > 0 ? EMPList.map((item, index) =>
                                    <tr>
                                        <th scope="row">{item.EmpCode}</th>
                                        <td>{item.FirstName + " " + item.LastName}</td>
                                        <td>{item.MobileNo}</td>
                                        <td>{item.Pan_Adhar}</td>
                                        <td>{item.Status}</td>
                                        <td>
                                            <button type="button" className="btn btn-square btn-secondary" onClick={() => DeleteEMP(item.EmpCode)}>
                                                <i className="icon-trash "></i>
                                            </button>
                                        </td>
                                        <td>
                                            <button type="button" className="btn  btn-dark">
                                                <i className="icon-note "></i>
                                            </button>

                                        </td>
                                    </tr>
                                )
                                    : <h1>No Result Found</h1>
                            }


                        </tbody>
                    </table>
                </div>
            </div>


            <Footer />
        </div>


    )



}