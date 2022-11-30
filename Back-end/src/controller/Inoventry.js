const express = require('express');
const con = require('../conn/conn');
const Validation = require("../Validation/Validation");
var multer = require('multer');
var Image;
const UploadImg = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, "Uploads/Invo")
        },
        filename: function (req, file, cb) {

            cb(null, file.fieldname + Date.now() + ".jpg")
            Image = file.fieldname + "" + Date.now() + ".jpg"

}
    })
}).single("Inovo_file")





const Add_Inovo = (req, res, next) => {
    let Data = req.body;
    Data = [
        Data.ItemName, Data.Discription, Data.Brand, Data.IdealFor, Data.category, Data.ExpiryDate, Data.Quantity, Image
    ]
    console.log(Data);

    /* 
    ItemName varchar(200),
    Discription varchar(200),
    Brand varchar (100) default "NA",
    IdealFor varchar (50),
    category varchar (200),
    ExpiryDate varchar(100),
    Quantity varchar (50),
    Inovo_file varchar(100),
     */


    console.log(Data);
    let SQLQuery = "INSERT INTO tbl_Invo (ItemName,Discription,Brand,IdealFor,category,ExpiryDate,Quantity,Inovo_file) values(?,?,?,?,?,?,?,?)"
    con.query(SQLQuery, Data, function (err, result) {
        if (err) throw err;
        console.log(result);
        // return res.send("Data Successfully Store In Database");
        res.status(200).json({
Data:{
    File: `${req.protocol}://${req.get("host")}/${Image}`
}



        })

    });
}

let Get_Inovo = (req, res, next) => {
    let SQLQuery = "SELECT * FROM tbl_Invo"
    con.query(SQLQuery, function (err, result) {
        if (err) throw err;
        return res.send(result);
    });
}

module.exports = {
    Add_Inovo,
    UploadImg,
    Get_Inovo
}