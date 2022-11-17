import React, { useState } from "react";
import { useNavigate, Link } from 'react-router-dom'
// const navigate = useNavigate();
import "../Staff-Manage/Add_Staff.css"
import Header from "../Header";
import Footer from '../footer';
import RYTCOntent from '../RYTContent';
import validator from 'validator'


export function Add_Servise() {
    let [Sname, SetService] = useState(" ")
    let [ServiceErr, SetServiceErr] = useState(false)
    let [Price, setPrice] = useState(" ")
    let [PriceErr, setPriceErr] = useState(" ")

    function PriceHandler(e) {
        let Data = e.target.value;
        if (Data == 0) {
            console.warn("Please enter gtreter than 3 characters");
        }
        else {
            console.warn("All is well!");
        }
        setPrice(Data)
    }
    function ServiceHandler(e) {
        let Data = e.target.value;
        if (Data.length < 3) {
            console.warn("Please enter gtreter than 3 characters");
        }
        else {
            console.warn("All is well!");
        }
        SetService(Data)
    }

    async function CollectData() {
        if (Sname.length == 0 || Price.length == 0) {
            alert(" Please Enter Correct  Fields");
        } else {

            let result = await fetch("http://localhost:5000/AddServises", {

                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'same-origin',
                body: JSON.stringify({ Sname, Price }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            result = await result.json();
            console.warn(result.result);
            alert(" Data saved");
        }

    }

    return (

        <section className="h-100 bg-dark">
            <Header />

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
                                                <label className="form-label" htmlFor="form3Example1m"> <b> Servise Name </b> </label>
                                                <input type="text" id="form3Example1m" className="form-control form-control-lg" onChange={ServiceHandler} />
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-4">
                                            <div className="form-outline">
                                                <label className="form-label" htmlFor="form3Example1n"> <b>Price</b> </label>
                                                <input type="Number" id="form3Example1n" className="form-control form-control-lg" onChange={PriceHandler} />

                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="d-flex justify-content-end pt-3">
                                            <button type="button" className="btn btn-warning btn-lg ms-2" onClick={CollectData} >Submit</button>
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