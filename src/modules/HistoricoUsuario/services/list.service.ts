import prisma from '../../../config/prisma';
import { IHistoricoUsuario } from '../../../shared/interfaces';

export const listHistoricoUsuario = async (): Promise<IHistoricoUsuario[]> => {
	return await prisma.historicoUsuario.findMany();
};
