import prisma from '@config/prisma';

export const deleteTipoDocumento = async (
	id: string,
): Promise<void> => {

	await prisma.tipoDocumento.delete({
		where: {
			id
		}
	})
};
