import prisma from '../../../config/prisma';
import { IRedeSocial } from '../../../shared/interfaces';

export const listRedeSocial = async (): Promise<IRedeSocial[]> => {
	return await prisma.redeSocial.findMany()
};
