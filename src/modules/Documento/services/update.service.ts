import prisma from '@config/prisma';
import { IDocumento } from 'src/shared/interfaces';

type IDocumentoOmitId = Omit<IDocumento, 'id'>;

export const updateDocumento = async (
	{
		dataNascimento,
		tipoDocumentoId,
		documentoValor,
		usuarioId,
	}: IDocumentoOmitId,
	id: string,
): Promise<IDocumento> => {

	return prisma.documento.update({
		where: {
			id,
		},
		data: {
			dataNascimento,
			tipoDocumentoId,
			documentoValor,
			usuarioId,
		},
	});
};
