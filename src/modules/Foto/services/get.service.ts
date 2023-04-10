import prisma from '../../../config/prisma';
import ApiErrors from '../../../shared/errors/ApiErrors';
import { IFoto } from '../../../shared/interfaces';

export const getFotoById = async (
	id: string,
): Promise<IFoto> => {
	const foto = await prisma.foto.findUnique({
		where: {
			id,
		},
	});

	if(!foto) throw new ApiErrors("Foto não encontrada")

	return foto
};
