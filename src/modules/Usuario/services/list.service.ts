import prisma from '../../../config/prisma';
import { IUsuario } from '../../../shared/interfaces';

export const listUsuario = async (): Promise<IUsuario[]> => {
	return await prisma.usuario.findMany();
};