import prisma from '../../../config/prisma';
import { IProdutoMedida } from '../../../shared/interfaces';

import ApiErrors from '../../../shared/errors/ApiErrors';

export const getProdutoMedidaById = async (
	id: string,
): Promise<IProdutoMedida> => {
	const produtoMedida = await prisma.produtoMedida.findUnique({
		where: {
			id,
		},
	});

	if(!produtoMedida) throw new ApiErrors("Nenhuma referencia encontrada")

	return produtoMedida
};
