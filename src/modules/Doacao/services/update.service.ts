import prisma from '../../../config/prisma';
import { IDoacao } from '../../../shared/interfaces';

type IDoacaoOmitId = Omit<IDoacao, 'id'>;

export const updateDoacao = async (
	{
		usuarioId,
		campanhaId,
		produtoId,
		quantidadeDoada,
		isValidated,
	}: IDoacaoOmitId,
	id: string,
): Promise<IDoacao> => {
	return prisma.doacao.update({
		where: {
			id,
		},
		data: {
			usuarioId,
			campanhaId,
			produtoId,
			quantidadeDoada,
			isValidated,
		},
	});
};
