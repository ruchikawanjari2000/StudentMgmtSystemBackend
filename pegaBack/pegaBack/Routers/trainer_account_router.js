const express = require('express')
const router = express.Router();
const trainer_accountController=require('../Controllers/trainer_account_controller');
const authValidation = require("../helpers/auth")

router.get("/get",authValidation,trainer_accountController.gettrainer_account);

router.post('/post',authValidation,trainer_accountController.addtrainer_account);

router.delete("/delete/:id",authValidation,trainer_accountController.deletetrainer_account);

router.put("/update/:id",authValidation,trainer_accountController.updatetrainer_account)

module.exports=router;
