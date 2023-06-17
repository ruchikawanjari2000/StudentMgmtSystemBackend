const Joi = require('joi')

const validator = (schema) => (payload) => schema.validate(payload,{abortEarly:false})

const validateSchema = Joi.object({
  firstName: Joi.string().alphanum().min(3).max(30).required(),
  lastName: Joi.string().required(), 
  email:Joi.string().required(),
  phone:Joi.number().integer().required(),
  enquiry_id:Joi.number().integer().required(),
  course_id:Joi.number().integer().required(),
  trainer_id:Joi.number().integer().required(),
  password:Joi.string().required()
});


exports.validateSchema = validator(validateSchema)