import prisma from '@config/prisma';
import ApiErrors from 'src/shared/errors/ApiErrors';

interface IFoto {
	foto_nome: string;
	foto_path: string;
}

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
