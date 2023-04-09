import { celebrate, Segments } from 'celebrate';
import { bodySchema, paramsSchema } from '../validations';

import UnidadeMedidaController from '../controller/UnidadeMedidaController';
import { Router } from 'express';

const unidadeMedida = Router();

unidadeMedida.get('/ok', (req, res) => {
	res.status(200).json({
		message: 'Unidade Medida OK',
	});
});

unidadeMedida.get('/', UnidadeMedidaController.index);
unidadeMedida.get(
	'/:id',
	celebrate({
		[Segments.PARAMS]: paramsSchema,
	}),
	UnidadeMedidaController.showById,
);

unidadeMedida.post(
	'/',
	celebrate({
		[Segments.BODY]: bodySchema,
	}),
	UnidadeMedidaController.store,
);
unidadeMedida.put(
	'/:id/editar',
	celebrate({
		[Segments.BODY]: bodySchema,
		[Segments.PARAMS]: paramsSchema,
	}),
	UnidadeMedidaController.update,
);

unidadeMedida.delete(
	'/:id/deletar',
	celebrate({
		[Segments.PARAMS]: paramsSchema,
	}),
	UnidadeMedidaController.delete,
);

export default unidadeMedida;
