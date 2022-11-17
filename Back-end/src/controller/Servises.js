const express = require('express');
const con = require('../conn/conn');
const Validation = require("../Validation/Validation");

const Add_Servise = (req, res, next) => {
    let Data = req.body;
    let { Sname, Price } = Data
    Data = [

        Data.Sname, Data.Price
    ]

    let SQLQuery = "INSERT INTO tbl_Servises (Sname,Price) values(?,?)"
    con.query(SQLQuery, Data, function (err, result) {
        if (err) throw err;
        console.log(result);
    });
}


const GetServises = (req, res) => {

    let Sqlquery = "select *from tbl_Servises"
    con.query(Sqlquery, (err, result) => {
        if (err) throw err;
        console.log(result);


        return res.send(result)
    })
}











module.exports = {
    Add_Servise,
    GetServises
}