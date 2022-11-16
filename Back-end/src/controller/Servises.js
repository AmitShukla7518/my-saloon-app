const express = require('express');
const con = require('../conn/conn');
const Validation = require("../Validation/Validation");

const Add_Servise = (req, res, next)=> {
let Data  = req.body;
return res.send({Data :Data})

}



const otpGenerator = require('otp-generator');
const { OTP_LENGTH, OTP_CONFIG } = require('../constants/constants');
module.exports.generateOTP = () => {
  const OTP = otpGenerator.generate(OTP_LENGTH, OTP_CONFIG);
  return OTP;
};

module.exports ={
    Add_Servise
}