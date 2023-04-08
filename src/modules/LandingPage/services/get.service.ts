import prisma from '@config/prisma';
import ApiErrors from 'src/shared/errors/ApiErrors';

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

export const getLeadById = async (
	id: string,
): Promise<ILandingPage> => {
	const leads = await prisma.landingPageLeads.findUnique({
		where: {
			id,
		},
	});

	if(!leads) throw new ApiErrors("Lead não encontrado")

	return leads
};
