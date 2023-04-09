import { Request, Response } from 'express';

import { ErrorResponse, SuccessResponse } from 'src/shared/utils/ApiResponse';

import {
	createCidade,
	listCidade,
	getCidadeById,
	updateCidade,
	deleteCidade,
} from '../services/index';

class CidadeController {
	public async index(request: Request, response: Response) {
		try {
			const showAll = await listCidade();
			SuccessResponse(response, 200, "Registros Encontrados.", showAll)
		} catch (error: any) {
			ErrorResponse(response, 500, 'Ocorreu um erro', error.message);
		}
	}
	public async showById(request: Request, response: Response) {
		try {
			const getById = await getCidadeById(Number(request.params.id));

			SuccessResponse(response, 200, "Registros Encontrados.", getById)
		} catch (error: any) {
			ErrorResponse(response, 500, 'Ocorreu um erro', error.message);
		}
	}
	public async store(request: Request, response: Response) {

		try {
			const cidadeCreate = await createCidade(request.body);

			SuccessResponse(response, 201, "Registros Criado.", cidadeCreate)
		} catch (error: any) {
			ErrorResponse(response, 500, 'Ocorreu um erro', error.message);
		}
	}
	public async update(request: Request, response: Response) {
		try {
			const produtoUpdate = await updateCidade(
				request.body,
				Number(request.params.id),
			);
			SuccessResponse(response, 202, "Atualizado.", produtoUpdate)
		} catch (error: any) {
			ErrorResponse(response, 500, 'Ocorreu um erro', error.message);
		}
	}
	public async delete(request: Request, response: Response) {
		try {
			await deleteCidade(Number(request.params.id));

			SuccessResponse(response, 204, "Atualizado.")
		} catch (error: any) {
			ErrorResponse(response, 500, 'Ocorreu um erro', error.message);
		}
	}
}

export default new CidadeController();
