import prisma from '@config/prisma';
import ApiErrors from 'src/shared/errors/ApiErrors';

interface UnidadeMedida {
	id: string;
	nome: string;
	abreviacao: string;
};

type UnidadeMedidaOmitId = Omit<UnidadeMedida, 'id'>;

export const updateUnidadeMedida = async ({
	nome,
	abreviacao,
}: UnidadeMedidaOmitId, id: string, ): Promise<UnidadeMedida> => {

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
