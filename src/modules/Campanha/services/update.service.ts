import prisma from '@config/prisma';
import { ICampanha } from 'src/shared/interfaces';

type ICampanhaOmitId = Omit<ICampanha, 'id'>;

export const updateCampanha = async (
	{
		usuarioId,
		nome,
		tipoArrecadacao,
		descricao,
		dataCriacaoCampanha,
		dataTerminoCampanha,
		isValidated,
		isActive,
	}: ICampanhaOmitId,
	id: string,
): Promise<ICampanha> => {

	return prisma.campanha.update({
		where: {
			id,
		},
		data: {
			usuarioId,
			nome,
			tipoArrecadacao,
			descricao,
			dataCriacaoCampanha,
			dataTerminoCampanha,
			isValidated,
			isActive,
		},
	});
};
