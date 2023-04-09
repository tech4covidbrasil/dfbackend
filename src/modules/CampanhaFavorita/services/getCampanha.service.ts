import prisma from '@config/prisma';
import ApiErrors from 'src/shared/errors/ApiErrors';
import { IUsuario } from 'src/shared/interfaces';

export const campanhaFavoritaById = async (
	campanhaId: string,
	usuarioId: string
): Promise<IUsuario> => {
	const campanhaFavoritaPorUsuario = await prisma.usuario.findFirst({
		where: {
			id: usuarioId
		},
		include: {
			Campanha : {
				where: {
					id: campanhaId
				}
			}
		}
	});

	if(!campanhaFavoritaPorUsuario) throw new ApiErrors("Campanha não encontrada")

	return campanhaFavoritaPorUsuario
};
