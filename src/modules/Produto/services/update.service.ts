import prisma from '../../../config/prisma';
import ApiErrors from '../../../shared/errors/ApiErrors';
import { IProduto } from '../../../shared/interfaces';

type IProdutoOmitId = Omit<IProduto, 'id'>;

export const updateProduto = async ({
	nome,
}: IProdutoOmitId, id: number, ): Promise<IProduto> => {

	const produto = await prisma.produto.findUnique({
		where: {
			id,
		}
	})

	if(!produto) throw new ApiErrors("Produto não encontrado")

	const produtoExists = await prisma.produto.findUnique({
		where: {
			nome
		}
	})

	if(produtoExists && nome !== produto.nome) throw new ApiErrors("Produto já cadastrado com esse nome.")

	return await prisma.produto.update({
		where: {
			id,
		},
		data: {
			nome
		},
	});
};
