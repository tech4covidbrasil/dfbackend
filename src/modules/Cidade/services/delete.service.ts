import prisma from '../../../config/prisma';

export const deleteCidade = async (
	id: number,
): Promise<void> => {

	await prisma.cidades.delete({
		where: {
			id
		}
	})
};