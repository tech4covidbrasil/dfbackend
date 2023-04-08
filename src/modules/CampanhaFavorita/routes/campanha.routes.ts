import { celebrate, Segments } from 'celebrate';
import { bodySchema, paramsSchema } from '../validations';

import CampanhaFavoritaController from '../controller/CampanhaFavoritaController';
import { Router } from 'express';

const campanhaFavorita = Router();

campanhaFavorita.get('/ok', (req, res) => {
	res.status(200).json({
		message: 'campanhaFavorita OK'
	});
});

//Listar todas minhas campanhas favoritas
campanhaFavorita.get('/', CampanhaFavoritaController.index);

//Recuperar uma campanha favorita
campanhaFavorita.get(
	'/:id',
	celebrate({
		[Segments.PARAMS]: paramsSchema,
	}),
	CampanhaFavoritaController.showById,
);

//Like na campanha
campanhaFavorita.post(
	'/',
	celebrate({
		[Segments.BODY]: bodySchema,
	}),
	CampanhaFavoritaController.like,
);

//Dislike na campanha
campanhaFavorita.delete(
	'/:id/deletar',
	celebrate({
		[Segments.PARAMS]: paramsSchema,
	}),
	CampanhaFavoritaController.dislike,
);

export default campanhaFavorita;
