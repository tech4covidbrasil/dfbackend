import prisma from '@config/prisma';

interface IFoto {
	foto_nome: string;
	foto_path: string;
}

type IFotoOmitId = Omit<IFoto, 'id'>;

export const createFoto = async ({
	foto_nome,
	foto_path,
}: IFotoOmitId): Promise<IFoto> => {

	return prisma.foto.create({
		data: {
			foto_nome,
			foto_path,
		},
	});
};
