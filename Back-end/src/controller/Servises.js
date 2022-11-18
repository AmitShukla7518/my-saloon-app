const express = require('express');
const con = require('../conn/conn');
const Validation = require("../Validation/Validation");
var multer = require('multer');


var Image = "fdsgdsg";







const Upload = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, "Uploads")
        },
        filename: function (req, file, cb) {

            cb(null, file.fieldname + Date.now() + ".jpg")
            Image = file.fieldname + "" + Date.now() + ".jpg"


        }
    })


}).single("user_file")


//

//

const Add_Servise = (req, res, next) => {
    let Data = req.body;
   
    Data = [
        Data.Service, Data.Description, Data.Price, Data.Duration, Image, Data.Suggestion
    ]
    console.log(Data);
    let SQLQuery = "INSERT INTO tbl_Servises (Service,Description,Price,Duration,Image,Suggestion) values(?,?,?,?,?,?)"
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
    GetServises,
    Upload
}