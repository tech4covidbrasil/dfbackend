import { celebrate, Segments } from 'celebrate';
import { bodySchema, paramsSchema } from '../validations';

import UsuarioRedeSocialController from '../controller/UsuarioRedeSocialController';
import { Response, Router } from 'express';

const usuarioRedeSocial = Router();

usuarioRedeSocial.get('/ok', (req, res) => {
	res.status(200).json({
		message: 'redeSocial OK',
		resposta: req.id
	});
});

usuarioRedeSocial.get('/', UsuarioRedeSocialController.index);
usuarioRedeSocial.get(
	'/:id',
	celebrate({
		[Segments.PARAMS]: paramsSchema,
	}),
	UsuarioRedeSocialController.showById,
);

usuarioRedeSocial.post(
	'/',
	celebrate({
		[Segments.BODY]: bodySchema,
	}),
	UsuarioRedeSocialController.store,
);
usuarioRedeSocial.put(
	'/:id/editar',
	celebrate({
		[Segments.BODY]: bodySchema,
		[Segments.PARAMS]: paramsSchema,
	}),
	UsuarioRedeSocialController.update,
);

usuarioRedeSocial.delete(
	'/:id/deletar',
	celebrate({
		[Segments.PARAMS]: paramsSchema,
	}),
	UsuarioRedeSocialController.delete,
);

export default usuarioRedeSocial;
