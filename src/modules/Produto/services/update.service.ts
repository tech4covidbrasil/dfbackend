import prisma from '@config/prisma';
import ApiErrors from 'src/shared/errors/ApiErrors';

interface IProduto {
	id: string;
	nome: string;
	unidadeMedidaId: string
};

type IProdutoOmitId = Omit<IProduto, 'id'>;

export const updateProduto = async ({
	nome,
	unidadeMedidaId,
}: IProdutoOmitId, id: string, ): Promise<IProduto> => {

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

	return prisma.produto.update({
		where: {
			id,
		},
		data: {
			nome,
			unidadeMedidaId,
		},
	});
};
