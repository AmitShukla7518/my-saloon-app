const express = require('express');
const app = express();
const router = express.Router();
var bodyParser = require('body-parser');
//const { hello } = require('../controller/SignUP');
const controller = require("../controller/SignUP.js")
const StaffController = require("../controller/Staff")
const Middilware = require("../Middilware/login")
const Add_Servise = require("../controller/Servises")
app.use(bodyParser.json());
router.post('/SignUP', controller.SignUP);
router.post('/Login', Middilware.Login);

// Staff Routes
router.post('/AddStaff', StaffController.AddStaff)
router.get('/GetEmpList', StaffController.GetEmpList)
router.delete("/DeleteEMP/:EmpCode", StaffController.DeleteEMP);
router.get("/search/:key", StaffController.SearchEMP)

// Servises
router.post("/AddServises", Add_Servise.Upload,Add_Servise.Add_Servise)
router.get("/GetServises", Add_Servise.GetServises)

module.exports = router;