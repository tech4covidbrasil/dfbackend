import prisma from '@config/prisma';

interface IHistoricoUsuario {
	usuarioId: string;
	descricao: string;
}

type IHistoricoUsuarioOmitId = Omit<IHistoricoUsuario, 'id'>;

export const createHistoricoUsuario = async ({
	usuarioId,
	descricao,
}: IHistoricoUsuarioOmitId): Promise<IHistoricoUsuario> => {
	return prisma.historicoUsuario.create({
		data: {
			usuarioId,
			descricao,
		},
	});
};
