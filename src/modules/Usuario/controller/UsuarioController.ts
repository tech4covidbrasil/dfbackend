import { Request, Response } from 'express';
import { ErrorResponse, SuccessResponse } from 'src/shared/utils/ApiResponse';

import {
	// createUsuario,
	listUsuario,
	getUsuarioById,
	getUsuarioByEmail,
	updateUsuario,
	deleteUsuario
} from '../services/index';

class UsuarioController {
	public async index(request: Request, response: Response) {

		try {
			const showAll = await listUsuario();
			SuccessResponse(response, 200, "Registros Encontrados.", showAll)
		} catch (error: any) {
			ErrorResponse(response, 500, 'Ocorreu um erro', error.message);
		}
	}
	public async showById(request: Request, response: Response) {

		try {
			const getById = await getUsuarioById(request.params.id);

			SuccessResponse(response, 200, "Registros Encontrados.", getById)
		} catch (error: any) {
			ErrorResponse(response, 500, 'Ocorreu um erro', error.message);
		}
	}

	public async findByEmail(request: Request, response: Response) {

		const { email } = request.query

		try {
			const getByEmail = await getUsuarioByEmail(email as any);

			SuccessResponse(response, 200, "Registro Encontrado.", getByEmail)
		} catch (error: any) {
			ErrorResponse(response, 500, 'Ocorreu um erro', error.message);
		}
	}

	public async update(request: Request, response: Response) {
		try {
			const update = await updateUsuario(
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
			await deleteUsuario(request.params.id);

			SuccessResponse(response, 204, "Registro apagado.")
		} catch (error: any) {
			ErrorResponse(response, 500, 'Ocorreu um erro', error.message);
		}
	}
}

export default new UsuarioController();
