import { celebrate, Segments } from 'celebrate';
import { bodySchema, filterParams, paramsSchema } from '../validations';

import CampanhaController from '../controller/CampanhaController';
import { Router } from 'express';

const campanha = Router();

campanha.get('/ok', (req, res) => {
	res.status(200).json({
		message: 'campanha OK',
	});
});

campanha.get('/', CampanhaController.index);

campanha.get(
	'/:id',
	celebrate({
		[Segments.PARAMS]: paramsSchema,
	}),
	CampanhaController.showById,
);

campanha.get('/filtro',
	celebrate({
		[Segments.QUERY]: filterParams
	}),
	CampanhaController.filtrar)

campanha.post(
	'/',
	celebrate({
		[Segments.BODY]: bodySchema,
	}),
	CampanhaController.store,
);

campanha.get('/ativas', CampanhaController.campanhasAtivas)

campanha.put(
	'/:id/editar',
	celebrate({
		[Segments.BODY]: bodySchema,
		[Segments.PARAMS]: paramsSchema,
	}),
	CampanhaController.update,
);

campanha.delete(
	'/:id/deletar',
	celebrate({
		[Segments.PARAMS]: paramsSchema,
	}),
	CampanhaController.delete,
);

export default campanha;
