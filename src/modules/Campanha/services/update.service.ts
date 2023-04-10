import prisma from '../../../config/prisma';
import { ICampanha } from '../../../shared/interfaces';

type ICampanhaOmitId = Omit<ICampanha, 'id'>;

export const updateCampanha = async (
	{
		nome,
		cidadeCampanha,
		estadoCampanha,
		tipoArrecadacao,
		descricao,
		dataCriacaoCampanha,
		dataTerminoCampanha,
		isValidated,
		isActive,
		usuarioId
	}: ICampanhaOmitId,
	id: string,
): Promise<ICampanha> => {

	return prisma.campanha.update({
		where: {
			id,
		},
		data: {
			nome,
			cidadeCampanha,
			estadoCampanha,
			tipoArrecadacao,
			descricao,
			dataCriacaoCampanha,
			dataTerminoCampanha,
			isValidated,
			isActive,
			usuarioId
		},
	});
};
