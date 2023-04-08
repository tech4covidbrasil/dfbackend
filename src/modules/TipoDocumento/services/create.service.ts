import prisma from '@config/prisma';
import ApiErrors from 'src/shared/errors/ApiErrors';

interface ITipoDocumento {
	id: string;
	docNome: string;
};

type TipoDocumentoOmitId = Omit<ITipoDocumento, 'id'>;

export const createTipoDocumento = async ({
	docNome,
}: TipoDocumentoOmitId): Promise<ITipoDocumento> => {

	const TipoDocumentoExists = await prisma.tipoDocumento.findUnique({
		where: {
			docNome
		}
	})

	if(TipoDocumentoExists) throw new ApiErrors("Tipo de Documento já cadastrado", 400)

	return prisma.tipoDocumento.create({
		data: {
			docNome,
		},
	});
};
