import prisma from '../../../config/prisma';
import { IDoacao } from '../../../shared/interfaces';

type IDoacaoOmitId = Omit<IDoacao, 'id'>;

export const createDoacao = async ({
	usuarioId,
	campanhaId,
	produtoId,
	quantidadeDoada,
	isValidated,
}: IDoacaoOmitId): Promise<IDoacao> => {

	return await prisma.doacao.create({
		data: {
			usuarioId,
			campanhaId,
			produtoId,
			quantidadeDoada,
			isValidated,
		},
	});
};
