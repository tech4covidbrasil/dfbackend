import prisma from '@config/prisma';
import ApiErrors from 'src/shared/errors/ApiErrors';

interface UnidadeMedida {
	id: string;
	nome: string;
	abreviacao: string;
};

export const getUnidadeMedidaById = async (
	id: string,
): Promise<UnidadeMedida> => {
	const uMedida = await prisma.unidadeMedida.findUnique({
		where: {
			id,
		},
	});

	if(!uMedida) throw new ApiErrors("Unidade de Medida não encontrada")

	return uMedida
};
