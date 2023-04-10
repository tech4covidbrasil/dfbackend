import prisma from '../../../config/prisma';
import { ICampanha } from '../../../shared/interfaces';

type ICampanhaOmit = Omit<ICampanha, 'id'>;

export const createCampanha = async ({
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
}: ICampanhaOmit): Promise<ICampanha> => {
	return prisma.campanha.create({
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
