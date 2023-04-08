import prisma from '@config/prisma';
import ApiErrors from 'src/shared/errors/ApiErrors';
import { IUsuario } from 'src/shared/interfaces';

export const getUsuarioById = async (id: string): Promise<IUsuario> => {
	const usuario = await prisma.usuario.findUnique({
		where: {
			id,
		},
	});

	if (!usuario) throw new ApiErrors('Usuario não encontrado');

	return usuario;
};

export const getUsuarioByEmail = async (
	email: string,
): Promise<IUsuario> => {
	if (!email) throw new ApiErrors('Informe um email válido', 400);

	const buscaEmail = await prisma.usuario.findUnique({
		where: {
			email,
		},
	});

	if (!buscaEmail) throw new ApiErrors('Nenhum registro encontrado');

	return buscaEmail;
};
