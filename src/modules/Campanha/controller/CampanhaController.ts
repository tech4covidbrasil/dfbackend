import { Request, Response } from 'express';
import { ErrorResponse, SuccessResponse } from 'src/shared/utils/ApiResponse';

import {
	createCampanha,
	listCampanha,
	getCampanhaById,
	updateCampanha,
	deleteCampanha,
	filtrarCampanha,
	minhasCampanhasAtivas
} from '../services/index';

class CampanhaController {
	//Rota aberta para mostrar aos visitantes do site as campanhas
	public async index(request: Request, response: Response) {
		try {
			const showAll = await listCampanha();
			SuccessResponse(response, 200, 'Registros Encontrados.', showAll);
		} catch (error: any) {
			ErrorResponse(response, 500, 'Ocorreu um erro', error.message);
		}
	}

	public async filtrar(request: Request, response: Response) {
		try {
			const { cidade, estado, tipo_arrecadacao } = request.query;

			const campanhasFiltradas = await filtrarCampanha(
				cidade,
				estado,
				tipo_arrecadacao,
			);

			SuccessResponse(response, 200, 'OK.', campanhasFiltradas);
		} catch (error: any) {
			ErrorResponse(response, 500, 'Ocorreu um erro', error.message);
		}
	}

	//Rota da ONG para abrir apenas uma campanha daquela ONG
	public async showById(request: Request, response: Response) {
		try {
			const getById = await getCampanhaById(request.params.id);

			SuccessResponse(response, 200, 'Registros Encontrados.', getById);
		} catch (error: any) {
			ErrorResponse(response, 500, 'Ocorreu um erro', error.message);
		}
	}

	//Rota da ONG para cadastrar uma campanha
	public async store(request: Request, response: Response) {
		try {
			const campanhaCreate = await createCampanha(request.body);

			SuccessResponse(response, 201, 'Registros Criado.', campanhaCreate);
		} catch (error: any) {
			ErrorResponse(response, 500, 'Ocorreu um erro', error.message);
		}
	}

	//Usuário precisa esta logado para atualizar sua campanha
	public async update(request: Request, response: Response) {
		try {
			const campanhaUpdate = await updateCampanha(
				request.body,
				request.params.id,
			);
			SuccessResponse(response, 202, 'Atualizado.', campanhaUpdate);
		} catch (error: any) {
			ErrorResponse(response, 500, 'Ocorreu um erro', error.message);
		}
	}

	//Usuário precisa esta logado para deletar uma campanha
	public async delete(request: Request, response: Response) {
		try {
			await deleteCampanha(request.params.id);

			SuccessResponse(response, 204, 'Atualizado.');
		} catch (error: any) {
			ErrorResponse(response, 500, 'Ocorreu um erro', error.message);
		}
	}

	//Usuário precisa esta logado para ver suas campanhas ativas
	public async campanhasAtivas(request: Request, response: Response) {
		try {
			const minhasCampanhas = await minhasCampanhasAtivas(request.params.usuarioId);

			SuccessResponse(response, 200, "Registros Encontrados.", minhasCampanhas)
		} catch (error: any) {
			ErrorResponse(response, 500, 'Ocorreu um erro', error.message);
		}
	}
}

export default new CampanhaController();
