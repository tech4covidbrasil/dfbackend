import prisma from '../../../config/prisma';
import ApiErrors from '../../../shared/errors/ApiErrors';

interface IEstado {
	id: number;
	nome: string;
	abreviacao: string;
};

export const getEstadoById = async (
	id: number,
): Promise<IEstado> => {
	const estado = await prisma.estados.findUnique({
		where: {
			id,
		},
	});

	if(!estado) throw new ApiErrors("Estado não encontrado")

	return estado
}