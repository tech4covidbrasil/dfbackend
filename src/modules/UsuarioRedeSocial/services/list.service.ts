import prisma from '@config/prisma';
import { IUsuarioRedeSocial } from 'src/shared/interfaces';

export const listUsuarioRedeSocial = async (): Promise<IUsuarioRedeSocial[]> => {
	return await prisma.usuarioRedeSocial.findMany()
};
