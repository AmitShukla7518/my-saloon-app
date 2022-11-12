const express = require('express');
const app = express();
const router = express.Router();
var bodyParser = require('body-parser');
//const { hello } = require('../controller/SignUP');
const controller  = require("../controller/SignUP.js")
const StaffController = require("../controller/Staff")
const Middilware = require("../Middilware/login")

app.use(bodyParser.json());


router.post('/SignUP', controller.SignUP)
router.post('/Login', Middilware.Login)

// Staff Routes 

router.get('/AddStaff', StaffController.AddStaff)



module.exports = router;