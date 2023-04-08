import prisma from '@config/prisma';
import { IProduto } from 'src/shared/interfaces';

export const listProduto = async (): Promise<IProduto[]> => {
	return await prisma.produto.findMany()
};
