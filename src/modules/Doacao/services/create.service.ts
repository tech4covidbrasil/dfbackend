import prisma from '@config/prisma';

interface IDoacao {
	usuarioId: string;
	campanhaId: string;
	produtoId: number;
	quantidadeDoada: number;
	isValidated: boolean;
}

type IDoacaoOmitId = Omit<IDoacao, 'id'>;

export const createDoacao = async ({
	usuarioId,
	campanhaId,
	produtoId,
	quantidadeDoada,
	isValidated,
}: IDoacaoOmitId): Promise<void> => {

	return await prisma.doacao.create({
		data: {
			usuarioId,
			campanhaId,
			produtoId,
			quantidadeDoada,
			isValidated,
		},
	});
};
