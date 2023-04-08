import { celebrate, Segments } from 'celebrate';
import { bodySchema, paramsSchema } from '../validations';

import ProdutoMediaController from '../controller/ProdutoMediaController';
import { Router } from 'express';

const prodUndMedida = Router();

prodUndMedida.get('/ok', (req, res) => {
	res.status(200).json({
		message: 'prodUndMedida OK',
	});
});

prodUndMedida.get('/', ProdutoMediaController.index);
prodUndMedida.get(
	'/:id',
	celebrate({
		[Segments.PARAMS]: paramsSchema,
	}),
	ProdutoMediaController.showById,
);

prodUndMedida.post(
	'/',
	celebrate({
		[Segments.BODY]: bodySchema,
	}),
	ProdutoMediaController.store,
);
prodUndMedida.put(
	'/:id/editar',
	celebrate({
		[Segments.BODY]: bodySchema,
		[Segments.PARAMS]: paramsSchema,
	}),
	ProdutoMediaController.update,
);

prodUndMedida.delete(
	'/:id/deletar',
	celebrate({
		[Segments.PARAMS]: paramsSchema,
	}),
	ProdutoMediaController.delete,
);

export default prodUndMedida;
