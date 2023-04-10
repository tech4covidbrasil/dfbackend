import {Joi} from 'celebrate';

export const bodySchema = Joi.object().keys({
	docNome: Joi.string().min(2),
})
.options({ abortEarly: false });

export const paramsSchema = Joi.object().keys({
	id: Joi.number()
})
.options({ abortEarly: false });
