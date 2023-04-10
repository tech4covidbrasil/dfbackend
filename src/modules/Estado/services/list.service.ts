import prisma from '../../../config/prisma';

interface IEstado {
	id: number;
	nome: string;
	abreviacao: string;
};

export const listEstado = async (): Promise<IEstado[]> => {
	return await prisma.estados.findMany()
};
