import { Request, Response } from 'express';

import { ErrorResponse, SuccessResponse } from '../../../shared/utils/ApiResponse';

import {
	createEstado,
	listEstado,
	getEstadoById,
	updateEstado,
	deleteEstado,
} from '../services/index';

class EstadoController {
	public async index(request: Request, response: Response) {
		try {
			const showAll = await listEstado();
			SuccessResponse(response, 200, "Registros Encontrados.", showAll)
		} catch (error: any) {
			ErrorResponse(response, 500, 'Ocorreu um erro', error.message);
		}
	}
	public async showById(request: Request, response: Response) {
		try {
			const getById = await getEstadoById(Number(request.params.id));

			SuccessResponse(response, 200, "Registros Encontrados.", getById)
		} catch (error: any) {
			ErrorResponse(response, 500, 'Ocorreu um erro', error.message);
		}
	}
	public async store(request: Request, response: Response) {

		try {
			const estadoCreate = await createEstado(request.body);

			SuccessResponse(response, 201, "Registros Criado.", estadoCreate)
		} catch (error: any) {
			ErrorResponse(response, 500, 'Ocorreu um erro', error.message);
		}
	}
	public async update(request: Request, response: Response) {
		try {
			const estadoUpdate = await updateEstado(
				request.body,
				Number(request.params.id),
			);
			SuccessResponse(response, 202, "Atualizado.", estadoUpdate)
		} catch (error: any) {
			ErrorResponse(response, 500, 'Ocorreu um erro', error.message);
		}
	}
	public async delete(request: Request, response: Response) {
		try {
			await deleteEstado(Number(request.params.id));

			SuccessResponse(response, 204, "Atualizado.")
		} catch (error: any) {
			ErrorResponse(response, 500, 'Ocorreu um erro', error.message);
		}
	}
}

export default new EstadoController();
