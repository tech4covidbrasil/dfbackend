import {Joi} from 'celebrate';

export const bodySchema = Joi.object().keys({
	usuarioId: Joi.string().guid(),
	campanhaId: Joi.string().guid(),
})
.options({ abortEarly: false });

export const paramsSchema = Joi.object().keys({
	id: Joi.string().uuid()
})
.options({ abortEarly: false });