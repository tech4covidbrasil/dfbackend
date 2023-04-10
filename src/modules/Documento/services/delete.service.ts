import prisma from '../../../config/prisma';

export const deleteDocumento = async (
	id: string,
): Promise<void> => {

	await prisma.documento.delete({
		where: {
			id
		}
	})
};