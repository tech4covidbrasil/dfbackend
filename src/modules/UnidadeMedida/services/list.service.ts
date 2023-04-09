import prisma from '@config/prisma';

type UnidadeMedida = {
	id: string;
	nome: string;
	abreviacao: string;
};

export const listUnidadeMedida = async (): Promise<UnidadeMedida[]> => {
	return await prisma.unidadeMedida.findMany({
		include: {
			ProdutoMedida: {
				include: {
					produto: {
						include: {
							Doacao: true
						}
					}
				}
			}
		}
	});
};
