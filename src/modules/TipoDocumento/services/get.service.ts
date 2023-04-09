import prisma from '@config/prisma';
import ApiErrors from 'src/shared/errors/ApiErrors';

interface ITipoDocumento {
	id: string;
	docNome: string;
};

export const getTipoDocumentoById = async (
	id: string,
): Promise<ITipoDocumento> => {
	const tipoDocumento = await prisma.tipoDocumento.findUnique({
		where: {
			id,
		},
	});

	if(!tipoDocumento) throw new ApiErrors("Tipo de documento não encontrado")

	return tipoDocumento
};