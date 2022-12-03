import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'
// const navigate = useNavigate();
import "../Staff-Manage/Add_Staff.css"
import Header from "../Header";
import Footer from '../footer';
import RYTCOntent from '../RYTContent';
import validator from 'validator'
import "./Manage.css"







export default function PandingBooking() {
    const navigate = useNavigate();

    const [ServiceList, SetServiceList] = useState([]);
    let [AllServises, SetAllServises] = useState("NA");
    let [ALlDiscount, SetALlDiscount] = useState("NA")
    let [SID, SetSID] = useState()
    let [TotalBookings, SetTotalBookings] = useState(" ")


    useEffect(() => {
        GetServises()
    }, []);

    const GetServises = async () => {
        let result = await fetch('http://localhost:5000/PandingBooking', {
            headers: {
                authorization: JSON.parse(localStorage.getItem("Admin_Token"))
            }
        });
        result = await result.json();

        SetServiceList(result);
        SetTotalBookings(result.length);

    }

    const DeleteServices = async (SCode) => {
        let result = await fetch(`http://localhost:5000/DeleteService/${SCode}`, {
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
            {/* <h1 SID={SID} /> */}
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
                                <th scope="col"><b>OrderID</b></th>
                                <th scope="col"><b>Customer Name</b></th>
                                <th scope="col"><b>Service Name</b></th>
                                <th scope="col"><b>Phone No</b></th>
                                <th scope="col"><b>Date</b></th>
                                <th scope="col"><b>Service Type</b></th>
                                <th scope="col"><b>status</b></th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                ServiceList.length > 0 ? ServiceList.map((item, index) =>
                                    <tr>
                                        <th scope="row">{item.OrderID}</th>
                                        <td>{item.CustomerName}</td>
                                        <td>{item.ServiceName}</td>
                                        <td>{item.PhoneNo}</td>
                                        <td>{item.BookingDate}</td>
                                        <td>{item.ServiceType}</td>
                                        <td>{item.Status}</td>



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
            <Footer />
        </div>

    )
}