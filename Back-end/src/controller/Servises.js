const express = require('express');
const con = require('../conn/conn');
const Validation = require("../Validation/Validation");
var multer = require('multer');
var Image;
const UploadImg = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, "Uploads/Servises/")
        },
        filename: function (req, file, cb) {

            cb(null, file.fieldname + Date.now() + ".jpg")
            Image = "Uploads/Servises/" + file.fieldname + "" + Date.now() + ".jpg"


        }
    })
}).single("Service_file")

// }).single("user_file")
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
        return res.send("Data Successfully Store In Database");
    });
}

const GetServises = (req, res) => {

    let Sqlquery = "select *from tbl_Servises"
    con.query(Sqlquery, (err, result) => {
        if (err) throw err;
        // for (var a = 0; a < result.length; a++) {
        //     console.log({ SCode:result[a].SCode});
        // }
        return res.send(result);
    })
}

const GetServisesByID = (req, res) => {
    let SCode = req.params.SCode;
    let Sqlquery = "select *from tbl_Servises where SCode = " + SCode + ""
    con.query(Sqlquery, (err, result) => {
        if (err) {
            res.status(500).send(err)
        }else{
        for (var a = 0; a < result.length; a++) {
            res.send({ SCode: result[a].SCode, Service: result[a].Service, Price: result[a].Price, Discount: result[a].Discount, Flat: result[a].Flat, Active: result[a].Active });
        }
    }
    });
}
const UpdateServices = (req, res) => {
    let SCode = req.params.SCode;
    let Data = req.body;
    Data = {
        Discount: req.body.Discount,
        Flat: req.body.Flat,
    }
    console.log(Data);
    let Sqlquery = "UPDATE tbl_Servises SET Discount = " + Data.Discount + ", flat = " + Data.Flat + " WHERE SCode = " + SCode + ""
    con.query(Sqlquery, (err, result) => {
        if (err) throw err;
        res.send(result);
        console.log(result);
        for (var a = 0; a < result.length; a++) {
            res.send({ SCode: result[a].SCode, Service: result[a].Service, Price: result[a].Price, Discount: result[a].Discount, Flat: result[a].Flat, Active: result[a].Active });
        }

    });

}
const DeleteServices = async (req, res, next) => {

    let SCode = req.params.SCode;
    let Sqlquery = "DELETE FROM tbl_Servises WHERE SCode = (?)";
    con.query(Sqlquery, SCode, (err, result) => {
        if (err) throw err;
        res.send(result);
        console.log(result);
    });
}

module.exports = {
    Add_Servise,
    GetServises,
    UploadImg,
    DeleteServices,
    UpdateServices,
    GetServisesByID
}