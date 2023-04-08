import prisma from '@config/prisma';
import ApiErrors from 'src/shared/errors/ApiErrors';

interface IHistoricoUsuario {
	usuarioId: string;
	descricao: string;
}

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
