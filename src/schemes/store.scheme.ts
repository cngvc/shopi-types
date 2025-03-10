import Joi, { ObjectSchema } from 'joi';

const createStoreSchema: ObjectSchema = Joi.object().keys({
  name: Joi.string().required().messages({
    'string.base': 'Name must be of type string',
    'string.empty': 'Name is required',
    'any.required': 'Name is required',
  }),
  description: Joi.string().required().messages({
    'string.base': 'Please add a store description',
    'string.empty': 'Seller description is required',
    'any.required': 'Seller description is required',
  }),
  socialLinks: Joi.array().optional().allow(null, ''),
  completedOrders: Joi.number().optional(),
  cancelledOrders: Joi.number().optional(),
  totalEarnings: Joi.number().optional(),
  totalProducts: Joi.number().optional(),
  createdAt: Joi.string().optional(),
});

export { createStoreSchema };
