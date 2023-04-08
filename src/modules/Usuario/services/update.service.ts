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

type IUsuarioOmitId = Omit<IUsuario, 'id'>;

export const updateUsuario = async (
	data: IUsuarioOmitId,
	id: string,
): Promise<IUsuario> => {
	return prisma.usuario.update({
		where: {
			id,
		},
		data
	});
};
