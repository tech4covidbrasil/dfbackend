import prisma from '@config/prisma';
import { IDocumento } from 'src/shared/interfaces';

export const listDocumento = async (): Promise<IDocumento[]> => {
	return await prisma.documento.findMany();
};
