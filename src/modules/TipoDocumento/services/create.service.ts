import prisma from '../../../config/prisma';
import ApiErrors from '../../../shared/errors/ApiErrors';
import { ITipoDocumento } from '../../../shared/interfaces';

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

	return await prisma.tipoDocumento.create({
		data: {
			docNome,
		},
	});
};
