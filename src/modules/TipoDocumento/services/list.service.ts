import prisma from '../../../config/prisma';
import { ITipoDocumento } from '../../../shared/interfaces';

export const listTipoDocumento = async (): Promise<ITipoDocumento[]> => {
	return await prisma.tipoDocumento.findMany()
};
