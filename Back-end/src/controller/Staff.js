const express = require('express');
const con = require('../conn/conn');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const token = "SPASaloon"
const Validation = require("../Validation/Validation");
// const { validate } = require('email-validator');

const AddStaff = async (req, res, next) => {

    let Data = {
        FirstName: req.body.FirstName,
        LastName: req.body.LastName,
        Gender: req.body.Gender,
        DOB: req.body.DOB,
        BooldGRP: req.body.BooldGRP,
        MobileNo: req.body.MobileNo,
        Pan_Adhar: req.body.Pan_Adhar,
        Address: req.body.Address,
        Email: req.body.Email,
        Password: req.body.Password,
    }
    if (!Validation.isValid(Data.FirstName)) {
        return res.status(400).send({ status: false, message: "Please provide First Name field 🛑" });
    }
    if (!Validation.isValid(Data.LastName)) {
        return res.status(400).send({ status: false, message: "Please provide Last Name field 🛑" });
    }
    if (!Validation.isValid(Data.Gender)) {
        return res.status(400).send({ status: false, message: "Please provide Gender  field 🛑" });
    }
    if (!Validation.isValid(Data.DOB)) {
        return res.status(400).send({ status: false, message: "Please provide DOB  field 🛑" });
    }

    if (!Validation.isValid(Data.BooldGRP)) {
        return res.status(400).send({ status: false, message: "Please provide Gender  field 🛑" });
    }
    if (!Validation.isValid(Data.MobileNo)) {
        return res.status(400).send({ status: false, message: "Please provide Mobile No.  field 🛑" });
    }
    if (!Validation.isValid(Data.Pan_Adhar)) {
        return res.status(400).send({ status: false, message: "Please provide Document   field 🛑" });
    }
    if (!Validation.isValid(Data.Address)) {
        return res.status(400).send({ status: false, message: "Please provide Address field 🛑" });
    }
    if (!Validation.isValid(Data.Email)) {
        return res.status(400).send({ status: false, message: "Please provide Email  field 🛑" });
    }
    if (!Validation.isValidEmail(Data.Email)) {
        return res.status(400).send({ status: false, message: "Please provide Valid Email 🛑" });
    }
    // Check Email is Already Exist in Database or Not
    let CheckEailDB = "SELECT * FROM tbl_AddStaff WHERE Email  =(?)"
    if (!con.query(CheckEailDB, Data.Email, function (err, result) {
        if (err) throw err;

    }) > 0) {
        return res.status(400).send({ status: false, message: "Please provide alternative Email " })
    }

    //

    //
    if (!Validation.isValid(Data.Password)) {
        return res.status(400).send({ status: false, message: "Please provide Password  field 🛑" });
    }
    let value = req.body.Password;
    const salt = await bcrypt.genSalt(10);
    value = await bcrypt.hash(value, salt);
    Data = [
        Data.FirstName, Data.LastName, Data.Gender, Data.DOB, Data.BooldGRP, Data.MobileNo, Data.Pan_Adhar, Data.Address, Data.Email, value
    ]
    var Sqlquery = "INSERT INTO tbl_AddStaff (FirstName,LastName,Gender,DOB,BooldGRP,MobileNo,Pan_Adhar,Address,Email,Password) VALUES (?,?,?,?,?,?,?,?,?,?)"
    con.query(Sqlquery, Data, function (err, result) {
        if (err) throw err;
        jwt.sign({ result }, token, { expiresIn: '3600s' }, function (err, token) {
            //  res.send("Token : " + token);
            res.send({ result, auth: token });
            console.log(result);
        });

    });

}
const GetEmpList = (req, res) => {
    let Sqlquery = "select *from tbl_AddStaff"
    con.query(Sqlquery, (err, result) => {
        if (err) throw err;
        res.send(result)
        // console.log(result);

    })
}
const DeleteEMP = (req, res) => {
    let EmpCode = req.params.EmpCode;

    let Sqlquery = "DELETE FROM tbl_AddStaff WHERE EmpCode = (?)";

    con.query(Sqlquery, EmpCode, (err, result) => {
        if (err) throw err;
        res.send(result);
        console.log(result);
    });
}
const SearchEMP = (req, res) => {

    let EMPID = req.params.key;
    let EMPName = req.params.key;
    let LastName = req.params.key;
    let EMPMobile = req.params.key;
    let Document = req.params.key;

    let Sqlquery = " SELECT * FROM tbl_AddStaff WHERE EmpCode= " + EMPID + " or FirstName = " + EMPName + " OR MobileNo = " + EMPMobile + " or Pan_Adhar =" + Document + " "
    con.query(Sqlquery, (err, result) => {
        if (err) throw err;
        res.send(result);
        console.log(result);
    })

}

module.exports = {
    AddStaff,
    GetEmpList,
    DeleteEMP,
    SearchEMP
}