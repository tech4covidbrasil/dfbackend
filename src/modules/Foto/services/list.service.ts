import prisma from '@config/prisma';

interface IFoto {
	foto_nome: string;
	foto_path: string;
}

export const listFoto = async (): Promise<IFoto[]> => {
	return await prisma.foto.findMany();
};
