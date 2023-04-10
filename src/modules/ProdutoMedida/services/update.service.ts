import prisma from '../../../config/prisma';
import { IProdutoMedida } from '../../../shared/interfaces';

type IProdutoMedidaOmitId = Omit<IProdutoMedida, 'id'>;

export const updateProdutoMedida = async (
	{ produtoId, unidadeMedidaId }: IProdutoMedidaOmitId,
	id: string,
): Promise<IProdutoMedida> => {
	return prisma.produtoMedida.update({
		where: {
			id,
		},
		data: {
			produtoId,
			unidadeMedidaId,
		},
	});
};
