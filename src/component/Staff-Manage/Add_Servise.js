

import Header from "../Header";
import Footer from '../footer';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


export default function Add_servise() {
    const [EMPList, setEMPList] = useState([]);
    let [AllEMP, setALLEMP] = useState("NA");

    console.warn(EMPList);
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

    const searchHandle = async (event) => {
        let key = event.target.value;
        if (key) {
            let result = await fetch(`http://localhost:5000/search/${key}`);
            result = await result.json();
            if (result) {
                setEMPList(result);
            }
        } else {
            EMPList();
        }

    };

    return (
        <div>
            <Header />
            <div className="row">
                <div className="col-lg-3 col-md-6 mb-4">
                    <div className="card border-0 text-light card-shadow">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-12">
                                    <div className="homepage_single">

                                        <span className="bg-info text-center wb-icon-box bg_shedo_light"> <i
                                            className="fa fa-dollar f24" aria-hidden="true"></i> </span>
                                        <div className="homepage_fl_right">
                                            <h4 className="mt-0">Total Record</h4>
                                            <h3><span className="counter" data-count="2456">{AllEMP}</span></h3>
                                        </div>
                                        <p>
                                            Total items sold <span className="fl_right text-success">GOOD <i
                                                className="fa fa-long-arrow-up"
                                                aria-hidden="true"></i></span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 mb-4">
                    <div className="card border-0 text-light card-shadow">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-12">
                                    <div className="homepage_single">

                                        <span
                                            className="bg-success text-center wb-icon-box bg_shedo_light_green"><i
                                                className="fa fa-group f24" aria-hidden="true"></i></span>
                                        <div className="homepage_fl_right">
                                            <h4 className="mt-0">Total Booking</h4>
                                            <h3><span className="counter" data-count="1562">0</span></h3>
                                        </div>
                                        <p>
                                            Visitors <span className="fl_right text-danger">Normal <i
                                                className="fa fa-long-arrow-down"
                                                aria-hidden="true"></i></span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 mb-4">
                    <div className="card border-0 text-light card-shadow">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-12">
                                    <div className="homepage_single">

                                        <span
                                            className="bg-danger text-center wb-icon-box bg_shedo_light_red"><i
                                                className="fa fa-envelope f24" aria-hidden="true"></i></span>
                                        <div className="homepage_fl_right">
                                            <h4 className="mt-0">Messages</h4>
                                            <h3><span className="counter" data-count="1245">0</span></h3>
                                        </div>
                                        <p>
                                            Last month <span className="fl_right text-danger">Normal <i
                                                className="fa fa-long-arrow-down"
                                                aria-hidden="true"></i></span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 mb-4">
                    <div className="card border-0 text-light card-shadow">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-12">
                                    <div className="homepage_single">

                                        <span
                                            className="bg-warning text-center wb-icon-box bg_shedo_light_yellow"><i
                                                className="fa fa-heart f24" aria-hidden="true"></i></span>
                                        <div className="homepage_fl_right">
                                            <h4 className="mt-0">Completed Booking</h4>
                                            <h3>+ <span className="counter" data-count="4245">0</span> K </h3>
                                        </div>
                                        <p>
                                            Update now <span className="fl_right text-success">Update <i
                                                className="fa fa-refresh" aria-hidden="true"></i></span>
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

                        <div className="input-group">
                            <div className="form-outline">
                                <input type="search" id="form1" className="form-control" onChange={searchHandle} placeholder="Search..." />

                            </div>

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
                                        <td>{item.EMPStatus}</td>
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