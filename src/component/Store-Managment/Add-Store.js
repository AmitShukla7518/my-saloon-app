import React, { useState } from "react";
import validator from 'validator';
import { useNavigate, Link, json } from 'react-router-dom'
import "./Store.css"
import Header from "../Header";
import Footer from '../footer';
export function Add_Store() {
    let [StoreName, SetStore] = useState(" ")
    let [StoreErr, SetStoreErr] = useState(false)
    let [Description, SetDescription] = useState(" ")
    let [DescriptionErr, SetDescriptionErr] = useState(false)
    let [ContectNO, setContectNO] = useState(" ")
    let [ContectErr, setContectErr] = useState(false)
    let [Stores_file, setStores_file] = useState(" ")
    let [ImageError, setImageErr] = useState(false);
    let [Address, setAddress] = useState(" ")
    let [AddressErr, SetAddressErr] = useState(false)
    let [Timeing, setTimeing] = useState(" ")
    let [TimeingErr, SetTimeingErr] = useState(false)
    const navigate = useNavigate();

    function StoreHandler(e) {
        let Data = e.target.value;
        if (Data.length < 3) {
            SetStoreErr(true)
        }
        else {
            SetStoreErr(false)
        }

        SetStore(Data)
    }

    function MobileHAndler(e) {
        let Data = e.target.value;
        if (!validator.isMobilePhone(Data)) {
            setContectErr(true)
        }
        else {
            setContectErr(false)
        }
        setContectNO(Data)

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


    function ImageHandler(e) {
        const image = e.target.files[0];
        if (!image) {
            console.log('image is required');
        }
        if (!image.name.match(/\.(jpg|jpeg|png|gif)$/)) {
            setImageErr(true)
        } else {
            // let reader = new FileReader()
            // reader.readAsDataURL(e.target.files[0])
            setStores_file(image)
            setImageErr(false)
        }

    }

    function AddressHandler(e) {
        let Data = e.target.value;
        if (Data.length < 3) {
            SetAddressErr(true)
        }
        else {
            SetAddressErr(false)
        }

        setAddress(Data)
    }

    function TimeHandler(e) {
        let Data = e.target.value;
        if (Data.length < 3) {
            SetTimeingErr(true)
        }
        else {
            SetTimeingErr(false)
        }

        setTimeing(Data)
    }




    async function collectData() {
        // console.log(Stores_file);
        const Body = new FormData();
        Body.append('StoreName', StoreName)
        Body.append('Description', Description)
        Body.append('ContectNO', ContectNO)
        Body.append('Address', Address)
        Body.append('Stores_file', Stores_file)
        Body.append('Timeing', Timeing)
       
        let result = await fetch("http://localhost:5000/addStore", {
            method: 'post',
             body: Body
        });
        result = (await result).json();
        if (result) {
            navigate("/Manage-Store")
        }
    }

    return (

        <div>
            <Header />
            <section className="h-100 bg-dark">
                <div className="card card-shadow mb-4">
                    <div className="card-header">
                        <div className="card-title">
                            Add Store
                        </div>
                    </div>
                    <div className="card-body">
                        <form className="container-fluid" method="Post" encType="multipart/form-data" action="http://localhost:5000/addStore">
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label className="form-label" htmlFor="form3Example1m"> <b>Store Name</b></label>
                                    <input type="text" id="form3Example1m" className="form-control form-control-lg" onChange={StoreHandler} />
                                    {StoreErr ? <span style={{ color: 'red' }}>Please Enter Valid Service Name</span> : ""}
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
                                    <label className="form-label" htmlFor="form3Example1m"> <b>Address</b></label>
                                    <input type="text" id="form3Example1m" className="form-control form-control-lg" onChange={AddressHandler} />
                                    {AddressErr ? <span style={{ color: 'red' }}>Please Enter Valid Address</span> : ""}

                                </div>
                                <div className="col-md-6 mb-3">
                                    <div className="form-outline">
                                        <label className="form-label" htmlFor="form3Example1n"><b>Contect Number</b></label>
                                        <input type="number" className="form-control" id="form4Example3" rows="4" onChange={MobileHAndler} />
                                        {ContectErr ? <span style={{ color: 'red' }}>Please Enter Valid Contect Number</span> : ""}
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <label className="custom-file1">

                                    <input type="file" className="custom-file-input" onChange={ImageHandler} />
                                    <span className="custom-file-control">Upload Image....</span></label>
                                {ImageError ? <span style={{ color: 'red' }}>Please Upload Valid Image Format</span> : ""}

                                <div className="col-md-6 mb-3">
                                    <div className="form-outline">
                                        <label className="form-label" htmlFor="form3Example1n"><b>Timeing</b></label>
                                        <input type="text" className="form-control" id="form4Example3" onChange={TimeHandler} />
                                        {TimeingErr ? <span style={{ color: 'red' }}>Please Enter Valid Timeing</span> : ""}
                                    </div>
                                </div>
                            </div>
                            <button type="button" className="btn btn-primary" onClick={collectData}>Button</button>
                        </form>
                    </div>
                </div>
            </section>
            <Footer />
        </div>

    )
}