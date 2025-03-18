import Joi, { ObjectSchema } from 'joi';
import { PaymentMethod } from '../payment.interface';

const paymentScheme: ObjectSchema = Joi.object().keys({
  method: Joi.string()
    .valid(...Object.values(PaymentMethod))
    .required()
    .messages({
      'any.required': 'Payment method is required',
      'any.only': 'Invalid payment method',
    }),
});

export { paymentScheme };
