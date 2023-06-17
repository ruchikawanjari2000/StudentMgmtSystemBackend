const Joi = require('joi')

const validator = (schema) => (payload) => schema.validate(payload,{abortEarly:false})

const validateSchema = Joi.object({
  amount: Joi.number().required(), 
  salary: Joi.number().required(), 
  balance:Joi.number().required(),
  trainer_id:Joi.number().integer().required()

});


exports.validateSchema = validator(validateSchema)