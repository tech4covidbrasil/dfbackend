import { celebrate, Segments } from 'celebrate';
import { bodySchema, paramsSchema } from '../validations';

import EnderecoController from '../controller/EnderecoController';
import { Router } from 'express';

const endereco = Router();

endereco.get('/ok', (req, res) => {
	res.status(200).json({
		message: 'Endereço OK',
	});
});

endereco.get('/', EnderecoController.index);
endereco.get(
	'/:id',
	celebrate({
		[Segments.PARAMS]: paramsSchema,
	}),
	EnderecoController.showById,
);

endereco.post(
	'/',
	celebrate({
		[Segments.BODY]: bodySchema,
	}),
	EnderecoController.store,
);
endereco.put(
	'/:id/editar',
	celebrate({
		[Segments.BODY]: bodySchema,
		[Segments.PARAMS]: paramsSchema,
	}),
	EnderecoController.update,
);

endereco.delete(
	'/:id/deletar',
	celebrate({
		[Segments.PARAMS]: paramsSchema,
	}),
	EnderecoController.delete,
);

export default endereco;
