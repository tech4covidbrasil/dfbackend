import { Request, Response } from 'express';

import { ErrorResponse, SuccessResponse } from '../../../shared/utils/ApiResponse';

import {
	login,
	cadastrar,
	esqueciSenha,
	resetarSenhaWeb,
	validaConta
} from '../services/index';

class UserAuthController {
	public async login(request: Request, response: Response) {
		try {
			const sessionLogin = await login(request.body);
			SuccessResponse(
				response,
				200,
				`Seja Bem Vindo: ${sessionLogin.usuario.nome} - Seu token de acesso: ${sessionLogin.token}`,
			);
		} catch (error: any) {
			ErrorResponse(response, 500, 'Ocorreu um erro', error.message);
		}
	}
	public async register(request: Request, response: Response) {
		try {
			await cadastrar(request.body);

			SuccessResponse(response, 201, 'Cadastro Realizado.');
		} catch (error: any) {
			ErrorResponse(response, 500, 'Ocorreu um erro', error.message);
		}
	}

	public async forgotPassword(request: Request, response: Response) {
		try {
			await esqueciSenha(request.body.email);

			SuccessResponse(response, 200, 'Verifique seu e-mail.');
		} catch (error: any) {
			ErrorResponse(response, 500, 'Ocorreu um erro', error.message);
		}
	}

	public async resetPassword(request: Request, response: Response) {
		//Query Params serão tratados pela validação com JOI

		const { doar, bem } = request.query;

		try {
			await resetarSenhaWeb(doar, bem);
			SuccessResponse(
				response,
				200,
				'Senha alterada, por favor verifique seu e-mail.',
			);
		} catch (error: any) {
			ErrorResponse(response, 500, 'Ocorreu um erro', error.message);
		}
	}

	public async ativarContaUsuario(request: Request, response: Response) {
		const { doarbem }: any = request.query

		try {
			await validaConta(doarbem)
			SuccessResponse(
				response,
				200,
				'Usuário Ativado.',
			);
		} catch (erro: any) {
			ErrorResponse(response, 500, 'Ocorreu um erro', erro.message);
		}
	}
}

export default new UserAuthController();
