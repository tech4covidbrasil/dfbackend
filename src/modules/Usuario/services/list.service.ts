import prisma from '@config/prisma';

interface IUsuario {
	nome: string;
	email: string;
	senha: string;
	senhaResetToken?: string | null;
	senhaResetExpires?: Date | null;
	tipoUsuario: string;
	termos: boolean;
	lgpd: boolean;
	isValidated?: boolean | null;
}

export const listUsuario = async (): Promise<IUsuario[]> => {
	return await prisma.usuario.findMany();
};