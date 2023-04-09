import prisma from '@config/prisma';
import ApiErrors from 'src/shared/errors/ApiErrors';

interface IDoacao {
	usuarioId: string;
	campanhaId: string;
	produtoId: string;
	quantidadeDoada: number;
	isValidated: boolean
}
export const getDoacaoById = async (
	id: string,
): Promise<IDoacao> => {
	const doacao = await prisma.doacao.findUnique({
		where: {
			id,
		},
	});

	if(!doacao) throw new ApiErrors("Doacao não encontrado")

	return doacao
};
