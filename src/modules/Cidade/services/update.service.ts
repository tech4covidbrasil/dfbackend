import prisma from '../../../config/prisma';
import ApiErrors from '../../../shared/errors/ApiErrors';
import { ICidade } from '../../../shared/interfaces';

type ICidadeOmitId = Omit<ICidade, 'id'>;

export const updateCidade = async ({
	nome,
}: ICidadeOmitId, id: number, ): Promise<ICidade> => {

	const cidade = await prisma.cidades.findUnique({
		where: {
			id,
		}
	})

	if(!cidade) throw new ApiErrors("Cidade não encontrado")

	const cidadeExists = await prisma.cidades.findUnique({
		where: {
			nome
		}
	})

	if(cidadeExists && nome !== cidade.nome) throw new ApiErrors("Cidade já cadastrado com esse nome.")

	return await prisma.cidades.update({
		where: {
			id,
		},
		data: {
			nome
		},
	});
};
