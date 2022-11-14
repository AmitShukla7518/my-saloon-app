const express = require('express');
const con = require('../conn/conn');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const token = "SPASaloon"
const AddStaff = async (req, res, next) => {
    let value = req.body.Password;
    const salt = await bcrypt.genSalt(10);
    value = await bcrypt.hash(value, salt);
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
        Password: value,
    }
    Data = [
        Data.FirstName, Data.LastName, Data.Gender, Data.DOB, Data.BooldGRP, Data.MobileNo, Data.Pan_Adhar, Data.Address, Data.Email, Data.Password
    ]
    console.log(Data);
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


    })



}


module.exports = {
    AddStaff,
    GetEmpList,
    DeleteEMP
}