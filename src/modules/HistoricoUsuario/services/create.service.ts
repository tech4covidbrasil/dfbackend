import prisma from '../../../config/prisma';
import { IHistoricoUsuario } from '../../../shared/interfaces';

type IHistoricoUsuarioOmitId = Omit<IHistoricoUsuario, 'id'>;

export const createHistoricoUsuario = async ({
	usuarioId,
	descricao,
}: IHistoricoUsuarioOmitId): Promise<IHistoricoUsuario> => {
	return await prisma.historicoUsuario.create({
		data: {
			usuarioId,
			descricao,
		},
	});
};
