const express = require('express')
const router = express.Router();
const student_feesController=require('../Controllers/student_fees_controller');
const authValidation = require("../helpers/auth")

router.get("/get",authValidation,student_feesController.getstudent_fees);

router.post('/post',authValidation,student_feesController.addstudent_fees);

router.delete("/delete/:id",authValidation,student_feesController.deletestudent_fees);

router.put("/update/:id",authValidation,student_feesController.updatestudent_fees)

module.exports=router;
