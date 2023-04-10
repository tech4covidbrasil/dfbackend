import prisma from '../../../config/prisma';
import { IDocumento } from '../../../shared/interfaces';

export const listDocumento = async (): Promise<IDocumento[]> => {
	return await prisma.documento.findMany();
};
