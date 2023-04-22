import prisma from '../../../config/prisma';
import { ICampanha } from '../../../shared/interfaces';

type ICampanhaOmitId = Omit<ICampanha, 'id'>;

export const updateCampanha = async (
	{
		nome,
		descricao,
		cepCampanha,
		ruaCampanha,
		numeroRuaCampanha,
		complementoCampanha,
		bairroCampanha,
		cidadeCampanha,
		estadoCampanha,
		tipoArrecadacao,
		metaItensArrecadados,
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
			descricao,
			cepCampanha,
			ruaCampanha,
			numeroRuaCampanha,
			complementoCampanha,
			bairroCampanha,
			cidadeCampanha,
			estadoCampanha,
			tipoArrecadacao,
			metaItensArrecadados,
			dataTerminoCampanha,
			isValidated,
			isActive,
			usuarioId
		},
	});
};
