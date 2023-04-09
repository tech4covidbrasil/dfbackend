import prisma from '@config/prisma';
import ApiErrors from 'src/shared/errors/ApiErrors';
import { IUsuarioRedeSocial } from 'src/shared/interfaces';

export const getUsuarioRedeSocialById = async (
	id: number,
): Promise<IUsuarioRedeSocial> => {
	const redeSocial = await prisma.usuarioRedeSocial.findUnique({
		where: {
			id,
		},
	});

	if(!redeSocial) throw new ApiErrors("Rede Social não encontrado")

	return redeSocial
}