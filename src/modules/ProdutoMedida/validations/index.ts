import { Joi } from 'celebrate';

export const bodySchema = Joi.object()
	.keys({
		produtoId: Joi.string().guid(),
		unidadeMedidaId: Joi.string().guid(),
	})
	.options({ abortEarly: false });

export const paramsSchema = Joi.object()
	.keys({
		id: Joi.string().uuid(),
	})
	.options({ abortEarly: false });
