import prisma from '../../../config/prisma';

export const deleteProduto = async (
	id: number,
): Promise<void> => {

	await prisma.produto.delete({
		where: {
			id
		}
	})
};
