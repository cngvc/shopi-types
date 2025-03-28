import Joi, { ObjectSchema } from 'joi';

export const signinSchema: ObjectSchema = Joi.object().keys({
  username: Joi.alternatives()
    .required()
    .conditional(Joi.string().email({ tlds: { allow: false } }), {
      then: Joi.string()
        .email({ tlds: { allow: false } })
        .messages({
          'string.base': 'Email must be of type string',
          'string.email': 'Invalid email',
          'string.empty': 'Email is required',
        }),
      otherwise: Joi.string().min(1).messages({
        'string.base': 'Username must be of type string',
        'string.min': 'Invalid username',
        'string.max': 'Invalid username',
        'string.empty': 'Username is required',
      }),
    }),
  password: Joi.string().required().min(8).messages({
    'string.base': 'Password must be of type string',
    'string.min': 'Invalid password',
    'string.empty': 'Password is required',
  }),
  deviceInfo: Joi.string().optional().allow(null, ''),
});
