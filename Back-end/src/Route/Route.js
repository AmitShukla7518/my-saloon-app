const express = require('express');
const app = express();
const router = express.Router();
var bodyParser = require('body-parser');
//const { hello } = require('../controller/SignUP');
const controller  = require("../controller/SignUP.js")
const StaffController = require("../controller/Staff")
const Middilware = require("../Middilware/login")
const Add_Servise  =require("../controller/Servises")
app.use(bodyParser.json());
router.post('/SignUP', controller.SignUP);
router.post('/Login', Middilware.Login);

// Staff Routes
router.post('/AddStaff',Middilware.VarifyToken, StaffController.AddStaff)
router.get('/GetEmpList',Middilware.VarifyToken, StaffController.GetEmpList)
router.delete("/DeleteEMP/:EmpCode",Middilware.VarifyToken,StaffController.DeleteEMP);
router.get("/search/:key",Middilware.VarifyToken,StaffController.SearchEMP)
// Servises

router.post("/AddServises", Add_Servise.Add_Servise)

module.exports = router;