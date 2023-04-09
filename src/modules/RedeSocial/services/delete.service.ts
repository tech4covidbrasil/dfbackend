import prisma from '@config/prisma';

export const deleteRedeSocial = async (
	id: number,
): Promise<void> => {

	await prisma.redeSocial.delete({
		where: {
			id
		}
	})
};