import { Request, Response } from 'express';

import { ErrorResponse, SuccessResponse } from 'src/shared/utils/ApiResponse';

import {
	createHistoricoUsuario,
	listHistoricoUsuario,
	gethistoricoUsuarioById,
	updateHistoricoUsuario,
	deleteHistoricoUsuario,
} from '../services/index';

class DocumentoController {
	public async index(request: Request, response: Response) {
		try {
			const showAll = await listHistoricoUsuario();
			SuccessResponse(response, 200, "Registros Encontrados.", showAll)
		} catch (error: any) {
			ErrorResponse(response, 500, 'Ocorreu um erro', error.message);
		}
	}
	public async showById(request: Request, response: Response) {
		try {
			const getById = await gethistoricoUsuarioById(request.params.id);

			SuccessResponse(response, 200, "Registros Encontrados.", getById)
		} catch (error: any) {
			ErrorResponse(response, 500, 'Ocorreu um erro', error.message);
		}
	}
	public async store(request: Request, response: Response) {

		try {
			const create = await createHistoricoUsuario(request.body);

			SuccessResponse(response, 201, "Registros Criado.", create)
		} catch (error: any) {
			ErrorResponse(response, 500, 'Ocorreu um erro', error.message);
		}
	}
	public async update(request: Request, response: Response) {
		try {
			const update = await updateHistoricoUsuario(
				request.body,
				request.params.id,
			);
			SuccessResponse(response, 202, "Atualizado.", update)
		} catch (error: any) {
			ErrorResponse(response, 500, 'Ocorreu um erro', error.message);
		}
	}
	public async delete(request: Request, response: Response) {
		try {
			await deleteHistoricoUsuario(request.params.id);

			SuccessResponse(response, 204, "Atualizado.")
		} catch (error: any) {
			ErrorResponse(response, 500, 'Ocorreu um erro', error.message);
		}
	}
}

export default new DocumentoController();
