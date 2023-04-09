import { celebrate, Segments } from 'celebrate';
import { bodySchema, paramsSchema } from '../validations';

import ProdutoMedidaController from '../controller/ProdutoMedidaController';
import { Router } from 'express';

const prodUndMedida = Router();

prodUndMedida.get('/ok', (req, res) => {
	res.status(200).json({
		message: 'prodUndMedida OK',
	});
});

prodUndMedida.get('/', ProdutoMedidaController.index);
prodUndMedida.get(
	'/:id',
	celebrate({
		[Segments.PARAMS]: paramsSchema,
	}),
	ProdutoMedidaController.showById,
);

prodUndMedida.post(
	'/',
	celebrate({
		[Segments.BODY]: bodySchema,
	}),
	ProdutoMedidaController.store,
);
prodUndMedida.put(
	'/:id/editar',
	celebrate({
		[Segments.BODY]: bodySchema,
		[Segments.PARAMS]: paramsSchema,
	}),
	ProdutoMedidaController.update,
);

prodUndMedida.delete(
	'/:id/deletar',
	celebrate({
		[Segments.PARAMS]: paramsSchema,
	}),
	ProdutoMedidaController.delete,
);

export default prodUndMedida;
