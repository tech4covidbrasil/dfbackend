
import { Router } from 'express';

import { celebrate, Segments } from 'celebrate';
import { bodySchema, paramsSchema } from '../validations';

import FotoController from '../controller/FotoController';

const foto = Router();


foto.post('/image', FotoController.save);

foto.get('/ok', (req, res) => {
	res.status(200).json({
		msg: 'OK Foto'
	})
})

foto.get('/', FotoController.index);

foto.get(
	'/:id',
	celebrate({
		[Segments.PARAMS]: paramsSchema,
	}),
	FotoController.showById,
);

foto.post(
	'/',
	celebrate({
		[Segments.BODY]: bodySchema,
	}),
	FotoController.store,
);

foto.put(
	'/:id/editar',
	celebrate({
		[Segments.BODY]: bodySchema,
		[Segments.PARAMS]: paramsSchema,
	}),
	FotoController.update,
);

foto.delete(
	'/:id/deletar',
	celebrate({
		[Segments.PARAMS]: paramsSchema,
	}),
	FotoController.delete,
);

export default foto;
