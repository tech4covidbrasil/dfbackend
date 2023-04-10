import prisma from '../../../config/prisma';
import { IDocumento } from '../../../shared/interfaces';
import ApiErrors from '../../../shared/errors/ApiErrors';

export const getDocumentoById = async (
	id: string,
): Promise<IDocumento> => {
	const documento = await prisma.documento.findUnique({
		where: {
			id,
		},
	});

	if(!documento) throw new ApiErrors("Documento não encontrado")

	return documento
};
