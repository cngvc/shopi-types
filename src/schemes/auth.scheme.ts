import Joi, { ObjectSchema } from 'joi';

export const signoutSchema: ObjectSchema = Joi.object().keys({
  refreshToken: Joi.string().required().messages({
    'string.base': 'Refresh token must be of type string',
    'string.empty': 'Refresh token is required',
    'any.required': 'Refresh token is required',
  }),
});

export const refreshTokenSchema: ObjectSchema = Joi.object().keys({
  refreshToken: Joi.string().required().messages({
    'string.base': 'Refresh token must be of type string',
    'string.empty': 'Refresh token is required',
    'any.required': 'Refresh token is required',
  }),
});
