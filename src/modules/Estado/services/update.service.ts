import prisma from '@config/prisma';
import ApiErrors from 'src/shared/errors/ApiErrors';

interface IEstado {
	id: number;
	nome: string;
	abreviacao: string;
};

type IEstadoOmitId = Omit<IEstado, 'id'>;

export const updateEstado = async ({
	nome, abreviacao
}: IEstadoOmitId, id: number, ): Promise<IEstado> => {

	const estado = await prisma.estados.findUnique({
		where: {
			id,
		}
	})

	if(!estado) throw new ApiErrors("Estado não encontrado")

	const estadoExists = await prisma.estados.findUnique({
		where: {
			nome
		}
	})

	if(estadoExists && nome !== estado.nome) throw new ApiErrors("Estado já cadastrado com esse nome.")

	return await prisma.estados.update({
		where: {
			id,
		},
		data: {
			nome,abreviacao
		},
	});
};
