import prisma from '@config/prisma';

interface ITipoDocumento {
	id: string;
	docNome: string;
};

export const listTipoDocumento = async (): Promise<ITipoDocumento[]> => {
	return await prisma.tipoDocumento.findMany()
};
