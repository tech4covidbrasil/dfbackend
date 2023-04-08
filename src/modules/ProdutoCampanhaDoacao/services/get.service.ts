import prisma from '@config/prisma';
import ApiErrors from 'src/shared/errors/ApiErrors';
import { IProdutoCampanhaDoacao } from 'src/shared/interfaces';

export const getProdutoCampanhaDoacaoById = async (
	id: string,
): Promise<IProdutoCampanhaDoacao> => {
	const pcd = await prisma.produtoCampanhaDoacao.findUnique({
		where: {
			id,
		},
	});

	if(!pcd) throw new ApiErrors("Dados não encontrados")

	return pcd
};
