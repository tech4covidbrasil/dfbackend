import prisma from '../../../config/prisma';
import ApiErrors from '../../../shared/errors/ApiErrors';
import { ITipoDocumento } from '../../../shared/interfaces';

type ITipoDocumentoOmitId = Omit<ITipoDocumento, 'id'>;

export const updateTipoDocumento = async ({
	docNome
}: ITipoDocumentoOmitId, id: number, ): Promise<ITipoDocumento> => {

	const tipoDocumento = await prisma.tipoDocumento.findUnique({
		where: {
			id,
		}
	})

	if(!tipoDocumento) throw new ApiErrors("Tipo de documento não encontrado")

	const tipoDocumentoExists = await prisma.tipoDocumento.findUnique({
		where: {
			docNome
		}
	})

	if(tipoDocumentoExists && docNome !== tipoDocumento.docNome) throw new ApiErrors("Tipo de documento já cadastrado com esse nome.")

	return prisma.tipoDocumento.update({
		where: {
			id,
		},
		data: {
			docNome
		},
	});
};
