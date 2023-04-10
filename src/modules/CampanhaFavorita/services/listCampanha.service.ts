import prisma from '../../../config/prisma';

interface ICampanhaFavorita {
	campanhaId: string,
	usuarioId: string
}

export const listCampanhasFavoritas = async (usuarioId: string): Promise<ICampanhaFavorita[]> => {
	return await prisma.campanhaFavorita.findMany({
		where: {
			usuarioId
		}
	});
};
