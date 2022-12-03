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
const ManageBooking = require("../controller/Booking")


app.use(bodyParser.json());
router.post('/SignUP', controller.SignUP);
router.post('/Login', Middilware.Login);
// Staff Routes

router.post('/AddStaff',Middilware.VarifyToken, StaffController.AddStaff)
router.get('/GetEmpList', Middilware.VarifyToken,StaffController.GetEmpList)
router.delete("/DeleteEMP/:EmpCode", Middilware.VarifyToken,StaffController.DeleteEMP);
router.get("/search/:key",Middilware.VarifyToken, StaffController.SearchEMP);

// Servises
router.post("/AddServises",Middilware.VarifyToken, ManageServises.UploadImg,ManageServises.Add_Servise)
router.get("/GetServises", Middilware.VarifyToken,ManageServises.GetServises)
router.get("/GetServisesByID/:SCode",Middilware.VarifyToken,ManageServises.GetServisesByID)
router.delete("/DeleteService/:SCode",Middilware.VarifyToken,ManageServises.DeleteServices)
router.put("/UpdateServices/:SCode",Middilware.VarifyToken,ManageServises.UpdateServices);

// Stores
router.post("/AddStore",ManageStores.UploadImg,ManageStores.Add_Store)
router.get("/GetAllStore",Middilware.VarifyToken,ManageStores.GetAllStore)
router.get("/GetAllStoreByID/:StoreCode",Middilware.VarifyToken,Middilware.VarifyToken,ManageStores.GetStoreByID)
router.put("/UpdateStore/:StoreCode",Middilware.VarifyToken,Middilware.VarifyToken,ManageStores.UpdateStore)
router.delete("/DeleteStore/:StoreCode",Middilware.VarifyToken,Middilware.VarifyToken, ManageStores.DeleteStore)

// Inoventry
router.post("/AddInnoventry",Middilware.VarifyToken,ManageInnoventry.UploadImg,ManageInnoventry.Add_Inovo)
router.get("/GetInovenory",Middilware.VarifyToken,ManageInnoventry.Get_Inovo)




//Boking Managments
router.post("/AddBooking",ManageBooking.AddBooking)
router.get("/GetBooing",ManageBooking.GetBookings)
router.get("/PandingBooking",ManageBooking.PandingBooking)
router.get("/CancelledBooking",ManageBooking.CancelledBooking)
router.get("/ComplitedBooking",ManageBooking.ComplitedBooking)
router.get("/SearchBooking/:key",ManageBooking.SearchBooking)



module.exports = router;






