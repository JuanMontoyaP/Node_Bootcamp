const Joi = require("joi");

const id = Joi.number();
const name = Joi.string().alphanum().min(3).max(20);
const price = Joi.number().positive().min(100);
const currency = Joi.string().valid("COP", "USD");
const description = Joi.string().alphanum().min(10).max(100);

const productSchema = Joi.object({
  name: name.required(),
  price: price.required(),
  currency: currency.required(),
  description: description.optional(),
});

const productDetailSchema = Joi.object({
  id: id.required(),
});

module.exports = {
  productSchema,
  productDetailSchema,
};
