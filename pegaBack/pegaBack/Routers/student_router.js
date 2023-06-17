const express = require('express')
const router = express.Router();
const studentController=require('../Controllers/student_controller');
const authValidation = require("../helpers/auth")

router.get("/get",authValidation,studentController.getstudent);

router.post('/post',authValidation,studentController.addstudent);

router.delete("/delete/:id",authValidation,studentController.deletestudent);

router.put("/update/:id",authValidation,studentController.updatestudent)

module.exports=router;
