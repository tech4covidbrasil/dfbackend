import prisma from '@config/prisma';

export const deleteHistoricoUsuario = async (
	id: string,
): Promise<void> => {

	await prisma.historicoUsuario.delete({
		where: {
			id
		}
	})
};
