import prisma from '@config/prisma';

export const deleteEstado = async (
	id: number,
): Promise<void> => {

	await prisma.estados.delete({
		where: {
			id
		}
	})
};