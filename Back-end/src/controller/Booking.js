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

    let Sqlquery = "Select *from tbl_Booking"
    con.query(Sqlquery, (err, result) => {
        if (err) {
            return res.status(400).send(err)
        }
        else {
            res.send(result)
            console.log(result);
            for (var i = 0; i < result.length; i++) {

            }
        }
    })
}


module.exports = {
    AddBooking,
    GetBookings
}