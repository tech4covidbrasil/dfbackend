import prisma from '@config/prisma';

import { ICampanha } from 'src/shared/interfaces';

type ICampanhaOmit = Omit<ICampanha, 'id'>;

export const createCampanha = async ({
	usuarioId,
	nome,
	cidadeCampanha,
	estadoCampanha,
	tipoArrecadacao,
	descricao,
	dataTerminoCampanha,
	isValidated,
	isActive,
}: ICampanhaOmit): Promise<ICampanha> => {
	return prisma.campanha.create({
		data: {
			usuarioId,
			nome,
			cidadeCampanha,
			estadoCampanha,
			tipoArrecadacao,
			descricao,
			dataTerminoCampanha,
			isValidated,
			isActive,
		},
	});
};
