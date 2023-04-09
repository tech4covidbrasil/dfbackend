import prisma from '@config/prisma';

export const deleteUsuarioRedeSocial = async (
	id: number,
): Promise<void> => {

	await prisma.usuarioRedeSocial.delete({
		where: {
			id
		}
	})
};