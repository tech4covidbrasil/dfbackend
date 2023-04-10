import prisma from '../../../config/prisma';

export const deleteDoacao = async (
	id: string,
): Promise<void> => {

	await prisma.doacao.delete({
		where: {
			id
		}
	})
};
