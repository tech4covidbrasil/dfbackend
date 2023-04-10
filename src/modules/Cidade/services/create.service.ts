import prisma from '../../../config/prisma';
import ApiErrors from '../../../shared/errors/ApiErrors';

interface ICidade {
	id: number;
	nome: string;
};

type ICidadeOmitId = Omit<ICidade, 'id'>;

export const createCidade = async ({
	nome,
}: ICidadeOmitId): Promise<ICidade> => {

	const cidadeExists = await prisma.cidades.findUnique({
		where: {
			nome
		}
	})

	if(cidadeExists) throw new ApiErrors("Tipo de Documento já cadastrado", 400)

	return await prisma.cidades.create({
		data: {
			nome,
		},
	});
};
