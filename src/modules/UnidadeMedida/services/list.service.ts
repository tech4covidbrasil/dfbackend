import prisma from '../../../config/prisma';
import { IUnidadeMedida } from '../../../shared/interfaces';

export const listUnidadeMedida = async (): Promise<IUnidadeMedida[]> => {
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
