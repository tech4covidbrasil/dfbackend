import prisma from '../../../config/prisma';
import { IProdutoMedida } from '../../../shared/interfaces';

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
