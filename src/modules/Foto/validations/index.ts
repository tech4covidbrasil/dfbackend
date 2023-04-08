import { Joi } from 'celebrate';

export const bodySchema = Joi.object().keys({
	foto_nome: Joi.string(),
	foto_path: Joi.string(),
})
.options({ abortEarly: false });

export const paramsSchema = Joi.object().keys({
	id: Joi.string().uuid()
})
.options({ abortEarly: false });
