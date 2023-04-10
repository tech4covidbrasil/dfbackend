import { Request, Response } from 'express';

import { ErrorResponse, SuccessResponse } from '../../../shared/utils/ApiResponse';

import {
	createEndereco,
	listEndereco,
	getEnderecoById,
	updateEndereco,
	deleteEndereco,
} from '../services/index';

class EnderecoController {
	public async index(request: Request, response: Response) {
		try {
			const showAll = await listEndereco();
			SuccessResponse(response, 200, "Registros Encontrados.", showAll)
		} catch (error: any) {
			ErrorResponse(response, 500, 'Ocorreu um erro', error.message);
		}
	}
	public async showById(request: Request, response: Response) {
		try {
			const getById = await getEnderecoById(request.params.id);

			SuccessResponse(response, 200, "Registros Encontrados.", getById)
		} catch (error: any) {
			ErrorResponse(response, 500, 'Ocorreu um erro', error.message);
		}
	}
	public async store(request: Request, response: Response) {

		try {
			const enderecoCreate = await createEndereco(request.body);

			SuccessResponse(response, 201, "Registros Criado.", enderecoCreate)
		} catch (error: any) {
			ErrorResponse(response, 500, 'Ocorreu um erro', error.message);
		}
	}
	public async update(request: Request, response: Response) {
		try {
			const enderecoUpdate = await updateEndereco(
				request.body,
				request.params.id,
			);
			SuccessResponse(response, 202, "Atualizado.", enderecoUpdate)
		} catch (error: any) {
			ErrorResponse(response, 500, 'Ocorreu um erro', error.message);
		}
	}
	public async delete(request: Request, response: Response) {
		try {
			await deleteEndereco(request.params.id);

			SuccessResponse(response, 204, "Atualizado.")
		} catch (error: any) {
			ErrorResponse(response, 500, 'Ocorreu um erro', error.message);
		}
	}
}

export default new EnderecoController();
