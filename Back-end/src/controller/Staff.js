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
    // res.send(Data)


    var Sqlquery = "INSERT INTO tbl_AddStaff (FirstName,LastName,Gender,DOB,BooldGRP,MobileNo,Pan_Adhar,Address,Email,Password)=?"
    con.query(Sqlquery, Data, function (err, result) {
        if (err) throw err;
        jwt.sign({ result }, token, { expiresIn: '3600s' }, function (err, token) {
            //  res.send("Token : " + token);
            res.send({ result, auth: token });
            console.log(result);
        });

    });
}


module.exports = {
    AddStaff
}