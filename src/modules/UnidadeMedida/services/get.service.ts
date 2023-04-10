import prisma from '../../../config/prisma';
import ApiErrors from '../../../shared/errors/ApiErrors';
import { IUnidadeMedida } from '../../../shared/interfaces';

export const getUnidadeMedidaById = async (
	id: number,
): Promise<IUnidadeMedida> => {
	const uMedida = await prisma.unidadeMedida.findUnique({
		where: {
			id,
		},
	});

	if(!uMedida) throw new ApiErrors("Unidade de Medida não encontrada")

	return uMedida
};
