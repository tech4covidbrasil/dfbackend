import { Request, Response } from 'express';

import { ErrorResponse, SuccessResponse } from 'src/shared/utils/ApiResponse';

import {
	createDocumento,
	listDocumento,
	getDocumentoById,
	updateDocumento,
	deleteDocumento,
} from '../services/index';

class DocumentoController {
	public async index(request: Request, response: Response) {
		try {
			const showAll = await listDocumento();
			SuccessResponse(response, 200, "Registros Encontrados.", showAll)
		} catch (error: any) {
			ErrorResponse(response, 500, 'Ocorreu um erro', error.message);
		}
	}
	public async showById(request: Request, response: Response) {
		try {
			const getById = await getDocumentoById(request.params.id);

			SuccessResponse(response, 200, "Registros Encontrados.", getById)
		} catch (error: any) {
			ErrorResponse(response, 500, 'Ocorreu um erro', error.message);
		}
	}
	public async store(request: Request, response: Response) {

		try {
			const documentoCreate = await createDocumento(request.body);

			SuccessResponse(response, 201, "Registros Criado.", documentoCreate)
		} catch (error: any) {
			ErrorResponse(response, 500, 'Ocorreu um erro', error.message);
		}
	}
	public async update(request: Request, response: Response) {
		try {
			const documentoUpdate = await updateDocumento(
				request.body,
				request.params.id,
			);
			SuccessResponse(response, 202, "Atualizado.", documentoUpdate)
		} catch (error: any) {
			ErrorResponse(response, 500, 'Ocorreu um erro', error.message);
		}
	}
	public async delete(request: Request, response: Response) {
		try {
			await deleteDocumento(request.params.id);

			SuccessResponse(response, 204, "Atualizado.")
		} catch (error: any) {
			ErrorResponse(response, 500, 'Ocorreu um erro', error.message);
		}
	}
}

export default new DocumentoController();
