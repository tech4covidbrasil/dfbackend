import prisma from '@config/prisma';

interface IDoacao {
	usuarioId: string;
	campanhaId: string;
	produtoId: string;
	quantidadeDoada: number;
	isValidated: boolean
}

export const listDoacao = async (): Promise<IDoacao[]> => {
	return await prisma.doacao.findMany();
};
