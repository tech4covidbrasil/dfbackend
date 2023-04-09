import prisma from '@config/prisma';

interface IHistoricoUsuario {
	usuarioId: string;
	descricao: string;
}

type IHistoricoUsuarioOmitId = Omit<IHistoricoUsuario, 'id'>;

export const updateHistoricoUsuario = async (
	{ usuarioId, descricao }: IHistoricoUsuarioOmitId,
	id: string,
): Promise<IHistoricoUsuario> => {
	return prisma.historicoUsuario.update({
		where: {
			id,
		},
		data: {
			usuarioId,
			descricao,
		},
	});
};
