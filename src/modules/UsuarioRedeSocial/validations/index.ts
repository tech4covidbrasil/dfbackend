import { Joi } from 'celebrate';

export const bodySchema = Joi.object().keys({
	descricao: Joi.string().min(3).message("Nome deve conter no minímo 3 caracteres"),
	usuarioId:	Joi.string().guid(),
	redeSocialId: Joi.string().guid()
})
.options({ abortEarly: false });

export const paramsSchema = Joi.object().keys({
	id: Joi.number().message("Informe um ID válido")
})
.options({ abortEarly: false });
