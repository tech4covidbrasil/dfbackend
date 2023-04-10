import prisma from '../../../config/prisma';
import ApiErrors from '../../../shared/errors/ApiErrors';
import { IHistoricoUsuario } from '../../../shared/interfaces';

export const gethistoricoUsuarioById = async (
	id: string,
): Promise<IHistoricoUsuario> => {
	const historicoUsuario = await prisma.historicoUsuario.findUnique({
		where: {
			id,
		},
	});

	if(!historicoUsuario) throw new ApiErrors("Nenhum registro encontrado")

	return historicoUsuario
};
