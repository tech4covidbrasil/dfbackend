import {Joi} from 'celebrate';

export const bodySchema = Joi.object().keys({
	usuarioId: Joi.string().guid(),
	nome: Joi.string().min(5),
	tipoArrecadacao: Joi.string(),
	descricao: Joi.string(),
	dataTerminoCampanha: Joi.date(),
	cidadeCampanha: Joi.string(),
	estadoCampanha: Joi.string(),
	isValidated: Joi.boolean(),
	isActive: Joi.boolean()
})
.options({ abortEarly: false });

export const paramsSchema = Joi.object().keys({
	id: Joi.string().uuid()
})
.options({ abortEarly: false });

export const filterParams = Joi.object().keys({
	cidade: Joi.string(),
	estado: Joi.string(),
	tipo_arrecadacao: Joi.string()
}).options({ abortEarly: false })