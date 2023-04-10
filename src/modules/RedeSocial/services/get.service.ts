import prisma from '../../../config/prisma';
import ApiErrors from '../../../shared/errors/ApiErrors';
import { IRedeSocial } from '../../../shared/interfaces';

export const getRedeSocialById = async (
	id: number,
): Promise<IRedeSocial> => {
	const redeSocial = await prisma.redeSocial.findUnique({
		where: {
			id,
		},
	});

	if(!redeSocial) throw new ApiErrors("Rede Social não encontrado")

	return redeSocial
}