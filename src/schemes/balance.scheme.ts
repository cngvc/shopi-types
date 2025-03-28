import Joi, { ObjectSchema } from 'joi';

const updateUserBalanceSchema: ObjectSchema = Joi.object().keys({
  amount: Joi.number().required().messages({
    'string.base': 'Amount price is required',
    'string.empty': 'Amount price is required',
    'any.required': 'Amount price is required',
  }),
});

export { updateUserBalanceSchema };
