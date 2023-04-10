import prisma from '../../../config/prisma';
import { IFoto } from '../../../shared/interfaces';

type IFotoOmitId = Omit<IFoto, 'id'>;

export const createFoto = async ({
	foto_nome,
	foto_path,
	usuarioId
}: IFotoOmitId): Promise<IFoto> => {

	return prisma.foto.create({
		data: {
			foto_nome,
			foto_path,
			usuarioId
		},
	});
};
