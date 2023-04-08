import { celebrate, Segments } from 'celebrate';
import { bodySchema, paramsSchema } from '../validations';

import ProdutoDoadorCampanha from '../controller/ProdutoDoadorCampanha';
import { Router } from 'express';

const produtoDoacaoCampanha = Router();

produtoDoacaoCampanha.get('/ok', (req, res) => {
	res.status(200).json({
		message: 'Produto Doador Campanha OK',
	});
});

produtoDoacaoCampanha.get('/', ProdutoDoadorCampanha.index);
produtoDoacaoCampanha.get(
	'/:id',
	celebrate({
		[Segments.PARAMS]: paramsSchema,
	}),
	ProdutoDoadorCampanha.showById,
);

produtoDoacaoCampanha.post(
	'/',
	celebrate({
		[Segments.BODY]: bodySchema,
	}),
	ProdutoDoadorCampanha.store,
);
produtoDoacaoCampanha.put(
	'/:id/editar',
	celebrate({
		[Segments.BODY]: bodySchema,
		[Segments.PARAMS]: paramsSchema,
	}),
	ProdutoDoadorCampanha.update,
);

produtoDoacaoCampanha.delete(
	'/:id/deletar',
	celebrate({
		[Segments.PARAMS]: paramsSchema,
	}),
	ProdutoDoadorCampanha.delete,
);

export default produtoDoacaoCampanha;
