import prisma from '@config/prisma';
import { IProdutoCampanhaDoacao } from 'src/shared/interfaces';

type IPcdOmitId = Omit<IProdutoCampanhaDoacao, 'id'>;

export const createProdutoCampanhaDoacao = async ({
	produtoId,
	campanhaId,
	doacaoId,
	quantidadeDoada,
}: IPcdOmitId): Promise<IProdutoCampanhaDoacao> => {
	return prisma.produtoCampanhaDoacao.create({
		data: {
			produtoId,
			campanhaId,
			doacaoId,
			quantidadeDoada,
		},
	});
};
