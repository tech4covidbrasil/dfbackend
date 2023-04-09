import prisma from '@config/prisma';

interface IHistoricoUsuario {
	usuarioId: string;
	descricao: string;
}

export const listHistoricoUsuario = async (): Promise<IHistoricoUsuario[]> => {
	return await prisma.historicoUsuario.findMany();
};
