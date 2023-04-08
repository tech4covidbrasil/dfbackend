import { Request, Response } from 'express';

import { ErrorResponse, SuccessResponse } from 'src/shared/utils/ApiResponse';

import {
	createProdutoCampanhaDoacao,
	listProdutoCampanhaDoacao,
	getProdutoCampanhaDoacaoById,
	updateProdutoCampanhaDoacao,
	deleteProdutoCampanhaDoacao,
} from '../services/index';

class ProdutoDoadorCampanha {
	public async index(request: Request, response: Response) {
		try {
			const showAll = await listProdutoCampanhaDoacao();
			SuccessResponse(response, 200, 'Registros Encontrados.', showAll);
		} catch (error: any) {
			ErrorResponse(response, 500, 'Ocorreu um erro', error.message);
		}
	}
	public async showById(request: Request, response: Response) {
		try {
			const getById = await getProdutoCampanhaDoacaoById(
				request.params.id,
			);

			SuccessResponse(response, 200, 'Registros Encontrados.', getById);
		} catch (error: any) {
			ErrorResponse(response, 500, 'Ocorreu um erro', error.message);
		}
	}
	public async store(request: Request, response: Response) {
		try {
			const create = await createProdutoCampanhaDoacao(request.body);

			SuccessResponse(response, 201, 'Registros Criado.', create);
		} catch (error: any) {
			ErrorResponse(response, 500, 'Ocorreu um erro', error.message);
		}
	}
	public async update(request: Request, response: Response) {
		try {
			const update = await updateProdutoCampanhaDoacao(
				request.body,
				request.params.id,
			);
			SuccessResponse(response, 202, 'Atualizado.', update);
		} catch (error: any) {
			ErrorResponse(response, 500, 'Ocorreu um erro', error.message);
		}
	}
	public async delete(request: Request, response: Response) {
		try {
			await deleteProdutoCampanhaDoacao(request.params.id);

			SuccessResponse(response, 204, 'Atualizado.');
		} catch (error: any) {
			ErrorResponse(response, 500, 'Ocorreu um erro', error.message);
		}
	}
}

export default new ProdutoDoadorCampanha();
