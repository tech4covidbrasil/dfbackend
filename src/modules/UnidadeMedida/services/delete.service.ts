import prisma from '../../../config/prisma';

export const deleteUnidadeMedida = async (
	id: number,
): Promise<void> => {

	await prisma.unidadeMedida.delete({
		where: {
			id
		}
	})
};
