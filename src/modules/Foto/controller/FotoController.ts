import upload from '../../../config/multer';
import { Request, Response } from 'express';
import { ErrorResponse, SuccessResponse } from '../../../shared/utils/ApiResponse';

import {
	createFoto,
	listFoto,
	getFotoById,
	updateFoto,
	deleteFoto,
} from '../services/index';

class FotoController {
	public async index(request: Request, response: Response) {
		try {
			const showAll = await listFoto();
			SuccessResponse(response, 200, 'Registros Encontrados.', showAll);
		} catch (error: any) {
			ErrorResponse(response, 500, 'Ocorreu um erro', error.message);
		}
	}
	public async showById(request: Request, response: Response) {
		try {
			const getById = await getFotoById(request.params.id);

			SuccessResponse(response, 200, 'Registros Encontrados.', getById);
		} catch (error: any) {
			ErrorResponse(response, 500, 'Ocorreu um erro', error.message);
		}
	}
	public async store(request: Request, response: Response) {
		try {
			const fotoCreate = await createFoto(request.body);

			SuccessResponse(response, 201, 'Registros Criado.', fotoCreate);
		} catch (error: any) {
			ErrorResponse(response, 500, 'Ocorreu um erro', error.message);
		}
	}
	public async update(request: Request, response: Response) {
		try {
			const fotoUpdate = await updateFoto(
				request.body,
				request.params.id,
			);
			SuccessResponse(response, 202, 'Atualizado.', fotoUpdate);
		} catch (error: any) {
			ErrorResponse(response, 500, 'Ocorreu um erro', error.message);
		}
	}
	public async delete(request: Request, response: Response) {
		try {
			await deleteFoto(request.params.id);

			SuccessResponse(response, 204, 'Atualizado.');
		} catch (error: any) {
			ErrorResponse(response, 500, 'Ocorreu um erro', error.message);
		}
	}

	public save(request: Request, response: Response) {
		return upload(request, response, err => {
			if (err) {
				response.status(400).json({
					error: err.code,
				});
			}

			response.json(request.file);
		});
	}
}

export default new FotoController();
