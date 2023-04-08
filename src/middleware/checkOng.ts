import prisma from '@config/prisma';
import { ErrorResponse } from 'src/shared/utils/ApiResponse';
import { NextFunction, Request, Response } from 'express';
import ApiErrors from 'src/shared/errors/ApiErrors';

export const checkOng = async (
	request: Request,
	response: Response,
	next: NextFunction,
): Promise<void> => {
	try {
		console.log(`RequestID: ${request.id}`);
		const usuario = await prisma.usuario.findUnique({
			where: {
				id: request.id,
			},
		});
		console.log(`Usuario: ${usuario?.tipoUsuario}`);

		if (!usuario)
			// throw ErrorResponse(response, 404, 'Nenhum usuário encontrado');
			throw new ApiErrors(`Nenhum usuário encontrado.`);

		if (usuario.tipoUsuario === 'DOADOR')
			// throw ErrorResponse(response, 401, 'Usuário não autorizado');
			throw new ApiErrors(`Usuário não é uma ONG`);

		// console.log(`Passei nas validações: ${usuario.nome}`)
		next();
	} catch (error: any) {
		ErrorResponse(response, 404, 'ONGValidation', `${error.message}`);
	}
};
