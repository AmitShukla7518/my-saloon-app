import Header from "../Header";
import Footer from '../footer';
import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'

export default function Manage_Invo() {
    const navigate = useNavigate();
    const [InvoList, SetInvoList] = useState([]);
    useEffect(() => {
        GetInvo()
    }, []);

    const GetInvo = async () => {
        let result = await fetch('http://localhost:5000/GetInovenory');
        result = await result.json();
        SetInvoList(result)
        console.warn(InvoList);
    }
    return (
        <div>
            <Header />
            <h1 />
            <div className="row">
                <div className="col-xl-3 col-sm-6 mb-4">
                    <div className="card card-shadow">
                        <div className="card-body ">
                            <i className="fa fa-briefcase text-primary f30"></i>
                            <h6 className="mb-0 mt-3">Total Servises</h6>
                            <p className="f12 mb-0">
                                <b></b>
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
                                <b></b>
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
                                <th>Itam Code</th>
                                <th>Image </th>
                                <th>Itam Name</th>
                                <th>Brand</th>
                                <th>Ideal</th>
                                <th>category</th>
                                <th>StockStatus</th>
                                <th>ExpiryDate</th>
                                <th>Oprations</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                InvoList.length > 0 ? InvoList.map((item, index) =>
                                    <tr>
                                        <th scope="row">{item.InvoID}</th>
                                        <td><h1 data-toggle="tooltip" data-popup="tooltip-custom"
                                            data-original-title="Josh Hazlewood"
                                            class="pull-up list_membler">
                                            <img class="media-object rounded-circle selfImage"
                                                src={`http://localhost:5000/Uploads/Invo/${item.Inovo_file}`} alt="" />
                                        </h1></td>
                                        <td>{item.ItemName}</td>
                                        <td>{item.Brand}</td>
                                        <td>{item.IdealFor}</td>
                                        <td>{item.category}</td>
                                        <td>{item.StockStatus}</td>
                                        <td>{item.ExpiryDate}</td>
                                          <td>
                                            <button type="button" className="btn btn-square btn-secondary" >
                                                <i className="icon-trash "></i>
                                            </button>


                                            <button type="button" className="btn  btn-dark" onClick={() => navigate("/UpdateServises/" + item.SCode)}>
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