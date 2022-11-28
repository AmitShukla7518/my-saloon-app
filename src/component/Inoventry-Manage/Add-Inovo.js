import React, { useState } from "react";
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
    function ExpiryDateHandler(e){
        let Data = e.target.value;
        setExpiryDate(Data)
    }

    function CollectData() {
         console.warn(ItemName+" "+ Discription+" "+Brand +" "+ IdealFor+" "+category+" "+Quantity+" "+ExpiryDate);
        //  console.warn(category);

    }

    return (
        <div>
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
                            <input type="text" className="form-control" placeholder="State"

                                onChange={BrandHandler} required />
                        </div>
                        <div className="col-md-3 mb-3">
                            <label htmlFor="validationCustom05"><b>IdealFor</b></label>
                            <input type="text" className="form-control" placeholder="Zip"
                                onChange={IdialHandler} required />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label htmlFor="validationCustom03"><b>Discription</b></label>
                            <input type="text" className="form-control" placeholder="City"
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
                            <input type="text" className="form-control" placeholder="Zip"
                                onChange={QuantityHandler} required />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3 mb-3">
                            <label htmlFor="validationCustom05"><b>ExpiryDate</b></label>
                            <input type="text" className="form-control" placeholder="Zip"
                                onChange={ExpiryDateHandler} required />
                        </div>
                        <div className="col-md-3 mb-3">
                            <label htmlFor="validationCustom05"><b>readOnly</b></label>
                            <input type="text" className="form-control" placeholder="Zip" required value="Not Editable" readOnly />

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