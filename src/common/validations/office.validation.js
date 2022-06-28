const Joi = require('joi');

const officeSchema = Joi.object().keys({
	city: Joi.string().min(5).max(20).alphanum().default('city name'),
	phone: Joi.string()
		.length(10)
		.pattern(new RegExp('/^[0-9]+$/'))
		.default('0123456789'),
	addressLine1: Joi.string().min(10).default('address line 1'),
	addressLine2: Joi.string().min(10).default('address line 2'),
	state: Joi.string().min(2).default('state name'),
	country: Joi.string().min(2).default('country name'),
	postalCode: Joi.string()
		.pattern(new RegExp('^[0-9]{5}(?:-[0-9]{4})?$'))
		.default('12345'),
	territory: Joi.string().allow(null),
});

module.exports = officeSchema;
