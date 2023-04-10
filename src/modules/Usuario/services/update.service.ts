import prisma from '../../../config/prisma';
import { IUsuario } from '../../../shared/interfaces';

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
