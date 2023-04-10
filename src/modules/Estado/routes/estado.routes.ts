import { celebrate, Segments } from 'celebrate';
import { bodySchema, paramsSchema } from '../validations';

import EstadoController from '../controller/EstadoController';
import { Response, Router } from 'express';

const estado = Router();

estado.get('/ok', (req, res) => {
	res.status(200).json({
		message: 'estado OK',
		resposta: req.id
	});
});

estado.get('/', EstadoController.index);
estado.get(
	'/:id',
	celebrate({
		[Segments.PARAMS]: paramsSchema,
	}),
	EstadoController.showById,
);

estado.post(
	'/',
	celebrate({
		[Segments.BODY]: bodySchema,
	}),
	EstadoController.store,
);
estado.put(
	'/:id/editar',
	celebrate({
		[Segments.BODY]: bodySchema,
		[Segments.PARAMS]: paramsSchema,
	}),
	EstadoController.update,
);

estado.delete(
	'/:id/deletar',
	celebrate({
		[Segments.PARAMS]: paramsSchema,
	}),
	EstadoController.delete,
);

export default estado;
