import prisma from '../../../config/prisma';
import ApiErrors from '../../../shared/errors/ApiErrors';
import { ICampanha } from '../../../shared/interfaces';

export const filtrarCampanha = async (
	cidade: any,
	estado: any,
	tipo_arrecadacao: any,
): Promise<ICampanha[]> => {
	if (!estado && !cidade && !tipo_arrecadacao)
		throw new ApiErrors('Escolha um filtro');

	const campanhasFiltradas: ICampanha[] = await prisma.campanha.findMany({
		where: {
			OR: [
				{ cidadeCampanha: cidade },
				{ estadoCampanha: estado },
				{ tipoArrecadacao: tipo_arrecadacao },
			],
		},
	});

	if (!campanhasFiltradas)
		throw new ApiErrors('Ocorreu um erro ao filtrar as campanhas');

	return campanhasFiltradas;
};
