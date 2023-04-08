import prisma from '@config/prisma';

export const deleteProduto = async (
	id: string,
): Promise<void> => {

	await prisma.produto.delete({
		where: {
			id
		}
	})
};
