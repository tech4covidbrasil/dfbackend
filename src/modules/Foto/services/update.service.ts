import prisma from '@config/prisma';
import ApiErrors from 'src/shared/errors/ApiErrors';

interface IFoto {
	foto_nome: string;
	foto_path: string;
}

type IFotoOmitId = Omit<IFoto, 'id'>;

export const updateFoto = async (
	{
		foto_nome,
		foto_path
	}: IFotoOmitId,
	id: string,
): Promise<IFoto> => {
	const foto = await prisma.foto.findUnique({
		where: {
			id,
		},
	});

	if (!foto) throw new ApiErrors('Foto não encontrada');

	return prisma.foto.update({
		where: {
			id,
		},
		data: {
			foto_nome,
			foto_path,
		},
	});
};
