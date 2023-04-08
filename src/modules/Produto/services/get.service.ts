import prisma from '@config/prisma';
import ApiErrors from 'src/shared/errors/ApiErrors';
import { IProduto } from 'src/shared/interfaces';

// interface IProduto {
// 	id: string;
// 	nome: string;
// 	unidadeMedidaId: string
// };

export const getProdutoById = async (
	id: string,
): Promise<IProduto> => {
	const produto = await prisma.produto.findUnique({
		where: {
			id,
		},
	});

	if(!produto) throw new ApiErrors("Produto não encontrado")

	return produto
};
