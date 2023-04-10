import prisma from '../../../config/prisma';
import ApiErrors from '../../../shared/errors/ApiErrors';
import { IUnidadeMedida } from '../../../shared/interfaces';

type UnidadeMedidaOmitId = Omit<IUnidadeMedida, 'id'>;

export const updateUnidadeMedida = async ({
	nome,
	abreviacao,
}: UnidadeMedidaOmitId, id: number, ): Promise<IUnidadeMedida> => {

	const uMedida = await prisma.unidadeMedida.findUnique({
		where: {
			id
		}
	})

	if(!uMedida) throw new ApiErrors("Unidade de Medida não encontrada")

	const uMedidaNomeExists = await prisma.unidadeMedida.findUnique({
		where: {
			nome
		}
	})

	if(uMedidaNomeExists && nome !== uMedida.nome) throw new ApiErrors("Unidade de Medida já cadastrada com esse nome.")

	return prisma.unidadeMedida.update({
		where: {
			id,
		},
		data: {
			nome,
			abreviacao,
		},
	});
};
