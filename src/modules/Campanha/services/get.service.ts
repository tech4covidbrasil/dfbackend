import prisma from '@config/prisma';
import ApiErrors from 'src/shared/errors/ApiErrors';
import { ICampanha } from 'src/shared/interfaces';

export const getCampanhaById = async (
	id: string,
): Promise<ICampanha> => {
	const campanha = await prisma.campanha.findUnique({
		where: {
			id,
		},
	});

	if(!campanha) throw new ApiErrors("Campanha não encontrada")

	return campanha
};
