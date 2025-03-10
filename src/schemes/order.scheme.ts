import Joi, { ObjectSchema } from 'joi';

const createOrderScheme: ObjectSchema = Joi.object().keys({
  paymentMethod: Joi.string().valid('COD', 'Stripe').required().messages({
    'any.required': 'Payment method is required',
    'any.only': 'Invalid payment method',
  }),
});

export { createOrderScheme };
