import { celebrate, Segments } from 'celebrate';
import { bodySchema, paramsSchema } from '../validations';

import RedeSocialController from '../controller/RedeSocialController';
import { Response, Router } from 'express';

const redeSocial = Router();

redeSocial.get('/ok', (req, res) => {
	res.status(200).json({
		message: 'redeSocial OK',
		resposta: req.id
	});
});

redeSocial.get('/', RedeSocialController.index);
redeSocial.get(
	'/:id',
	celebrate({
		[Segments.PARAMS]: paramsSchema,
	}),
	RedeSocialController.showById,
);

redeSocial.post(
	'/',
	celebrate({
		[Segments.BODY]: bodySchema,
	}),
	RedeSocialController.store,
);
redeSocial.put(
	'/:id/editar',
	celebrate({
		[Segments.BODY]: bodySchema,
		[Segments.PARAMS]: paramsSchema,
	}),
	RedeSocialController.update,
);

redeSocial.delete(
	'/:id/deletar',
	celebrate({
		[Segments.PARAMS]: paramsSchema,
	}),
	RedeSocialController.delete,
);

export default redeSocial;
