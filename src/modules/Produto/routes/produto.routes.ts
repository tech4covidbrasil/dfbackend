import { celebrate, Segments } from 'celebrate';
import { bodySchema, paramsSchema } from '../validations';

import ProdutoController from '../controller/ProdutoController';
import { Response, Router } from 'express';

const produto = Router();

produto.get('/ok', (req, res) => {
	res.status(200).json({
		message: 'Produto OK',
		resposta: req.id
	});
});

produto.get('/', ProdutoController.index);
produto.get(
	'/:id',
	celebrate({
		[Segments.PARAMS]: paramsSchema,
	}),
	ProdutoController.showById,
);

produto.post(
	'/',
	celebrate({
		[Segments.BODY]: bodySchema,
	}),
	ProdutoController.store,
);
produto.put(
	'/:id/editar',
	celebrate({
		[Segments.BODY]: bodySchema,
		[Segments.PARAMS]: paramsSchema,
	}),
	ProdutoController.update,
);

produto.delete(
	'/:id/deletar',
	celebrate({
		[Segments.PARAMS]: paramsSchema,
	}),
	ProdutoController.delete,
);

export default produto;
