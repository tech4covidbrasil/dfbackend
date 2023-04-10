import prisma from '../../../config/prisma';
import { IDoacao } from '../../../shared/interfaces';

export const listDoacao = async (): Promise<IDoacao[]> => {
	return await prisma.doacao.findMany();
};
