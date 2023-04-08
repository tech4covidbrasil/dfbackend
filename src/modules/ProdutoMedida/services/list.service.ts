import prisma from '@config/prisma';
import { IProdutoMedida } from 'src/shared/interfaces';

export const listProdutoMedida = async (): Promise<IProdutoMedida[]> => {
	return await prisma.produtoMedida.findMany({
		include: {
			produto: {
				select: {
					nome: true
				}
			},
			unidadeMedida: {
				select: {
					abreviacao: true
				}
			}
		}
	});
};
