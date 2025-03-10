import Joi from 'joi';

export const shippingAddressSchema = Joi.object({
  address: Joi.string().required().messages({
    'string.empty': 'Address is required.',
    'any.required': 'Address is required.',
  }),
  city: Joi.string().required().messages({
    'string.empty': 'City is required.',
    'any.required': 'City is required.',
  }),
  country: Joi.string().required().messages({
    'string.empty': 'Country is required.',
    'any.required': 'Country is required.',
  }),
  postalCode: Joi.string().optional().allow('').messages({
    'string.base': 'Postal code must be a string.',
  }),
});
