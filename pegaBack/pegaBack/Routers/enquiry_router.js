const express = require('express')
const router = express.Router();
const enquiryController=require('../Controllers/enquiry_controller');
const authValidation = require("../helpers/auth")

router.get("/get",authValidation,enquiryController.getenquiry);

router.post('/post',authValidation,enquiryController.addenquiry);

router.delete("/delete/:id",authValidation,enquiryController.deleteenquiry);

router.put("/update/:id",authValidation,enquiryController.updateenquiry)

module.exports=router;
