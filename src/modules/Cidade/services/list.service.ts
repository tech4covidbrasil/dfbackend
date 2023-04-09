import prisma from '@config/prisma';
import { ICidade } from 'src/shared/interfaces';

export const listCidade = async (): Promise<ICidade[]> => {
	return await prisma.cidades.findMany()
};
