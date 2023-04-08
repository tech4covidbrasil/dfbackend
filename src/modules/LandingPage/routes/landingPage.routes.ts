import { celebrate, Segments } from 'celebrate';
import { bodySchema, paramsSchema } from '../validations';

import LandingPageController from '../controller/LandingPageController';
import { Router } from 'express';

const landingPage = Router();

landingPage.get('/ok', (req, res) => {
	res.status(200).json({
		message: 'LP OK',
	});
});

landingPage.get('/', LandingPageController.index);
landingPage.get(
	'/:id',
	celebrate({
		[Segments.PARAMS]: paramsSchema,
	}),
	LandingPageController.showById,
);

landingPage.post(
	'/',
	celebrate({
		[Segments.BODY]: bodySchema,
	}),
	LandingPageController.store,
);
landingPage.put(
	'/:id/editar',
	celebrate({
		[Segments.BODY]: bodySchema,
		[Segments.PARAMS]: paramsSchema,
	}),
	LandingPageController.update,
);

landingPage.delete(
	'/:id/deletar',
	celebrate({
		[Segments.PARAMS]: paramsSchema,
	}),
	LandingPageController.delete,
);

export default landingPage;
