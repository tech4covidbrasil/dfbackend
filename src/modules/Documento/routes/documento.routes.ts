import { celebrate, Segments } from 'celebrate';
import { bodySchema, paramsSchema } from '../validations';

import DocumentoController from '../controller/DocumentoController';
import { Router } from 'express';

const documento = Router();

documento.get('/ok', (req, res) => {
	res.status(200).json({
		message: 'Documento OK',
	});
});

documento.get('/', DocumentoController.index);
documento.get(
	'/:id',
	celebrate({
		[Segments.PARAMS]: paramsSchema,
	}),
	DocumentoController.showById,
);

documento.post(
	'/',
	celebrate({
		[Segments.BODY]: bodySchema,
	}),
	DocumentoController.store,
);
documento.put(
	'/:id/editar',
	celebrate({
		[Segments.BODY]: bodySchema,
		[Segments.PARAMS]: paramsSchema,
	}),
	DocumentoController.update,
);

documento.delete(
	'/:id/deletar',
	celebrate({
		[Segments.PARAMS]: paramsSchema,
	}),
	DocumentoController.delete,
);

export default documento;
