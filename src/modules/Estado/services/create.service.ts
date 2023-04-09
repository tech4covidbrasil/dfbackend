import prisma from '@config/prisma';
import ApiErrors from 'src/shared/errors/ApiErrors';

interface IEstado {
	id: number;
	nome: string;
	abreviacao: string;
};

type IEstadoOmitId = Omit<IEstado, 'id'>;

export const createEstado = async ({
	nome, abreviacao
}: IEstadoOmitId): Promise<IEstado> => {

	const cidadeExists = await prisma.estados.findUnique({
		where: {
			nome
		}
	})

	if(cidadeExists) throw new ApiErrors("Estado já cadastrado", 400)

	return await prisma.estados.create({
		data: {
			nome,
			abreviacao
		},
	});
};
