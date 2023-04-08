import prisma from '@config/prisma';
import ApiErrors from 'src/shared/errors/ApiErrors';

interface UnidadeMedida {
	id: string;
	nome: string;
	abreviacao: string;
};

type UnidadeMedidaOmitId = Omit<UnidadeMedida, 'id'>;

export const createUnidadeMedida = async ({
	nome,
	abreviacao,
}: UnidadeMedidaOmitId): Promise<UnidadeMedida> => {

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
