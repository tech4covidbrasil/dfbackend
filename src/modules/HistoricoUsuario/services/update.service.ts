import prisma from '../../../config/prisma';
import { IHistoricoUsuario } from '../../../shared/interfaces';

type IHistoricoUsuarioOmitId = Omit<IHistoricoUsuario, 'id'>;

export const updateHistoricoUsuario = async (
	{ usuarioId, descricao }: IHistoricoUsuarioOmitId,
	id: string,
): Promise<IHistoricoUsuario> => {
	return prisma.historicoUsuario.update({
		where: {
			id,
		},
		data: {
			usuarioId,
			descricao,
		},
	});
};
