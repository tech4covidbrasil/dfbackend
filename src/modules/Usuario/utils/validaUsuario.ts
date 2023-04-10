import prisma from '../../../config/prisma';

export const validaNome = async (nome: string) => {
	return (await prisma.usuario.findUnique({
		where: {
			nome,
		},
	}))
		? true
		: false;
};

export const validaEmail = async (email: string) => {
	return (await prisma.usuario.findUnique({
		where: {
			email,
		},
	}))
		? true
		: false;
};
