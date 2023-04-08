import prisma from '@config/prisma';

interface ILandingPage {
	id: string;
	nome: string;
	email: string,
	telefone: string;
	cidade: string;
	estado: string;
	tipoLead: string;
	termosAceitos: boolean;
};

export const listLead = async (): Promise<ILandingPage[]> => {
	return await prisma.landingPageLeads.findMany()
};
