import { celebrate, Segments } from 'celebrate';
import { bodySchema, paramsSchema } from '../validations';

import HistoricoUsuarioController from '../controller/HistoricoUsuarioController';
import { Router } from 'express';

const historicoUsuario = Router();

historicoUsuario.get('/ok', (req, res) => {
	res.status(200).json({
		message: 'Historico Usuario OK',
	});
});

historicoUsuario.get('/', HistoricoUsuarioController.index);
historicoUsuario.get(
	'/:id',
	celebrate({
		[Segments.PARAMS]: paramsSchema,
	}),
	HistoricoUsuarioController.showById,
);

historicoUsuario.post(
	'/',
	celebrate({
		[Segments.BODY]: bodySchema,
	}),
	HistoricoUsuarioController.store,
);
historicoUsuario.put(
	'/:id/editar',
	celebrate({
		[Segments.BODY]: bodySchema,
		[Segments.PARAMS]: paramsSchema,
	}),
	HistoricoUsuarioController.update,
);

historicoUsuario.delete(
	'/:id/deletar',
	celebrate({
		[Segments.PARAMS]: paramsSchema,
	}),
	HistoricoUsuarioController.delete,
);

export default historicoUsuario;
