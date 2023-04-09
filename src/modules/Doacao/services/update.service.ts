import prisma from '@config/prisma';

interface IDoacao {
	usuarioId: string;
	campanhaId: string;
	produtoId: string;
	quantidadeDoada: number;
	isValidated: boolean;
}

type IDoacaoOmitId = Omit<IDoacao, 'id'>;

export const updateDoacao = async (
	{
		usuarioId,
		campanhaId,
		produtoId,
		quantidadeDoada,
		isValidated,
	}: IDoacaoOmitId,
	id: string,
): Promise<IDoacao> => {
	return prisma.doacao.update({
		where: {
			id,
		},
		data: {
			usuarioId,
			campanhaId,
			produtoId,
			quantidadeDoada,
			isValidated,
		},
	});
};
