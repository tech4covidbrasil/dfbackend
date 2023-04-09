import prisma from '@config/prisma';
import ApiErrors from 'src/shared/errors/ApiErrors';
import { ICidade } from 'src/shared/interfaces';

export const getCidadeById = async (
	id: number,
): Promise<ICidade> => {
	const cidade = await prisma.cidades.findUnique({
		where: {
			id,
		},
	});

	if(!cidade) throw new ApiErrors("Cidade não encontrada")

	return cidade
}