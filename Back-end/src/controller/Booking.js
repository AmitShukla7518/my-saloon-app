const express = require('express');
const con = require('../conn/conn');
// const Validation = require("../Validation/Validation");

const AddBooking = async (req, res, next) => {
    try {
        let Data = [
            CustomerName = req.body.CustomerName,
            ServiceName = req.body.ServiceName,
            PhoneNo = req.body.PhoneNo,
            Email = req.body.Email,
            Address = req.body.Address,
            ServiceType = req.body.ServiceType,
            BookingDate = req.body.BookingDate,
            Price = req.body.Price,
        ]
        // console.log(Data);
        let Sqlquery = "insert into tbl_Booking (CustomerName,ServiceName,PhoneNo,Email,Address,ServiceType,BookingDate,Price) values(?,?,?,?,?,?,?,?)"
        con.query(Sqlquery, Data, (err, result) => {
            if (err) {
                return res.status(400).send(err)
            } else {
                return res.send(result)
            }
        })

    } catch (error) {
    }
}



const GetBookings = (req, res) => {
    let Data;

    let Sqlquery = "Select *from tbl_Booking"
    con.query(Sqlquery, (err, result) => {
        if (err) {
            return res.status(400).send(err);
        }
        else {
            res.send(result)
            //console.log(result);
            // for (var i = 0; i < result.length; i++) {
            //     Data = {
            //         CustomerName: result[i].CustomerName,
            //     }
            //    // console.log(Data.CustomerName);
            //     res.send({CustomerName:Data.CustomerName})
            // }
        }
    });
}
const PandingBooking = (req, res) => {


    let Sqlquery = 'select *from tbl_booking WHERE status ="Panding" '
    con.query(Sqlquery, (err, result) => {
        if (err) {
            return res.status(400).send(err);
        }
        else {
            return res.send(result)
        }
    })
}

const CancelledBooking = (req, res) => {


    let Sqlquery = 'select *from tbl_booking WHERE status ="Cancelled "'
    con.query(Sqlquery, (err, result) => {
        if (err) {
            return res.status(400).send(err);
        }
        else {
            return res.send(result)
        }
    })
}

const ComplitedBooking = (req, res) => {


    let Sqlquery = 'select *from tbl_booking WHERE status ="Completed"'
    con.query(Sqlquery, (err, result) => {
        if (err) {
            return res.status(400).send(err);
        }
        else {
            return res.send(result)
        }
    })
}

const SearchBooking = (req, res) => {

    let OrderID = {OrderID:req.params.key}
    let ServiceName = {ServiceName:req.params.key}
    let Status = {Status:req.params.key}

    // let Data  = [OrderID.OrderID,ServiceName.ServiceName,Status.Status]
    

    let Sqlquery = " SELECT * FROM tbl_Booking WHERE OrderID= "+OrderID.OrderID+" or ServiceName ="+ServiceName.ServiceName+" OR Status = "+Status.Status+" "
    con.query(Sqlquery, (err, result) => {
        if (err) throw err;
        res.send(result);
        console.log(result);
    })
}
module.exports = {
    AddBooking,
    GetBookings,
    PandingBooking,
    ComplitedBooking,
    CancelledBooking,
    SearchBooking
}