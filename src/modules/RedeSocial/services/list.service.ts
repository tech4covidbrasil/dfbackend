import prisma from '@config/prisma';
import { IRedeSocial } from 'src/shared/interfaces';

export const listEstado = async (): Promise<IRedeSocial[]> => {
	return await prisma.redeSocial.findMany()
};
