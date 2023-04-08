import prisma from '@config/prisma';

export const deleteUnidadeMedida = async (
	id: string,
): Promise<void> => {

	await prisma.unidadeMedida.delete({
		where: {
			id
		}
	})
};
