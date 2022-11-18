const express = require('express')
const bodyParser = require('body-parser');
const conn = require('../src/conn/conn')
const router = require("./Route/Route");
var multer = require('multer');

const port = 5000
const cores = require('cors');
const app = express()
app.use(express.json());
app.use(bodyParser.json());
app.use(cores())
app.use(bodyParser.urlencoded({ extended: true }));

var allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    next();
}
app.use(allowCrossDomain);
const Upload = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, "Uploads")
        },
        filename: function (req, file, cb) {
            var hello = file.fieldname
            cb(null, file.fieldname + " " + Date.now() + ".jpg")

        }
    })


}).single("user_file")


app.post("/upload", Upload, (req, resp) => {
    resp.send("file Uploaded successfully")
})


//

//app.get('/hello', (req, res) => res.send("Hello! I'm Demo "));
app.use('/', router);
app.listen(port, () => console.log(` !! Example app listening on port ${port}!!`));