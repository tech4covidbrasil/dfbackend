import {Joi} from 'celebrate';

export const bodySchema = Joi.object().keys({
	descricao: Joi.string().min(3),
	usuarioId:	Joi.string().guid(),
	redeSocialId: Joi.string().guid()
})
.options({ abortEarly: false });

export const paramsSchema = Joi.object().keys({
	id: Joi.number(),
})
.options({ abortEarly: false });
