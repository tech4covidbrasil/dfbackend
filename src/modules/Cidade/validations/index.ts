import { Joi } from 'celebrate';

export const bodySchema = Joi.object().keys({
	nome: Joi.string().min(3),
})
.options({ abortEarly: false });

export const paramsSchema = Joi.object().keys({
	id: Joi.number()
})
.options({ abortEarly: false });
