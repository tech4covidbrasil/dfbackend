import prisma from '../../../config/prisma';
import ApiErrors from '../../../shared/errors/ApiErrors';
import { IUnidadeMedida } from '../../../shared/interfaces';


type UnidadeMedidaOmitId = Omit<IUnidadeMedida, 'id'>;

export const createUnidadeMedida = async ({
	nome,
	abreviacao,
}: UnidadeMedidaOmitId): Promise<IUnidadeMedida> => {

	const uMedidaExists = await prisma.unidadeMedida.findUnique({
		where: {
			nome
		}
	})

	if(uMedidaExists) throw new ApiErrors("Unidade de Medida já cadastrado", 400)

	return prisma.unidadeMedida.create({
		data: {
			nome,
			abreviacao,
		},
	});
};
