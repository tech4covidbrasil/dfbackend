import prisma from '@config/prisma';
import ApiErrors from 'src/shared/errors/ApiErrors';

interface ITipoDocumento {
	id: string;
	docNome: string;
};

type ITipoDocumentoOmitId = Omit<ITipoDocumento, 'id'>;

export const updateTipoDocumento = async ({
	docNome
}: ITipoDocumentoOmitId, id: string, ): Promise<ITipoDocumento> => {

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

	if(tipoDocumentoExists && docNome !== tipoDocumento.nome) throw new ApiErrors("Tipo de documento já cadastrado com esse nome.")

	return prisma.tipoDocumento.update({
		where: {
			id,
		},
		data: {
			docNome
		},
	});
};
