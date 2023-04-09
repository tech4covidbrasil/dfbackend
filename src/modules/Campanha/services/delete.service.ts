import prisma from '@config/prisma';

export const deleteCampanha = async (
	id: string,
): Promise<void> => {

	await prisma.campanha.delete({
		where: {
			id
		}
	})
};
