const express = require('express')
const bodyParser = require('body-parser');
const conn = require('../src/conn/conn')
const router = require("./Route/Route");
var multer = require('multer');


const port = 5000;
const cores = require('cors');
const app = express()
app.use(express.json());
app.use(cores())
// app.use(bodyParser()) 

app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json({
    type: ["application/x-www-form-urlencoded","application/json"],
}));


var allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    next();
}
app.use(allowCrossDomain);


app.use('/', router);
app.listen(port, () => console.log(` !! Example app listening on port ${port}!!`));




