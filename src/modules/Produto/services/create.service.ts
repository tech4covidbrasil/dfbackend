import prisma from '../../../config/prisma';
import { IProduto } from '../../../shared/interfaces';
import ApiErrors from '../../../shared/errors/ApiErrors';

type ProdutoOmitId = Omit<IProduto, 'id'>;

export const createProduto = async ({
	nome
}: ProdutoOmitId): Promise<IProduto> => {

	const produtoExists = await prisma.produto.findUnique({
		where: {
			nome
		}
	})

	if(produtoExists) throw new ApiErrors("Produto já cadastrado", 400)

	return await prisma.produto.create({
		data: {
			nome
		},
	});
};
