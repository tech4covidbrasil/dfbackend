import prisma from '../../../config/prisma';

export const deleteTipoDocumento = async (
	id: number,
): Promise<void> => {

	await prisma.tipoDocumento.delete({
		where: {
			id
		}
	})
};
