const Joi = require('joi')

const validator = (schema) => (payload) => schema.validate(payload,{abortEarly:false})

const validateSchema = Joi.object({
  course_name: Joi.string().required(),
  course_des: Joi.string().required()

});


exports.validateSchema = validator(validateSchema)