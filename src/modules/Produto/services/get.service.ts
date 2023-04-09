import prisma from '@config/prisma';
import ApiErrors from 'src/shared/errors/ApiErrors';
import { IProduto } from 'src/shared/interfaces';

export const getProdutoById = async (
	id: number,
): Promise<IProduto> => {
	const produto = await prisma.produto.findUnique({
		where: {
			id,
		},
	});

	if(!produto) throw new ApiErrors("Produto não encontrado")

	return produto
};
