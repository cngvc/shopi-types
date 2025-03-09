import Joi, { ObjectSchema } from 'joi';

const createOrderScheme: ObjectSchema = Joi.object().keys({
  cardId: Joi.string().required().messages({
    'string.base': 'Card Id must be of type string',
    'string.empty': 'Card Id is required',
    'any.required': 'Card Id is required',
  }),
  paymentMethod: Joi.string().valid('COD', 'Stripe').required().messages({
    'any.required': 'Payment method is required',
    'any.only': 'Invalid payment method',
  }),
  shippingAddressPublicId: Joi.string().required().messages({
    'string.base': 'Shipping address public Id must be of type string',
    'string.empty': 'Shipping address public Id is required',
    'any.required': 'Shipping address public Id is required',
  }),
});

export { createOrderScheme };
