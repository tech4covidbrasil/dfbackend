import { celebrate, Segments } from 'celebrate';
import { bodySchema, paramsSchema } from '../validations';

import TipoDocumentoController from '../controller/TipoDocumentoController';
import { Response, Router } from 'express';

const tipoDocumento = Router();

tipoDocumento.get('/ok', (req, res) => {
	res.status(200).json({
		message: 'tipoDocumento OK',
		resposta: req.id
	});
});

tipoDocumento.get('/', TipoDocumentoController.index);
tipoDocumento.get(
	'/:id',
	celebrate({
		[Segments.PARAMS]: paramsSchema,
	}),
	TipoDocumentoController.showById,
);

tipoDocumento.post(
	'/',
	celebrate({
		[Segments.BODY]: bodySchema,
	}),
	TipoDocumentoController.store,
);
tipoDocumento.put(
	'/:id/editar',
	celebrate({
		[Segments.BODY]: bodySchema,
		[Segments.PARAMS]: paramsSchema,
	}),
	TipoDocumentoController.update,
);

tipoDocumento.delete(
	'/:id/deletar',
	celebrate({
		[Segments.PARAMS]: paramsSchema,
	}),
	TipoDocumentoController.delete,
);

export default tipoDocumento;
