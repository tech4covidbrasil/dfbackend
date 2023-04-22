import prisma from '../../../config/prisma';
import { ICampanha } from '../../../shared/interfaces';

type ICampanhaOmit = Omit<ICampanha, 'id'>;

export const createCampanha = async ({
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
}: ICampanhaOmit): Promise<ICampanha> => {
	
	return prisma.campanha.create({
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
