import { Request, Response } from 'express';

import { ErrorResponse, SuccessResponse } from 'src/shared/utils/ApiResponse';

import {
	createUsuarioRedeSocial,
	listUsuarioRedeSocial,
	getUsuarioRedeSocialById,
	updateUsuarioRedeSocial,
	deleteUsuarioRedeSocial,
} from '../services/index';

class UsuarioRedeSocialController {
	public async index(request: Request, response: Response) {
		try {
			const showAll = await listUsuarioRedeSocial();
			SuccessResponse(response, 200, "Registros Encontrados.", showAll)
		} catch (error: any) {
			ErrorResponse(response, 500, 'Ocorreu um erro', error.message);
		}
	}
	public async showById(request: Request, response: Response) {
		try {
			const getById = await getUsuarioRedeSocialById(Number(request.params.id));

			SuccessResponse(response, 200, "Registros Encontrados.", getById)
		} catch (error: any) {
			ErrorResponse(response, 500, 'Ocorreu um erro', error.message);
		}
	}
	public async store(request: Request, response: Response) {

		try {
			const usuarioRedeSocialCreate = await createUsuarioRedeSocial(request.body);

			SuccessResponse(response, 201, "Registros Criado.", usuarioRedeSocialCreate)
		} catch (error: any) {
			ErrorResponse(response, 500, 'Ocorreu um erro', error.message);
		}
	}
	public async update(request: Request, response: Response) {
		try {
			const usuarioRedeSocialUpdate = await updateUsuarioRedeSocial(
				request.body,
				Number(request.params.id),
			);
			SuccessResponse(response, 202, "Atualizado.", usuarioRedeSocialUpdate)
		} catch (error: any) {
			ErrorResponse(response, 500, 'Ocorreu um erro', error.message);
		}
	}
	public async delete(request: Request, response: Response) {
		try {
			await deleteUsuarioRedeSocial(Number(request.params.id));

			SuccessResponse(response, 204, "Atualizado.")
		} catch (error: any) {
			ErrorResponse(response, 500, 'Ocorreu um erro', error.message);
		}
	}
}

export default new UsuarioRedeSocialController();
