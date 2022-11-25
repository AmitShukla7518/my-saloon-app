const express = require('express');
const con = require('../conn/conn');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const token = "SPASaloon"
const Validation = require("../Validation/Validation");
const multer = require('multer');
var Image;

const UploadImg = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, "Uploads/Stores/")
        },
        filename: function (req, file, cb) {
            cb(null, file.fieldname + Date.now() + ".jpg")
            Image = "Uploads/Stores/" + file.fieldname + "" + Date.now() + ".jpg"
        }
    })
}).single("Stores_file");

const Add_Store = (req, res, next) => {
    let Data = req.body;
    Data = [Data.StoreName, Data.Description, Data.ContectNO, Data.Address, Image, Data.Timeing]

    let SQLQuery = "insert into tbl_Store (StoreName,About,ContectNO,Address,Image) values (?,?,?,?,?)"
    con.query(SQLQuery, Data, function (err, result) {
        if (err) throw err;
        return res.send("Data Successfully Store In Database");
    });
}





const GetAllStore = (req, res, next) => {

    let Sqlquery = "select *from tbl_store"
    con.query(Sqlquery, (err, result) => {
        if (err) throw err;
        res.send(result)


    })

}


const GetStoreByID = (req, res) => {
    let StoreCode = req.params.StoreCode;
    let Sqlquery = "select *from tbl_store where StoreCode = " + StoreCode + ""
    con.query(Sqlquery, (err, result) => {
        if (err) throw err;
        console.log(result);
        for (var a = 0; a < result.length; a++) {
            res.send({ StoreCode: result[a].StoreCode, StoreName: result[a].StoreName, ContectNO: result[a].ContectNO, Timeing: result[a].Timeing, Active: result[a].Active });
        }
    });
}


const DeleteStore = (req, res) => {
    let StoreCode = req.params.StoreCode;


    let Sqlquery = "DELETE FROM tbl_store WHERE StoreCode = (?)";

    con.query(Sqlquery, StoreCode, (err, result) => {
        if (err) throw err;
        res.send(result);
        console.log(result);
    });
}


const UpdateStore = (req, res) => {
    let StoreCode = req.params.StoreCode;
    let Data = req.body;
    Data = [
        req.body.StoreName,
        req.body.ContectNO,
        req.body.Timeing,
        req.body.Active,

    ]

    console.log(Data);
    let Sqlquery = "UPDATE tbl_store SET StoreName =?,ContectNO =?,Timeing =?,Active =? WHERE StoreCode = " + StoreCode + ""

    //let Sqlquery = "UPDATE tbl_store SET ? WHERE UserID = ?"
    con.query(Sqlquery, Data, (err, result) => {
        if (err) throw err;
        res.send(result);
        console.log(result);
        for (var a = 0; a < result.length; a++) {
            res.send({ StoreCode: result[a].StoreCode, StoreName: result[a].StoreName, ContectNO: result[a].ContectNO, Timeing: result[a].Timeing, Active: result[a].Active });
        }

    });
}

module.exports = {
    Add_Store,
    UploadImg,
    GetAllStore,
    DeleteStore,
    UpdateStore,
    GetStoreByID
}
