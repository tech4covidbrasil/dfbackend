import { Joi } from 'celebrate';

export const bodySchema = Joi.object().keys({
	usuarioId: Joi.string(),
	campanhaId: Joi.string(),
	produtoId: Joi.number(),
	quantidadeDoada: Joi.number(),
	isValidated: Joi.boolean(),
})
.options({ abortEarly: false });

export const paramsSchema = Joi.object().keys({
	id: Joi.string().uuid()
})
.options({ abortEarly: false });
