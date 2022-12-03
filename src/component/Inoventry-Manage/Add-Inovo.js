
import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'
import Header from "../Header";
import Footer from '../footer';
import "./Ino.css"
export default function AddInovo() {

    let [ItemName, setItemName] = useState(" ")
    let [Discription, setDiscription] = useState(" ")
    let [Brand, setBrand] = useState(" ")
    let [IdealFor, setIdealFor] = useState(" ")
    let [category, setcategory] = useState(" ")
    let [Quantity, setQuantity] = useState(" ")
    let [ExpiryDate, setExpiryDate] = useState(" ")
    let [Inovo_file, setInovo_file] = useState(" ")
    let [ImageError, setImageErr] = useState(false);

    function ItemNameHandler(e) {
        let Data = e.target.value
        setItemName(Data)
    }
    function BrandHandler(e) {
        let Data = e.target.value;
        setBrand(Data)
    }
    function IdialHandler(e) {
        let Data = e.target.value;
        setIdealFor(Data)
    }
    function DiscriptionHandler(e) {
        let Data = e.target.value;
        setDiscription(Data)
    }
    function categoryHandler(e) {
        let Data = e.target.value;
        setcategory(Data)
    }
    function QuantityHandler(e) {
        let Data = e.target.value;
        setQuantity(Data)
    }
    function ExpiryDateHandler(e) {
        let Data = e.target.value;
        setExpiryDate(Data)
    }
    function ImageHandler(e) {
        const image = e.target.files[0];
        if (!image) {
            console.log('image is required');
        }
        if (!image.name.match(/\.(jpg|jpeg|png|gif)$/)) {
            setImageErr(true)
        } else {

            setInovo_file(image)
            setImageErr(false)
        }

    }

    async function CollectData() {
        //  console.warn(ItemName + " " + Discription + " " + Brand + " " + IdealFor + " " + category + " " + Quantity + " " + ExpiryDate+ " "+Inovo_file);

        const Body = new FormData();
        Body.append('ItemName', ItemName)
        Body.append('Discription', Discription)
        Body.append('Brand', Brand)
        Body.append('IdealFor', IdealFor)
        Body.append('category', category)
        Body.append('Quantity', Quantity)
        Body.append('ExpiryDate', ExpiryDate)
        Body.append('Inovo_file', Inovo_file)
        console.log("BodyBody:" + Body);

        let result = await fetch("http://localhost:5000/AddInnoventry", {
            method: 'post',
            body: Body,
            headers: {
                authorization: JSON.parse(localStorage.getItem("Admin_Token"))
            }
        });
        result = (await result).json();
        if (result) {
            navigate("/Manage-Store")
        }


    }



    return (
        <div class="wrapper">
            <Header />
            <div className="card card-shadow mb-4">
                <div className="card-header">
                    <div className="card-title">
                        <b>Add Inoventry</b>
                    </div>
                </div>
                <form className="container-fluid" id="needs-validation" novalidate>
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label htmlFor="validationCustom03"> <b>Item Name</b></label>
                            <input type="text" className="form-control" placeholder="Enter Item"
                                onChange={ItemNameHandler} required />

                        </div>
                        <div className="col-md-3 mb-3">
                            <label htmlFor="validationCustom04"><b>Brand</b></label>
                            <input type="text" className="form-control" placeholder="Brand"

                                onChange={BrandHandler} required />
                        </div>
                        <div className="col-md-3 mb-3">
                            <label htmlFor="validationCustom05"><b>IdealFor</b></label>
                            <input type="text" className="form-control" placeholder="ex-Male/Female"
                                onChange={IdialHandler} required />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label htmlFor="validationCustom03"><b>Discription</b></label>
                            <input type="text" className="form-control" placeholder="Discription"
                                onChange={DiscriptionHandler} required />
                        </div>
                        <div className="col-md-3 mb-3">
                            <label htmlFor="validationCustom05"><b>category</b></label>
                            <div class="dropdown mb-4">
                                <select class="btn btn-outline-secondary dropdown-toggle OurSelect" onChange={categoryHandler}>
                                    <option >select category</option>
                                    <option value="Retails Product">Retails Product </option>
                                    <option value="Cleaning Product">Cleaning Product</option>
                                    <option value="Hair Product">Hair Product</option>
                                    <option value="Beauty Product">Beauty Product</option>
                                    <option value="Massage Product">Massage Product</option>
                                </select>

                            </div>


                        </div>
                        <div className="col-md-3 mb-3">
                            <label htmlFor="validationCustom05"><b>Quantity</b></label>
                            <input type="text" className="form-control" placeholder="Quantity"
                                onChange={QuantityHandler} required />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3 mb-3">
                            <label htmlFor="validationCustom05"><b>ExpiryDate</b></label>
                            <input type="text" className="form-control" placeholder="ExpiryDate"
                                onChange={ExpiryDateHandler} required />
                        </div>
                        <div className="col-md-3 mb-3">
                            <label htmlFor="validationCustom05"><b>Image</b></label>
                            <label className="custom-file">
                                <input type="file" id="file2" class="custom-file-input" onChange={ImageHandler} />
                                <span className="custom-file-control"></span> </label>
                            {ImageError ? <span style={{ color: 'red' }}>Please Upload Valid Image Format</span> : ""}

                        </div>
                        <div className="col-md-3 mb-3">
                            <label htmlFor="validationCustom05"><b>readOnly</b></label>
                            <input type="text" className="form-control" placeholder="Zip" required value="Not Editable" readOnly />

                        </div>
                        <div className="col-md-3 mb-3">
                            <label htmlFor="validationCustom05"><b>readOnly</b></label>
                            <input type="text" className="form-control" placeholder="Zip" required value="Not Editable" readOnly />

                        </div>
                    </div>
                    <button className="btn btn-primary buttom" type="button" onClick={CollectData}>
                        <b>Save</b>
                    </button>
                </form>
            </div>
            <Footer />
        </div>
    )
}