import prisma from '@config/prisma';

interface ICampanhaFavorita {
	campanhaId: string,
	usuarioId: string
}

export const likeCampanhasFavoritas = async ({
	usuarioId,
	campanhaId
}: ICampanhaFavorita): Promise<ICampanhaFavorita> => {
	return prisma.campanhaFavorita.create({
		data: {
			usuarioId,
			campanhaId
		},
	});
};
