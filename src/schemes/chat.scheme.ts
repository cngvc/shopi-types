import Joi, { ObjectSchema } from 'joi';

export const createConversionSchema: ObjectSchema = Joi.object().keys({
  receiverAuthId: Joi.string().required().messages({
    'string.base': 'Receiver username is required',
    'string.empty': 'Receiver username is required',
    'any.required': 'Receiver username is required',
  }),
});

export const sendMessageSchema: ObjectSchema = Joi.object().keys({
  conversationId: Joi.string().optional().allow(null, ''),
  receiverAuthId: Joi.string().required().messages({
    'string.base': 'Receiver username is required',
    'string.empty': 'Receiver username is required',
    'any.required': 'Receiver username is required',
  }),
  body: Joi.string().required().messages({
    'string.base': 'Body is required',
    'string.empty': 'Body is required',
    'any.required': 'Body is required',
  }),
});
