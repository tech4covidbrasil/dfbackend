import prisma from '@config/prisma';
import { IProduto } from 'src/shared/interfaces';
import ApiErrors from 'src/shared/errors/ApiErrors';

// interface IProduto {
// 	id: string;
// 	nome: string;
// 	// unidadeMedidaId: string
// };

type ProdutoOmitId = Omit<IProduto, 'id'>;

export const createProduto = async ({
	nome,
	// unidadeMedidaId,
}: ProdutoOmitId): Promise<IProduto> => {

	const produtoExists = await prisma.produto.findUnique({
		where: {
			nome
		}
	})

	if(produtoExists) throw new ApiErrors("Produto já cadastrado", 400)

	return prisma.produto.create({
		data: {
			nome,
			// unidadeMedidaId,
		},
	});
};
