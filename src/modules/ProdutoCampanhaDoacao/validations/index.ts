import { Joi } from 'celebrate';

export const bodySchema = Joi.object().keys({
	produtoId: Joi.string().guid(),
	campanhaId: Joi.string().guid(),
	doacaoId: Joi.string().guid(),
	quantidadeDoada: Joi.number()
})
.options({ abortEarly: false });

export const paramsSchema = Joi.object().keys({
	id: Joi.string().uuid()
})
.options({ abortEarly: false });
