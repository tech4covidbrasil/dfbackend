import prisma from '@config/prisma';
import { IProdutoMedida } from 'src/shared/interfaces';

type IProdutoMedidaOmitId = Omit<IProdutoMedida, 'id'>;

export const createProdutoMedida = async ({
	produtoId,
	unidadeMedidaId
}: IProdutoMedidaOmitId): Promise<IProdutoMedida> => {
	return prisma.produtoMedida.create({
		data: {
			produtoId,
			unidadeMedidaId
		},
	});
};
