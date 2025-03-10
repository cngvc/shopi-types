import { PaymentMethod } from './../order.interface';
import Joi, { ObjectSchema } from 'joi';

const createOrderScheme: ObjectSchema = Joi.object().keys({
  payment: Joi.object({
    method: Joi.string()
      .valid(...Object.values(PaymentMethod))
      .required()
      .messages({
        'any.required': 'Payment method is required',
        'any.only': 'Invalid payment method',
      }),
    transactionId: Joi.string().optional(),
  }).required(),
});

export { createOrderScheme };
