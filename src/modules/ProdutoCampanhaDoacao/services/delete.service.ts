import prisma from '@config/prisma';

export const deleteProdutoCampanhaDoacao = async (
	id: string,
): Promise<void> => {

	await prisma.produtoCampanhaDoacao.delete({
		where: {
			id
		}
	})
};
