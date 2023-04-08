import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
// import { decodeToken } from 'src/modules/Usuario/utils/token';
import ApiErrors from 'src/shared/errors/ApiErrors';
import { ErrorResponse } from 'src/shared/utils/ApiResponse';

interface IUserInfo {
	params: {
		id: string
	}
}

export const verificaAutenticacaoUsuario = async (
	request: Request,
	response: Response,
	next: NextFunction,
): Promise<void> => {
	try {
		const jwtHeader = request.headers.authorization;
		// console.log(`Authorization Header: ${jwtHeader}`)

		if (!jwtHeader) throw new ApiErrors('JWT Token não encontrado.');

		const [, token] = jwtHeader.split(' ');
		// console.log(`Token: ${token}`)

		if (!token)
			throw new ApiErrors(
				'Não é possível verificar o token no header.',
				400,
			);

		jwt.verify(token, process.env.SECRET as string, (err, userInfo) => {
			if (err) {
				throw new ApiErrors('Ocorreu um erro ao validar o token', 403);
			}

			request.id = userInfo?.params.id as string;
			// console.log(`RequestID: ${request.id}`)
			next();
		});
	} catch (error: any) {
		ErrorResponse(response,404,`JWTValidation`,`${error.message}`)
	}
};
