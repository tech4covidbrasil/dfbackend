import prisma from '../../../config/prisma';

export const deleteFoto = async (
	id: string,
): Promise<void> => {

	await prisma.foto.delete({
		where: {
			id
		}
	})
};
