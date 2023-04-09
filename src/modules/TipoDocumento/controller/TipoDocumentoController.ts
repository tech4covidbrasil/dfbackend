import { Request, Response } from 'express';

import { ErrorResponse, SuccessResponse } from 'src/shared/utils/ApiResponse';

import {
	createTipoDocumento,
	listTipoDocumento,
	getTipoDocumentoById,
	updateTipoDocumento,
	deleteTipoDocumento,
} from '../services/index';

class TipoDocumentoController {
	public async index(request: Request, response: Response) {
		try {
			const showAll = await listTipoDocumento();
			SuccessResponse(response, 200, "Registros Encontrados.", showAll)
		} catch (error: any) {
			ErrorResponse(response, 500, 'Ocorreu um erro', error.message);
		}
	}
	public async showById(request: Request, response: Response) {
		try {
			const getById = await getTipoDocumentoById(request.params.id);

			SuccessResponse(response, 200, "Registros Encontrados.", getById)
		} catch (error: any) {
			ErrorResponse(response, 500, 'Ocorreu um erro', error.message);
		}
	}
	public async store(request: Request, response: Response) {

		try {
			const tipoDocumentoCreate = await createTipoDocumento(request.body);

			SuccessResponse(response, 201, "Registros Criado.", tipoDocumentoCreate)
		} catch (error: any) {
			ErrorResponse(response, 500, 'Ocorreu um erro', error.message);
		}
	}
	public async update(request: Request, response: Response) {
		try {
			const tipoDocumentoUpdate = await updateTipoDocumento(
				request.body,
				request.params.id,
			);
			SuccessResponse(response, 202, "Atualizado.", tipoDocumentoUpdate)
		} catch (error: any) {
			ErrorResponse(response, 500, 'Ocorreu um erro', error.message);
		}
	}
	public async delete(request: Request, response: Response) {
		try {
			await deleteTipoDocumento(request.params.id);

			SuccessResponse(response, 204, "Atualizado.")
		} catch (error: any) {
			ErrorResponse(response, 500, 'Ocorreu um erro', error.message);
		}
	}
}

export default new TipoDocumentoController();
