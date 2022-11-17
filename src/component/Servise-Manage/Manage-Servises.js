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


    const [ServiceList, SetServiceList] = useState([]);
    let [AllServises, SetAllServises] = useState("NA");




    useEffect(() => {
        GetServises()
    }, []);

    const GetServises = async () => {
        let result = await fetch('http://localhost:5000/GetServises');
        result = await result.json();
        SetServiceList(result);
        SetAllServises(result.length);



    }



    return (
        <div>
            <Header />

            <div className="row">
                <div className="col-xl-3 col-sm-6 mb-4">
                    <div className="card card-shadow">
                        <div className="card-body ">
                            <i className="fa fa-briefcase text-primary f30"></i>
                            <h6 className="mb-0 mt-3">Total Servises</h6>
                            <p className="f12 mb-0">
                                <b>10 Servises</b>
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
                                <input type="number" className="Input1" placeholder="% " onChange={(e) => console.log(e.target.value)}></input>
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
                            </tr>
                        </thead>
                        <tbody>

                        {
                                ServiceList.length > 0 ? ServiceList.map((item, index) =>
                                    <tr>
                                        <th scope="row">{item.SCode}</th>
                                        
                                        <td>{item.Sname}</td>
                                        <td>{item.Active}</td>
                                        <td>{item.Price}</td>
                                        
                                        
                                        <td>
                                            <button type="button" className="btn btn-square btn-secondary" onClick={() => DeleteEMP()}>
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

        </div>
    )
}