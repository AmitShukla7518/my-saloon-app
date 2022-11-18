import React, { useState } from "react";
import { useNavigate, Link } from 'react-router-dom'
// const navigate = useNavigate();
import "../Staff-Manage/Add_Staff.css"
import Header from "../Header";
import Footer from '../footer';
import RYTCOntent from '../RYTContent';
import validator from 'validator'


export function Add_Servise() {
    let [Service, SetService] = useState(" ")
    let [ServiceErr, SetServiceErr] = useState(false)
    let [Description, SetDescription] = useState(" ")
    let [DescriptionErr, SetDescriptionErr] = useState(false)
    let [Price, setPrice] = useState(" ")
    let [PriceErr, setPriceErr] = useState(false)
    let [Duration, setDuration] = useState(" ")
    let [DurationError, setDurationErr] = useState(false)
    let [Image, setImage] = useState(" ")
    let [ImageError, setImageErr] = useState(false)
    let [suggestion, setsuggestion] = useState(" ")
    let [suggestionErr, setsuggestionErr] = useState(false)

    function ServiceHAndler(e) {
        let Data = e.target.value;
        if (Data.length < 3) {
            SetServiceErr(true)
        }
        else {
            SetServiceErr(false)
        }
        SetService(Data)
    }
    function DescriptionHandler(e) {
        let Data = e.target.value;
        if (Data.length < 3) {
            SetDescriptionErr(true)
        }
        else {
            SetDescriptionErr(false)
        }

        setDuration(Data)
    }


    function PriceHandler(e) {
        let Data = e.target.value;
        if (Data == 0) {
            setPriceErr(true)

        } else {
            setPriceErr(false)
        }
        setPrice(Data)
    }
    function DurationHandler(e) {
        let Data = e.target.value;
        if (Data == 0) {
            setDurationErr(true)
        } else {
            setDurationErr(false)
        }
        setDuration(Data)
    }

    function ImageHandler(e) {
        const image = e.target.files[0];
        if (!image) {
            console.log('image is required');

        }
        if (!image.name.match(/\.(jpg|jpeg|png|gif)$/)) {

            setImageErr(true)
        } else {
            setImageErr(false)
        }
        setImage(image)


    }
    function SuggestionHandler(e){
let Data  = e.target.value;
if (Data.length < 3) {
    setsuggestionErr(true)
}
else {
    setsuggestionErr(false)
}

setDuration(Data)
    }

    async function CollectData() {
        console.warn(Service, Price, Duration, Description,, Image);
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
        <div>
            <Header />
            <section className="h-100 bg-dark">
                <div className="card card-shadow mb-4">
                    <div className="card-header">
                        <div className="card-title">
                            Add Staff
                        </div>
                    </div>
                    <div className="card-body">
                        <form className="container-fluid" id="needs-validation" novalidate>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label className="form-label" htmlFor="form3Example1m"> <b>Service Name</b></label>
                                    <input type="text" id="form3Example1m" className="form-control form-control-lg" onChange={ServiceHAndler} />
                                    {ServiceErr ? <span style={{ color: 'red' }}>Please Enter Valid Service Name</span> : ""}
                                </div>
                                <div className="col-md-6 mb-3">
                                    <div className="form-outline">
                                        <label className="form-label" htmlFor="form3Example1n"><b>Description</b> </label>
                                        <textarea className="form-control" id="form4Example3" rows="4" onChange={DescriptionHandler}></textarea>
                                        {DescriptionErr ? <span style={{ color: 'red' }}>Please Enter Valid Service Name</span> : ""}
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label className="form-label" htmlFor="form3Example1m"> <b>Price</b></label>
                                    <input type="text" id="form3Example1m" className="form-control form-control-lg" onChange={PriceHandler} />
                                    {PriceErr ? <span style={{ color: 'red' }}>Please Enter Valid Ammount</span> : ""}
                                </div>
                                <div className="col-md-6 mb-3">
                                    <div className="form-outline">
                                        <label className="form-label" htmlFor="form3Example1n"><b>Duration</b></label>
                                        <input type="text" className="form-control" id="form4Example3" rows="4" onChange={DurationHandler} />
                                        {DurationError ? <span style={{ color: 'red' }}>Please Enter Valid Duration</span> : ""}
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <label className="custom-file1">

                                    <input type="file" id="file2" className="custom-file-input" onChange={ImageHandler} />
                                    <span className="custom-file-control"></span> </label>
                                {ImageError ? <span style={{ color: 'red' }}>Please Upload Valid Image Format</span> : ""}

                                <div className="col-md-6 mb-3">
                                    <div className="form-outline">
                                        <label className="form-label" htmlFor="form3Example1n"><b>Suggestion</b></label>
                                        <input type="text" className="form-control" id="form4Example3"  onChange={SuggestionHandler} />
                                        {suggestionErr ? <span style={{ color: 'red' }}>Please Enter Valid Suggestion</span> : ""}
                                    </div>
                                </div>
                            </div>
                            <button type="button" className="btn btn-primary" onClick={CollectData}>Button</button>
                        </form>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}