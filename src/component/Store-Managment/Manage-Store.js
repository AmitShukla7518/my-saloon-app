
import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'
// const navigate = useNavigate();
import "../Staff-Manage/Add_Staff.css"
import Header from "../Header";
import Footer from '../footer';
import RYTCOntent from '../RYTContent';
import validator from 'validator'
import "./Store.css"

export default function Manage_Store() {
    const navigate = useNavigate();

    const [ServiceList, SetServiceList] = useState([]);
    let [AllServises, SetAllServises] = useState("NA");
    let [ALlDiscount, SetALlDiscount] = useState("NA")
    let [SID, SetSID] = useState()


    useEffect(() => {
        GetServises()
    }, []);

    const GetServises = async () => {
        let result = await fetch('http://localhost:5000/GetAllStore', {
            headers: {
                authorization: JSON.parse(localStorage.getItem("Admin_Token"))
            }
        });
        result = await result.json();
        SetServiceList(result);
        SetAllServises(result.length);


        


    }
    const DeleteServices = async (StoreCode) => {
        let result = await fetch(`http://localhost:5000/DeleteStore/${StoreCode}`, {
            method: "Delete",
            headers: {
                authorization: JSON.parse(localStorage.getItem("Admin_Token"))
            }
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
                            <h6 className="mb-0 mt-3">Total Store</h6>
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
                            <h6 className="mb-0 mt-3">Total </h6>
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
                                <th scope="col"><b>StoreCode</b></th>
                                <th scope="col"><b>StoreName</b></th>
                                <th scope="col"><b>ContectNO</b></th>
                                <th scope="col"><b>Active</b></th>
                                <th scope="col"><b>Timeing</b></th>

                            </tr>
                        </thead>
                        <tbody>

                            {
                                ServiceList.length > 0 ? ServiceList.map((item, index) =>
                                    <tr>
                                        <th scope="row">{item.StoreCode}</th>
                                        <td>{item.StoreName}</td>
                                        <td>{item.ContectNO}</td>
                                        <td>{item.Active}</td>
                                        <td>{item.Timeing}</td>
                                        <td>
                                            <button type="button" className="btn btn-square btn-secondary" onClick={() => DeleteServices(item.StoreCode)}>
                                                <i className="icon-trash "></i>
                                            </button>
                                        </td>
                                        <td>

                                            <button type="button" className="btn  btn-dark" onClick={() => navigate("/UpdateStore/" + item.StoreCode)}>
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
            <Footer />
        </div>
    )
}