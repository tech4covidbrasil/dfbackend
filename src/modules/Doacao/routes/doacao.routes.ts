import { celebrate, Segments } from 'celebrate';
import { bodySchema, paramsSchema } from '../validations';

import DoacaoController from '../controller/DoacaoController';
import { Router } from 'express';

const doacao = Router();

doacao.get('/ok', (req, res) => {
	res.status(200).json({
		message: 'doacao OK',
	});
});

/*
	intenção é o usuário só pode cadastrar uma campanha se for ong
	/usuarioId/campanha/campanhaId/doar/
*/

doacao.get('/', DoacaoController.index);
doacao.get(
	'/:id',
	celebrate({
		[Segments.PARAMS]: paramsSchema,
	}),
	DoacaoController.showById,
);

doacao.post(
	'/',
	celebrate({
		[Segments.BODY]: bodySchema,
	}),
	DoacaoController.store,
);
doacao.put(
	'/:id/editar',
	celebrate({
		[Segments.BODY]: bodySchema,
		[Segments.PARAMS]: paramsSchema,
	}),
	DoacaoController.update,
);

doacao.delete(
	'/:id/deletar',
	celebrate({
		[Segments.PARAMS]: paramsSchema,
	}),
	DoacaoController.delete,
);

export default doacao;
