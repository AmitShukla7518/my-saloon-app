import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'
// const navigate = useNavigate();
import "../Staff-Manage/Add_Staff.css"
import Header from "../Header";
import Footer from '../footer';
import RYTCOntent from '../RYTContent';
import validator from 'validator'
import "./Manage.css"







export default function Manage_servises() {
    const navigate = useNavigate();

    const [ServiceList, SetServiceList] = useState([]);
    let [AllServises, SetAllServises] = useState("NA");
    let [ALlDiscount, SetALlDiscount] = useState("NA")
    let [SID, SetSID] = useState()
    console.warn("Thi dibabdsbj" + SID);

    useEffect(() => {
        GetServises()
    }, []);

    const GetServises = async () => {
        let result = await fetch('http://localhost:5000/GetServises');
        result = await result.json();
        let Laat = JSON.stringify(result)
        console.warn("Laat " + Laat);
        SetServiceList(result);
        SetAllServises(result.length);

    }
    const DeleteServices = async (SCode) => {
        let result = await fetch(`http://localhost:5000/DeleteService/${SCode}`, {
            method: "Delete"
        });
        result = await result.json();
        if (result) {
            GetServises()
        }
    }

    return (
        <div class="wrapper">

            <Header />

            <h1 SID={SID} />
            <div className="row">
                <div className="col-xl-3 col-sm-6 mb-4">
                    <div className="card card-shadow">
                        <div className="card-body ">
                            <i className="fa fa-briefcase text-primary f30"></i>
                            <h6 className="mb-0 mt-3">Total Servises</h6>
                            <p className="f12 mb-0">
                                <b>{AllServises}</b>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-sm-6 mb-4">
                    <div className="card card-shadow">
                        <div className="card-body ">
                            <i className="fa fa-american-sign-language-interpreting text-info f30"></i>
                            <h6 className="mb-0 mt-3">Add Discount</h6>
                            <p className="f12 mb-0">
                                <b>{AllServises}</b>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-sm-6 mb-4">
                    <div className="card card-shadow">
                        <div className="card-body ">
                            <i className=" fa fa-Briefcase on fa-ban text-danger f30"></i>
                            <h6 className="mb-0 mt-3">Total inactive Servises</h6>
                            <p className="f12 mb-0">
                                <b>5</b>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-sm-6 mb-4">
                    <div className="card card-shadow">
                        <div className="card-body ">
                            <i className=" icon-badge text-success f30"></i>
                            <h6 className="mb-0 mt-3">Monthly Profits</h6>
                            <p className="f12 mb-0">
                                $9887 This Month Profit <span className="float-right text-success"> <i className=" ti-arrow-circle-up"></i> </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card card-shadow mb-4">
                <div className="card-header">
                    <div className="card-title">
                        Manage Servises
                    </div>
                </div>
                <div className="card-body">
                    <table className="table table-hover table-dark">
                        <thead>
                            <tr>
                                <th scope="col"><b>SCode</b></th>
                                <th scope="col"><b>Service</b></th>
                                <th scope="col"><b>Status</b></th>
                                <th scope="col"><b>Price</b></th>
                                <th scope="col"><b>Discount</b></th>
                                <th scope="col"><b>Flat</b></th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                ServiceList.length > 0 ? ServiceList.map((item, index) =>
                                    <tr>
                                        <th scope="row">{item.SCode}</th>
                                        <td>{item.Service}</td>
                                        <td>{item.Active}</td>
                                        <td>{item.Price}</td>
                                        <td>{item.Discount}</td>
                                        <td>{item.Flat}</td>




                                        <td>
                                            <button type="button" className="btn btn-square btn-secondary" onClick={() => DeleteServices(item.SCode)}>
                                                <i className="icon-trash "></i>
                                            </button>
                                        </td>
                                        <td>

                                            <button type="button" className="btn  btn-dark" onClick={() => navigate("/UpdateServises/" + item.SCode)}>
                                                <i className="icon-note "></i>
                                            </button>
                                            {/* <button type="button" className="btn  btn-dark" onClick={() => UpdateServise(item.SCode)}>
                                                <i className="icon-note "></i>
                                            </button> */}
                                        </td>
                                    </tr>
                                )
                                    : <h1>No Result Found</h1>
                            }

                        </tbody>
                    </table>
                </div>
            </div>
<Footer/>
        </div>

    )
}