import prisma from '@config/prisma';
import { IProdutoCampanhaDoacao } from 'src/shared/interfaces';

type IPcdOmitId = Omit<IProdutoCampanhaDoacao, 'id'>;

export const updateProdutoCampanhaDoacao = async (
	{ produtoId, campanhaId, doacaoId, quantidadeDoada }: IPcdOmitId,
	id: string,
): Promise<IProdutoCampanhaDoacao> => {
	return prisma.produtoCampanhaDoacao.update({
		where: {
			id,
		},
		data: {
			produtoId,
			campanhaId,
			doacaoId,
			quantidadeDoada,
		},
	});
};
