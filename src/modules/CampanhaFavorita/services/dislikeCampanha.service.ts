import prisma from '../../../config/prisma';

export const dislikeCampanhasFavoritas = async (
	id: string
): Promise<void> => {
	await prisma.campanhaFavorita.delete({
		where: {
			id
		},
	});
};
