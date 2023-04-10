import prisma from '../../../config/prisma';
import ApiErrors from '../../../shared/errors/ApiErrors';
import { ICampanha } from '../../../shared/interfaces';

export const minhasCampanhasAtivas = async (
	id: string,
): Promise<ICampanha[]> => {
	const campanha: ICampanha[] = await prisma.campanha.findMany({
		where: {
			usuarioId: id,
			isActive: true
		},
	});

	if(!campanha) throw new ApiErrors("Nenhuma campanha encontrada")

	return campanha
};
