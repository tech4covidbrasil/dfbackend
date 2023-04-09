import { Joi } from 'celebrate';

export const bodySchema = Joi.object().keys({
	nome: Joi.string().min(3),
	email: Joi.string().email(),
	telefone: Joi.string(),
	cidade: Joi.string(),
	estado: Joi.string(),
	tipoLead: Joi.string(),
	termosAceitos: Joi.boolean()
})
.options({ abortEarly: false });

export const paramsSchema = Joi.object().keys({
	id: Joi.string().uuid()
})
.options({ abortEarly: false });
