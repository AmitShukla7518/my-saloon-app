import React, { useState } from "react";
import { useNavigate, Link } from 'react-router-dom'
// 
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
    let [ImageError, setImageErr] = useState(false);
    let [Suggestion, setsuggestion] = useState(" ")
    let [suggestionErr, setsuggestionErr] = useState(false)
    const navigate = useNavigate();
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

        SetDescription(Data)
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
            let reader = new FileReader()
            reader.readAsDataURL(e.target.files[0])
            setImage(Image)
            setImageErr(false)
        }



    }
    function SuggestionHandler(e) {
        let Data = e.target.value;
        if (Data.length < 3) {
            setsuggestionErr(true)
        }
        else {
            setsuggestionErr(false)
        }

        setsuggestion(Data)
    }
    async function CollectData() {


        const Body = new FormData();

        Body.append('Service', Service)
        Body.append('Description', Description)
        Body.append('Price', Price)
        Body.append('Duration', Duration)
        Body.append('Image', Image)
        Body.append('Suggestion', Suggestion)

        let result = await fetch("http://localhost:5000/AddServises", {
            method: 'post',
            body: Body,
            headers: {
                authorization: JSON.parse(localStorage.getItem("Admin_Token"))
            }
        });
        result = (await result).json();
        console.warn(result);
        if (result) {
            // navigate("/Manage-services")
        }
    }
    return (
        <div>
            <Header />
            <section className="h-100 bg-dark">
                <div className="card card-shadow mb-4">
                    <div className="card-header">
                        <div className="card-title">
                            Add Servises
                        </div>
                    </div>
                    <div className="card-body">
                        <form className="container-fluid" id="needs-validation" >
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
                                        <input type="text" className="form-control" id="form4Example3" onChange={SuggestionHandler} />
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