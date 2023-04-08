import prisma from '@config/prisma';
import { ICampanha } from 'src/shared/interfaces';

export const listCampanha = async (): Promise<ICampanha[]> => {
	return await prisma.campanha.findMany();
};
