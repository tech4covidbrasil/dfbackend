import { Request, Response } from 'express';

import { ErrorResponse, SuccessResponse } from '../../../shared/utils/ApiResponse';

import {
	listCampanhasFavoritas,
	likeCampanhasFavoritas,
	dislikeCampanhasFavoritas,
	campanhaFavoritaById
} from '../services/index';

class CampanhaFavoritaController {

	public async index(request: Request, response: Response) {
		/**
		 * /usuario/{usuarioid}/campanhas/favorita
		 */
		try {
			const showAll = await listCampanhasFavoritas(request.body.usuarioId);
			SuccessResponse(response, 200, 'Registros Encontrados.', showAll);
		} catch (error: any) {
			ErrorResponse(response, 500, 'Ocorreu um erro', error.message);
		}
	}

	public async showById(request: Request, response: Response) {
		/**
		 * /usuario/{usuarioId}/campanhas/{campanhaId}
		 */
		const { usuarioId, campanhaId } = request.params
		try {
			const getById = await campanhaFavoritaById(usuarioId, campanhaId);

			SuccessResponse(response, 200, 'Registros Encontrados.', getById);
		} catch (error: any) {
			ErrorResponse(response, 500, 'Ocorreu um erro', error.message);
		}
	}

	public async like(request: Request, response: Response) {
		/**
		 * /usuario/{usuarioId}/campanhas/{campanhaid}/like
		 */
		try {
			await likeCampanhasFavoritas(request.body); //usuarioid / campanhaid

			SuccessResponse(response, 200, 'Campanha favoritada');
		} catch (error: any) {
			ErrorResponse(response, 500, 'Ocorreu um erro', error.message);
		}
	}

	public async dislike(request: Request, response: Response) {
		/**
		 * /usuario/{usuarioId}/campanhas/{campanhaid}/dislike
		 */
		try {
			await dislikeCampanhasFavoritas(request.params.id);

			SuccessResponse(response, 204, 'Atualizado.');
		} catch (error: any) {
			ErrorResponse(response, 500, 'Ocorreu um erro', error.message);
		}
	}
}

export default new CampanhaFavoritaController();
