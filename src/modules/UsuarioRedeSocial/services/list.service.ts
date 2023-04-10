import prisma from '../../../config/prisma';
import { IUsuarioRedeSocial } from '../../../shared/interfaces';

export const listUsuarioRedeSocial = async (): Promise<IUsuarioRedeSocial[]> => {
	return await prisma.usuarioRedeSocial.findMany()
};
