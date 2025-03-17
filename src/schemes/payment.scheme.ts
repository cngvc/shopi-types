import { PaymentMethod } from '../order.interface';
import Joi, { ObjectSchema } from 'joi';

const paymentScheme: ObjectSchema = Joi.object().keys({
  method: Joi.string()
    .valid(...Object.values(PaymentMethod))
    .required()
    .messages({
      'any.required': 'Payment method is required',
      'any.only': 'Invalid payment method',
    }),
  transactionId: Joi.string().optional(),
  metadata: Joi.object().optional(),
});

export { paymentScheme };
