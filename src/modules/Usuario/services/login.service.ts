import ApiErrors from '../../../shared/errors/ApiErrors';
import { IUsuario } from '../../../shared/interfaces';
import { decryptPwd } from '../utils/password';
import { geradorToken } from '../utils/token';
import { getUsuarioByEmail } from './get.service';
import { response } from 'express';

interface IRequest {
	email: string;
	senha: string;
}

interface IResponse {
	usuario: IUsuario;
	token: string;
}

export const login = async ({ email, senha }: IRequest): Promise<IResponse> => {

	const usuario = await getUsuarioByEmail(email)

	if (!usuario) throw new ApiErrors('Usuário não encontrado.');

	const decodePwd = await decryptPwd(senha, usuario.senha);

	if (!decodePwd) throw new ApiErrors('Senha Inválida', 400);

	const token = geradorToken({ id: usuario.id });

	// response.header('x-auth-header', token).send()

	return {
		usuario,
		token
	};
};
