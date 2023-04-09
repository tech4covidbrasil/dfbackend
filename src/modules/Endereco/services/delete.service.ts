import prisma from '@config/prisma';

export const deleteEndereco = async (
	id: string,
): Promise<void> => {

	await prisma.endereco.delete({
		where: {
			id
		}
	})
};
