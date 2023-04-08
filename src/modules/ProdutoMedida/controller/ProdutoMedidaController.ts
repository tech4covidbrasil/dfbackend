import { Request, Response } from 'express';

import { ErrorResponse, SuccessResponse } from 'src/shared/utils/ApiResponse';

import {
	createProdutoMedida,
	listProdutoMedida,
	getProdutoMedidaById,
	updateProdutoMedida,
	deleteProdutoMedida,
} from '../services/index';

class ProdutoMediaController {
	public async index(request: Request, response: Response) {
		try {
			const showAll = await listProdutoMedida();
			SuccessResponse(response, 200, "Registros Encontrados.", showAll)
		} catch (error: any) {
			ErrorResponse(response, 500, 'Ocorreu um erro', error.message);
		}
	}
	public async showById(request: Request, response: Response) {
		try {
			const getById = await getProdutoMedidaById(request.params.id);

			SuccessResponse(response, 200, "Registros Encontrados.", getById)
		} catch (error: any) {
			ErrorResponse(response, 500, 'Ocorreu um erro', error.message);
		}
	}
	public async store(request: Request, response: Response) {

		try {
			const prodMedidaCreate = await createProdutoMedida(request.body);

			SuccessResponse(response, 201, "Registros Criado.", prodMedidaCreate)
		} catch (error: any) {
			ErrorResponse(response, 500, 'Ocorreu um erro', error.message);
		}
	}
	public async update(request: Request, response: Response) {
		try {
			const prodMedidaUpdate = await updateProdutoMedida(
				request.body,
				request.params.id,
			);
			SuccessResponse(response, 202, "Atualizado.", prodMedidaUpdate)
		} catch (error: any) {
			ErrorResponse(response, 500, 'Ocorreu um erro', error.message);
		}
	}
	public async delete(request: Request, response: Response) {
		try {
			await deleteProdutoMedida(request.params.id);

			SuccessResponse(response, 204, "Atualizado.")
		} catch (error: any) {
			ErrorResponse(response, 500, 'Ocorreu um erro', error.message);
		}
	}
}

export default new ProdutoMediaController();
