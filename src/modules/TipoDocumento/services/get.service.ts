import prisma from '../../../config/prisma';
import ApiErrors from '../../../shared/errors/ApiErrors';
import { ITipoDocumento } from '../../../shared/interfaces';

export const getTipoDocumentoById = async (
	id: number,
): Promise<ITipoDocumento> => {
	const tipoDocumento = await prisma.tipoDocumento.findUnique({
		where: {
			id,
		},
	});

	if(!tipoDocumento) throw new ApiErrors("Tipo de documento não encontrado")

	return tipoDocumento
};