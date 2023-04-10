import prisma from '../../../config/prisma';
import { ICidade } from '../../../shared/interfaces';

export const listCidade = async (): Promise<ICidade[]> => {
	return await prisma.cidades.findMany()
};
