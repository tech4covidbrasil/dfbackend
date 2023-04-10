import { celebrate, Segments } from 'celebrate';
import { bodySchema, paramsSchema } from '../validations';


import CidadeController from '../controller/CidadeController';
import { Response, Router } from 'express';

const cidade = Router();

cidade.get('/ok', (req, res) => {
	res.status(200).json({
		message: 'cidade OK',
		resposta: req.id
	});
});

cidade.get('/', CidadeController.index);
cidade.get(
	'/:id',
	celebrate({
		[Segments.PARAMS]: paramsSchema,
	}),
	CidadeController.showById,
);

cidade.post(
	'/',
	celebrate({
		[Segments.BODY]: bodySchema,
	}),
	CidadeController.store,
);
cidade.put(
	'/:id/editar',
	celebrate({
		[Segments.BODY]: bodySchema,
		[Segments.PARAMS]: paramsSchema,
	}),
	CidadeController.update,
);

cidade.delete(
	'/:id/deletar',
	celebrate({
		[Segments.PARAMS]: paramsSchema,
	}),
	CidadeController.delete,
);

export default cidade;
