import { Request, Response } from 'express';

import { ErrorResponse, SuccessResponse } from '../../../shared/utils/ApiResponse';

import {
	createUnidadeMedida,
	listUnidadeMedida,
	getUnidadeMedidaById,
	updateUnidadeMedida,
	deleteUnidadeMedida,
} from '../services/index';

class UnidadeMedidaController {
	public async index(request: Request, response: Response) {
		try {
			const showAll = await listUnidadeMedida();
			SuccessResponse(response, 200, "Registros Encontrados.", showAll)
		} catch (error: any) {
			ErrorResponse(response, 500, 'Ocorreu um erro', error.message);
		}
	}
	public async showById(request: Request, response: Response) {
		try {
			const getById = await getUnidadeMedidaById(Number(request.params.id));

			SuccessResponse(response, 200, "Registros Encontrados.", getById)
		} catch (error: any) {
			ErrorResponse(response, 500, 'Ocorreu um erro', error.message);
		}
	}
	public async store(request: Request, response: Response) {

		try {
			const createUMedida = await createUnidadeMedida(request.body);

			SuccessResponse(response, 201, "Registros Criado.", createUMedida)
		} catch (error: any) {
			ErrorResponse(response, 500, 'Ocorreu um erro', error.message);
		}
	}
	public async update(request: Request, response: Response) {
		try {
			const unidadeMedidaUpdate = await updateUnidadeMedida(
				request.body,
				Number(request.params.id),
			);
			SuccessResponse(response, 202, "Atualizado.", unidadeMedidaUpdate)
		} catch (error: any) {
			ErrorResponse(response, 500, 'Ocorreu um erro', error.message);
		}
	}
	public async delete(request: Request, response: Response) {
		try {
			await deleteUnidadeMedida(Number(request.params.id));

			SuccessResponse(response, 204, "Atualizado.")
		} catch (error: any) {
			ErrorResponse(response, 500, 'Ocorreu um erro', `Não foi possivel excluir o registro com id: ${request.params.id} informado, por favor verifique o ID`);
		}
	}
}

export default new UnidadeMedidaController();
