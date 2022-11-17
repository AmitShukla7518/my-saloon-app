const express = require('express');
const con = require("../conn/conn")
const app = express();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const jwttoken = "SPASaloon"
const Login = async (req, res, next) => {
    let { Email, Password } = req.body
    var sql = 'SELECT * FROM tbl_AddStaff WHERE Email = ?';
    let EmailData = con.query(sql, Email, async function (err, result) {
        if (err) throw err;
        if (result == 0) {
            res.send({
                message: "Please enter a valid email"
            })
        } else {
            const hashedPassword = result[0].Password
            console.log(hashedPassword);
            if (await bcrypt.compare(Password, hashedPassword)) {
                console.log("---------Login Successful--------")
                jwt.sign({ result }, jwttoken, { expiresIn: '3600s' }, function (err, token) {
                    console.log(result);
                    for (var a = 0; a < result.length; a++) {
                        res.send({ Name: result[a].FirstName, UserType: result[a].UserType, ActiveStatus: result[a].ActiveStatus, auth: token });
                        console.log(result[a].FirstName);
                        console.log(result[a].ActiveStatus);
                        console.log(result[a].UserType);
                    }
                });
            }
            else {
                console.log(" Password Incorrect");
                res.send({ message: "Password Incorrect" });
            }
        }
    })
}
const VarifyToken = async (req, res, next) => {
    try {
        let Token = req.headers["x-auth-token"]

        let DecodeToken = await jwt.verify(Token, jwttoken, { expiresIn: '3600s' })
        if (!DecodeToken) {
            return res.status(400).send({ status: false, msg: "Token is Invalid" })
        }
        else {
            console.log("Token  Varifyed Successfully ");
        }
        next()
    }

    catch (err) {
        res.status(400).send({ status: false, Error: err.message })
        console.log(err);
    }

}
module.exports = {
    Login,
    VarifyToken
} 