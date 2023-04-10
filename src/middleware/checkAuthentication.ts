import { NextFunction, Request, Response } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import ApiErrors from '../shared/errors/ApiErrors';
import { ErrorResponse } from '../shared/utils/ApiResponse';

interface Properties extends Request {
	token: string | JwtPayload;
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
				'Não é possível encontrar um token válido.',
				400,
			);

		jwt.verify(token, process.env.SECRET as string, (err, decoded) => {
			if (err) {
				throw new ApiErrors('Ocorreu um erro ao validar o token', 403);
			}

			//@ts-ignore
			request.id = decoded?.params.id;

			/* decoded obj:
				{
					params: { id: '1500ca5e-8ff7-4800-adda-600c53e97ff7' },
					iat: 1681080366,
					exp: 1681164966
				}
			*/
			// console.log(`RequestID: ${request.id}`)
			next();
		});
	} catch (error: any) {
		ErrorResponse(response,404,`JWTValidation`,`${error.message}`)
	}
};
