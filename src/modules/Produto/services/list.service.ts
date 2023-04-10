import prisma from '../../../config/prisma';
import { IProduto } from '../../../shared/interfaces';

export const listProduto = async (): Promise<IProduto[]> => {
	return await prisma.produto.findMany()
};
