import prisma from '@config/prisma';
import { IProdutoCampanhaDoacao } from 'src/shared/interfaces';

export const listProdutoCampanhaDoacao = async (): Promise<IProdutoCampanhaDoacao[]> => {
	return await prisma.produtoCampanhaDoacao.findMany();
};
