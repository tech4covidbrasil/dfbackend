import {Joi} from 'celebrate';

const cepRegex = /^[0-9]{5}-[0-9]{3}$/

export const bodySchema = Joi.object().keys({
	ddd: Joi.string().min(2).max(3),
	telefone: Joi.string().min(8).max(9),
	cep: Joi.string().regex(cepRegex),
	endereco: Joi.string().min(5),
	numero: Joi.number().min(2),
	complemento: Joi.string().min(4),
	bairro: Joi.string().min(5),
	cidade: Joi.string().min(5),
	estado: Joi.string().max(2),
	usuarioId: Joi.string().guid()
})
.options({ abortEarly: false });

export const paramsSchema = Joi.object().keys({
	id: Joi.string().uuid()
})
.options({ abortEarly: false });
