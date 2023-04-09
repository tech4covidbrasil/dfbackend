import { celebrate, Segments } from 'celebrate';
import { bodySchema, paramsSchema } from '../validations';

import UsuarioController from '../controller/UsuarioController';
import { Router } from 'express';

const usuario = Router();

usuario.get('/ok', (req, res) => {
	res.status(200).json({
		message: 'Usuario OK',
	});
});

usuario.get('/', UsuarioController.index);

usuario.get('/buscar', UsuarioController.findByEmail);

usuario.get(
	'/:id',
	celebrate({
		[Segments.PARAMS]: paramsSchema,
	}),
	UsuarioController.showById,
);

// usuario.post(
// 	'/',
// 	celebrate({
// 		[Segments.BODY]: bodySchema,
// 	}),
// 	UsuarioController.store,
// );

usuario.put(
	'/:id/editar',
	celebrate({
		[Segments.BODY]: bodySchema,
		[Segments.PARAMS]: paramsSchema,
	}),
	UsuarioController.update,
);

usuario.delete(
	'/:id/deletar',
	celebrate({
		[Segments.PARAMS]: paramsSchema,
	}),
	UsuarioController.delete);
export default usuario;
