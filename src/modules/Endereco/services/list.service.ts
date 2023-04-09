import prisma from '@config/prisma';

interface IEndereco {
	ddd: string;
	telefone: string;
	cep: string;
	endereco: string;
	numero: number;
	complemento?: string | null;
	bairro: string;
	cidade: string;
	estado: string;
	usuarioId: string;
};

export const listEndereco = async (): Promise<IEndereco[]> => {
	return await prisma.endereco.findMany();
};

