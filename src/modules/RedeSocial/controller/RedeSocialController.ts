import { Request, Response } from 'express';

import { ErrorResponse, SuccessResponse } from '../../../shared/utils/ApiResponse';

import {
	createRedeSocial,
	listRedeSocial,
	getRedeSocialById,
	updateRedeSocial,
	deleteRedeSocial,
} from '../services/index';

class RedeSocialController {
	public async index(request: Request, response: Response) {
		try {
			const showAll = await listRedeSocial();
			SuccessResponse(response, 200, "Registros Encontrados.", showAll)
		} catch (error: any) {
			ErrorResponse(response, 500, 'Ocorreu um erro', error.message);
		}
	}
	public async showById(request: Request, response: Response) {
		try {
			const getById = await getRedeSocialById(Number(request.params.id));

			SuccessResponse(response, 200, "Registros Encontrados.", getById)
		} catch (error: any) {
			ErrorResponse(response, 500, 'Ocorreu um erro', error.message);
		}
	}
	public async store(request: Request, response: Response) {

		try {
			const redeSocialCreate = await createRedeSocial(request.body);

			SuccessResponse(response, 201, "Registros Criado.", redeSocialCreate)
		} catch (error: any) {
			ErrorResponse(response, 500, 'Ocorreu um erro', error.message);
		}
	}
	public async update(request: Request, response: Response) {
		try {
			const redeSocialUpdate = await updateRedeSocial(
				request.body,
				Number(request.params.id),
			);
			SuccessResponse(response, 202, "Atualizado.", redeSocialUpdate)
		} catch (error: any) {
			ErrorResponse(response, 500, 'Ocorreu um erro', error.message);
		}
	}
	public async delete(request: Request, response: Response) {
		try {
			await deleteRedeSocial(Number(request.params.id));

			SuccessResponse(response, 204, "Atualizado.")
		} catch (error: any) {
			ErrorResponse(response, 500, 'Ocorreu um erro', error.message);
		}
	}
}

export default new RedeSocialController();
