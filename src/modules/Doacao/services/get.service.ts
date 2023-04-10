import prisma from '../../../config/prisma';
import ApiErrors from '../../../shared/errors/ApiErrors';
import { IDoacao } from '../../../shared/interfaces';

export const getDoacaoById = async (
	id: string,
): Promise<IDoacao> => {
	const doacao = await prisma.doacao.findUnique({
		where: {
			id,
		},
	});

	if(!doacao) throw new ApiErrors("Doacao não encontrado")

	return doacao
};
