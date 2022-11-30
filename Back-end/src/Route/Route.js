const express = require('express');
const app = express();
const router = express.Router();
var bodyParser = require('body-parser');
//const { hello } = require('../controller/SignUP');

const controller = require("../controller/SignUP.js")
const StaffController = require("../controller/Staff")
const Middilware = require("../Middilware/login")
const ManageServises = require("../controller/Servises")
const ManageStores = require("../controller/Store")
const ManageInnoventry = require("../controller/Inoventry")


app.use(bodyParser.json());
router.post('/SignUP', controller.SignUP);
router.post('/Login', Middilware.Login);
// Staff Routes

router.post('/AddStaff', StaffController.AddStaff)
router.get('/GetEmpList', StaffController.GetEmpList)
router.delete("/DeleteEMP/:EmpCode", StaffController.DeleteEMP);
router.get("/search/:key", StaffController.SearchEMP);

// Servises
router.post("/AddServises", ManageServises.UploadImg,ManageServises.Add_Servise)
router.get("/GetServises", ManageServises.GetServises)
router.get("/GetServisesByID/:SCode",ManageServises.GetServisesByID)
router.delete("/DeleteService/:SCode", ManageServises.DeleteServices)
router.put("/UpdateServices/:SCode",ManageServises.UpdateServices)

// Stores 
router.post("/AddStore",ManageStores.UploadImg,ManageStores.Add_Store)
router.get("/GetAllStore",Middilware.VarifyToken,ManageStores.GetAllStore)
router.get("/GetAllStoreByID/:StoreCode",Middilware.VarifyToken,ManageStores.GetStoreByID)
router.put("/UpdateStore/:StoreCode",Middilware.VarifyToken,ManageStores.UpdateStore)
router.delete("/DeleteStore/:StoreCode",Middilware.VarifyToken, ManageStores.DeleteStore)

// Inoventry
router.post("/AddInnoventry",ManageInnoventry.UploadImg,ManageInnoventry.Add_Inovo)
router.get("/GetInovenory",ManageInnoventry.Get_Inovo)

module.exports = router;