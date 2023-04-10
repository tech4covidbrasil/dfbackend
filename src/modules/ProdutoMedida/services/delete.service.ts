import prisma from '../../../config/prisma';

export const deleteProdutoMedida = async (
	id: string,
): Promise<void> => {

	await prisma.produtoMedida.delete({
		where: {
			id
		}
	})
};
