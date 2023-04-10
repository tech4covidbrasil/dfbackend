import prisma from '../../../config/prisma';

export const deleteUsuario = async (
	id: string,
): Promise<void> => {

	await prisma.usuario.delete({
		where: {
			id
		}
	})
};
