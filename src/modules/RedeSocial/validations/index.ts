import { Joi } from 'celebrate';

export const bodySchema = Joi.object().keys({
	nome: Joi.string().min(3).message("Nome deve conter no minímo 3 caracteres")
})
.options({ abortEarly: false });

export const paramsSchema = Joi.object().keys({
	id: Joi.number().message("Informe um ID válido")
})
.options({ abortEarly: false });
