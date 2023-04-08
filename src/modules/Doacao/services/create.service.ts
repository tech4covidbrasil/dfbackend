import prisma from '@config/prisma';

interface IDoacao {
	usuarioId: string;
	campanhaId: string;
	produtoId: string;
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
}: IDoacaoOmitId): Promise<IDoacao> => {
	return prisma.doacao.create({
		data: {
			usuarioId,
			campanhaId,
			produtoId,
			quantidadeDoada,
			isValidated,
		},
	});
};
