import prisma from '../../../config/prisma';
import { IFoto } from '../../../shared/interfaces';

export const listFoto = async (): Promise<IFoto[]> => {
	return await prisma.foto.findMany();
};
