import prisma from '../../../config/prisma';
import { IDocumento } from '../../../shared/interfaces';

type IDocumentoOmitId = Omit<IDocumento, 'id'>;

export const createDocumento = async ({
	dataNascimento,
	tipoDocumentoId,
	documentoValor,
	usuarioId,
}: IDocumentoOmitId): Promise<IDocumento> => {
	return prisma.documento.create({
		data: {
			dataNascimento,
			tipoDocumentoId,
			documentoValor,
			usuarioId,
		},
	});
};
